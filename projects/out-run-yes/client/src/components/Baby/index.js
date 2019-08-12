import React, { Component } from 'react'
import BabyForm from './BabyForm.js'
import { Link } from 'react-router-dom'

//when you export this file, it will be named Baby and not index. 
// in App.js when we import it and call it in protected routes it will just be baby because it has all the methods and states we want 
//
class Baby extends Component {
    constructor(){
        super()
        this.state = {
            babyname: "",
            babyProImg: "",
        }
    }
    // when the user logs in we want to get all thier data, list of babies and a form to add more baby entries 
    componentDidMount(){
        this.props.getUserBabies()
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
            name: this.state.babyname,
            babyProImg: this.state.babyProImg


            // posts: [{
            //     img: this.state.babyImg,
            //     imgCaption: this.state.caption
            // }]
        }
        // we can choose to either simply tell it to:
        // this.props.addBaby(this.state) insetead of adding the newly defined const newObj, it will update our state in UserProvider with the new information 
        this.props.addBabyEntry(newObj)
        // console.log(this.props)
       
        // we set it to an empthy string so that it refreshses  
        this.setState({babyname: "", babyProImg: ""})
    }

    render(){
        //this.props is coming from our context provider 
        console.log(this.props)
        const { babies } = this.props
        
        
        return (
            <div className="baby-form-div">
                <BabyForm
                    {...this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    btnText="Add Little Love"
  
                />
                <div className="babyNameLandingPage">

                    {babies.map((baby, _id) => 
                        <Link to={{pathname: "/babyprofile", state: {...baby}}}>
                            <h1  key={baby._id} >{baby.name}</h1>
                        </Link>)}
                </div>


            </div>
        )
    }
}

export default Baby 