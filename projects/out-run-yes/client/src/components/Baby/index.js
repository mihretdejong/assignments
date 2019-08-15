import React, { Component } from 'react'
import BabyForm from './BabyForm.js'
import { Link } from 'react-router-dom'
import { withUser } from '../../context/UserProvider.js'

//when you export this file, it will be named Baby and not index. 
// in App.js when we import it and call it in protected routes it will just be baby because it has all the methods and states we want 
//
class Baby extends Component {
    constructor(){
        super()
        this.state = {
            babyname: "",
            babyProImg: "",
            toggle: false
        }
    }
    // when the user logs in we want to get all thier data, list of babies and a form to add more baby entries 
    componentDidMount(){
        this.props.getUserBabies()
    }
    toggler = () => {
        this.setState(prevState => ({ toggle: !prevState.toggle}))
    }
    handleChange = e => {
        const { name, value } = e.target 
        this.setState({ [name]: value})
    }
    handleSubmit = e => {
        e.preventDefault()
        //this handleSubmit is updating the local state
        // the newBaby is the same thing as saying this.state in the brackest where we're adding a new baby 
        
        const newObj = {
            name: this.state.babyName,
            babyProImg: this.state.babyProImg,
        }
        // we can choose to either simply tell it to:
        // this.props.addBaby(this.state) insetead of adding the newly defined const newObj, it will update our state in UserProvider with the new information 
        this.props.addBabyEntry(newObj) 
        this.setState({babyName: "", babyProImg: ""})
    }

    render(){
        console.log(this.props)
        
        const { babies, user } = this.props
        // console.log(babies1)
        return (
            <div className="baby-form-div">
                    <h1> Hi {user.username}!</h1>
                    <BabyForm
                        {...this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        btnText="Add Little Love"
    
                    />
                <div className="babyNameLandingPage">

                    {babies.map((baby, _id) => 
                        <div key={baby._id}>
                            <Link  to={{pathname: "/babyprofile", state: {...baby}}}>
                                <h1 >{baby.name}</h1>
                            </Link>
                                {/* <div >
                                   {

                                        <BabyForm
                                            {...this.state}
                                            handleChange={this.handleChange}
                                            handleSubmit={this.handleSubmit}
                                            btnText="Edit Baby's profile"
                                            />                                                                                          
                                   } 
                                </div> */}

                        </div>
                        )}
                            
                </div>


            </div>
        )
    }
}

export default withUser(Baby) 