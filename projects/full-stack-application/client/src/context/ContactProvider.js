import React, { Component } from 'react'
import axios from 'axios'

//contacts is a data we might need globally

const ContactContext = React.createContext()
class ContactProvider extends Component{
    constructor(){
        super()
        this.state = ({
            contacts: []
        })
    }
    getAllContacts = () => {
        axios.get("/books")
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }
    //ContactContext.Provider is not the provider but it is the thing that uses the provider 
    // {this.props.children} says that you're going to be warpped another component 
    render(){
        return(
            <ContactContext.Provider
                value={{
                    getAllContacts: this.getAllContacts

                }}>
                {this.props.children}
            </ContactContext.Provider>
        )
    }
}



export default ContactProvider
//takes a funciton (C) and gives a function 
// props is a function, a function that takes a function and returns a function
// the
export const withContact = C => props => (
    <ContactContext.Consumer>
        { value => <C {...value} {...props}/> }
    </ContactContext.Consumer>
)