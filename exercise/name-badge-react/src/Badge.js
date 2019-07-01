import React from 'react'





const Badge = props => {
    
    const {firstName, lastName, email, placeOfBirth, phone, favFood, textArea } = props
    return (
        <div className="dis-badge">
            <div className="title-badge">
                <h2> Badge: </h2>

            </div>

            <div>
                <p>Name: {firstName} {lastName}</p>
                <p>Phone: {phone}</p>
                <p>Place of birth: {placeOfBirth}</p>
                <p>Favorite food{favFood}</p>
                <p>Email: {email}</p>
                <p className="dis-text-area">{textArea}</p>

            </div>
            

        </div>
    )

}

export default Badge









