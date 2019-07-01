import React from 'react'

const Contact = props => {
    return (
        <div className="contact-div">
            <form>
                <input
                    type="text"
                    name="fName"
                    value=""
                    placeholder="First name" />
                <input
                    type="text"
                    name="lName"
                    value=""
                    placeholder="Last name"/>
                <input
                    type="text"
                    name="phone"
                    value=""
                    placeholder="Phone"/>
                <input
                    type="text"
                    name="email"
                    value=""
                    placeholder="Email"/>

                <textarea
                    row={10}
                    cols={50}
                    type="textarea"
                    name="fName"
                    value=""
                    placeholder="Tell us more about yourself..."/>
            </form>
        </div>
    )
}



export default Contact