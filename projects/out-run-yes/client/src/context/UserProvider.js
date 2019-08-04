import React, { Component } from 'react'


const UserContext = React.createContext()
// the user state maintains the user information and the token created during signup and login 
class UserProvider extends Component{
    constructor(){
        super()
        this.state ={
            user: {},
            token: ""
        }
    }
    // the user provider maintains the user info
    //the auth methods below
    //it mmaintains the user and token in state 

    // this recieves the credential as a paramenter from our authform
    signup = () => {
        axios.post("/auth/signup", credentials)
            .then(res => {
                //what we sent in our authRouther is what we should expect to get
                const { user, token } = res.data
                // object literal can let us simply state the user and toke in object parentehsis and not use key value this but,
                // this.setState({ user, token})
                this.setState({ user: user, token: token})
            })
            .catch(err => console.log(err))

    }

    login = () => {

    }

    logout = () => {

    }
    // the context returns the UserContext.Provider
    render(){
        return(
            <UserContext.Provider
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout
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












export default UserProvider