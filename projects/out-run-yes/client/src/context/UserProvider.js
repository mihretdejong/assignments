import React, { Component } from 'react'
import axios from 'axios'


const UserContext = React.createContext()

//takes the axios package and resave in userAxios package which we can use to configure the authentication
const  userAxios = axios.create()
//Axios interceptor(it's like a middleware)
//whenever using useraxios, intercept and use this configiration from the local storage, 
//add the token to authorzation 
userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config

})
// the user state maintains the user information and the token created during signup and login

class UserProvider extends Component{
    constructor(){
        super()
        this.state ={
            // we have query that says that if there is anything in local storage, get it and save it in state if not resent to an empthy default
            //this keeps us logged in even if the page resets
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "", 
            babies: [],
            errMsg: "",
            babyposts: [],

        }
    }
    // the user provider maintains the user info
    //the auth methods are below
    //it mmaintains the user and token in state 

    // this recieves the credential as a paramenter from our authform
    // proxy will take over whenever we have a forward slash request
    //
    signup = (credentials) => {
        axios.post("/auth/signup", credentials)
            .then(res => {
                console.log(res)
                //what we sent in our authRouther is what we should expect to get
                const { user, token } = res.data
                // object literal can let us simply state the user and toke in object parentehsis and not use key value this but,
                // this.setState({ user, token})
                localStorage.setItem("token", token)
                //the user comes as an object so we stringy it into react object
                // we have to save the local storage info in state so that it doesn't reset into empthy object
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({ user: user, token: token})
                //the token disappears/everything in state when we refresh the page
                // we save it local storage so we can stay signed in 
            })
            // the console.dir shows you the directory and allows you to see the content of the err response
            .catch(err => this.handleAuthErr(err.response.data.errMsg))
            // .catch(err => console.dir(err.response.data.errMsg))

    }

    login = (credentials) => {
        console.log(credentials)
        axios.post("/auth/login", credentials)
            .then(res => {
                // console.log(res)
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({ user, token })
            })
            .catch(err => this.handleAuthErr(err.response.data.errMsg))
            // .catch(err => console.log(err))

    }

    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({
            user: {},
            token: ""
        })

    }
    handleAuthErr = (errMsg ) => {
        this.setState({ errMsg})
    }
    

    // this won't work unless we pass babies to the App which is the component that's directly consuming 
    getUserBabies = () => {
        userAxios.get("/api/baby")
            .then(res => {
                this.setState({
                    babies: res.data
                })
            })
            .catch(err => console.log(err))
         
    }
    // addBaby expects newBaby 
    addBabyEntry = (newBabyEntry) => {
        // console.log(newBaby)
        // called in the baby index.js componenet 
        userAxios.post("/api/baby", newBabyEntry)
            .then(res => {
                // console.log(res.data)
                const savedBabyentry = res.data
                // and the instead of adding res.data in the array, we can add savedBaby entry in the array
                this.setState(prevState => ({ 
                    babies: [...prevState.babies, savedBabyentry]
                }))
            })
            
            .catch(err => console.log(err))
    }
    //set state with the post response data
    //create a new component that displays post response data
    // connect that componnet with the provider, pass the posts prop to that componenet 
    //in that component, map through the posts and sort by date
    //

    // addBabyPosts = ( _id, newBabyPost) => {
    //     userAxios.put(`/api/baby/${_id}`, newBabyPost )
    //         .then(res => {
    //             const { babyPosts } = res.data.posts
    //             localStorage.setItem("babyPosts", babyPosts)
    //             localStorage.setItem("babyPosts", JSON.stringify(babyPosts))
    //             this.setState({babyPosts: babyPosts})
    //         })
    //         .catch(err => console.log(err))
    // }
    addBabyPosts = ( _id, newBabyPost) => {
        userAxios.put(`/api/baby/${_id}`, newBabyPost )
            .then(res => {
                // console.log(res.data.posts)
                this.setState(prevState => ({
                    babyposts: res.data.posts
                }))
            })
            .catch(err => console.log(err))
    }
   

    // the context returns the UserContext.Provider

    render(){
        // console.log(this.state.babyPosts)
        return(
            <UserContext.Provider
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    getUserBabies: this.getUserBabies,
                    addBabyEntry: this.addBabyEntry,
                    addBabyPosts: this.addBabyPosts
                }}>
                { this.props.children }

            </UserContext.Provider>
        )
    }
}

export default UserProvider
// higher order func that takes C (func or componenet ) as an argument
// and then it returns a function that takes props 
// when the props taking function is called, it takes the user context consumer
//the user context consumer provides us the value as a function which we then pass 
// the value and props from the provider to the compoenent 


export const withUser = C => props => (
    <UserContext.Consumer>
        { value => <C {...value} {...props}/>}
    </UserContext.Consumer>
)


