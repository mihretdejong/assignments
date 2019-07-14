import React from 'react'
import { withTrivia } from '../context/TriviaProvider'
import '../style/resources.css'
import Form from '../Shared/Form.js'
import ContactForm from '../Shared/ContactForm';



const Resources = (props) => {
    return(
        <div className="resource-page-div">
            <Form
                inputs={{
                    fName: "",
                    lName: "",
                }}
                submit={(inputs) => alert(`Hi my name is ${inputs.fName} ${inputs.lName}`)}
                //we get inputs props from state
                //render gives us everything, all of the props are give to the ContactForm
                render={formProps => <ContactForm  {...formProps}/>}/>
                <div className="resource-search-div">
                    <form onSubmit={props.handleSubmit}>
                        <input onChange={props.handleChange} type="text" name="isbn" className="search-input" placeholder="ISBN search here..."/>
                    </form>
                </div>
                <div className="resources-books-div">
                    <div className="book1"/>
                    <div className="book2"/>
                    <div className="book3"/>
                    <div className="book4"/>
                    <div className="book5"/>
                    <div className="book6"/>
                    <div className="book7"/>

                </div>
        </div>
    )
}

export default withTrivia(Resources)












