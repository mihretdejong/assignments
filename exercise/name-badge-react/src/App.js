import React, { Component } from 'react'
import Badge from './Badge'
import Form from './Form'
import './style.css'



class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favFood: "",
            drinks: "",
            textArea: "",
            names: []

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newName = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phone: this.state.phone,
            favFood: this.state.favFood,
            textArea: this.state.textArea
        }

        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favFood: "",
            textArea: "",
            names: [...prevState.names, newName]
        }))
    }
    

    render(){
        // const {firstName, lastName, email, }
        const mappedNames = this.state.names.map((name, i) =>{
            
           return     <Badge
                            key={i}
                            firstName={name.fristName}
                            lastName={name.lastName}
                            email={name.email}
                            placeOfBirth={name.placeOfBirth}
                            phone={name.phone}
                            favFood={name.favFood}
                            textArea={name.textArea}/>
                            
        })
        
        return (
            <div className="main-div">
                <div className="title">
                    <h1> Name Badge</h1>
                </div>
                <Form
                    
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    firstName={this.state.fristName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    placeOfBirth={this.state.placeOfBirth}
                    phone={this.state.phone}
                    favFood={this.state.favFood}
                    textArea={this.state.textArea} />
            
                {mappedNames}
            </div>
        )
    }
}




export default App 