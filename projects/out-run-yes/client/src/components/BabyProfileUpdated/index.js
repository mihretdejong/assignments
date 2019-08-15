import React, { Component } from 'react'
import BabyEditForm from './BabyEditForm.js'
import { withUser } from '../../context/UserProvider.js'
// import { Link } from 'react-router-dom'


class BabyProfileUpdated extends Component{
    constructor(){
        super()
        this.state=({
            name: "",
            babyProImg: "",
            toggle: false
            
        })
    }

    toggler = () => {
        this.setState({
            toggle: true
        })
    }
   
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name] : value })

    }
    handleSubmit = (e) => {
        e.preventDefault()

        //declare the babyentryId here to pass to the function, you can get it from props, this comp has to consume the provider
        const babyentryId = this.props.propsFromProfileId
        const updatedProfile =  {}
        if( this.state.name !== ""){
            updatedProfile.name = this.state.name
        } 
        if( this.state.babyProImg !== ""){
            updatedProfile.babyProImg = this.state.babyProImg
        } 
        console.log(updatedProfile)
        this.props.editBabyEntry(babyentryId, updatedProfile) 
        this.setState({
            name: this.state.name,
            babyProImg: this.state.babyProImg,
            toggle: false

        })
        console.log("newtest",  this.props)
    
    }
    render(){
        // console.log("hey you", this.props)
        return(
            <div>
                <BabyEditForm
                    {...this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    toggler={this.toggler}
                    />
    

            </div>
        )
    }

}

export default withUser(BabyProfileUpdated)