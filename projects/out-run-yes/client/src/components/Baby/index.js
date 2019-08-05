import React, { Component } from 'react'
import BabyForm from './BabyForm.js'

class Baby extends Component {
    constructor(){
        super()
        this.state = {
            babyname: ""
        }
    }

    handleChange = e => {
        const { name, value } = e.target 
        this.setState({ [name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
    }
    render(){
        return (
            <div>
                <BabyForm
                    babyname={this.state.title}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    btnText="Add Baby"
                />

            </div>
        )
    }
}



export default Baby 