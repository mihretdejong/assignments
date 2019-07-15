import React from 'react'

const ContactForm = props => {
    const {handleSubmit, handleChange, inputs: {fName, lName, email, bday}  } = props
    return(
        <div className="resources-form-div">
            <form className="resources-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fName"
                    value={fName}
                    onChange={handleChange}
                    placeholder="First Name"/>
                <input
                    type="text"
                    name="lName"
                    value={lName}
                    onChange={handleChange}
                    placeholder="Last Name"/>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email"/>
                
                <input
                    type="date"
                    name="lName"
                    value={bday}
                    onChange={handleChange}
                    placeholder="Birthday"/>
                    
                {/* <input 
                onChange={handleChange} 
                    type="text" 
                    name="isbn" 
                    className="search-input" 
                    placeholder="ISBN search here..."/> */}
                

                <button>Submit</button>

            </form>
            <div>
                <h1>{fName}  {lName}</h1>
            </div>

        </div>
    )
}











export default ContactForm 