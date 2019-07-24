import React from 'react'

const Contact = (props) => {
    return(
        <div>
            <form>
                <input
                    type="text"
                    name="firstName"
                    value={props.firstName}
                    onChange={props.handleChange}/>
            </form>
        </div>
    )
}







export default Contact