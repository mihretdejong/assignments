import React, { Component } from 'react'
import BabyForm from './BabyForm.js'

//when you export this file, it will be named Baby and not index. 
// in App.js when we import it and call it in protected routes it will just be baby because it has all the methods and states we want 
//
class Baby extends Component {
    constructor(){
        super()
        this.state = {
            babyname: "",
            babyImg: "",
            caption: "",
        }
    }

    handleChange = e => {
        const { name, value } = e.target 
        this.setState({ [name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        //this handleSubmit is updating the local state
        // const newBaby = {
        //     babyname: this.state.babyname,
        //     babyImg: this.state.babyImg
        // }
        // the newBaby is the same thing as saying this.state in the brackest where we're adding a new baby 
        const newObj = {
            babyname: this.state.babyname,
            post: [{
                img: this.state.babyImg,
                imgCaption: this.state.caption
            }]

        }
        // this.props.addBaby(this.state)
        this.props.addBaby(newObj)
        this.setState({babyname: "", babyImg: ""})
    }

    render(){
        return (
            <div>
                <BabyForm
                    {...this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    btnText="Add Little Love"
                    
                />

            </div>
        )
    }
}



export default Baby 