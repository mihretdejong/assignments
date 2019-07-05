import React from 'react'


const Card = props => {
    return(
        <div style={{border: "1px solid black"}}>
            {/* question, correct answer, category,  */}
            <p>{props.question}</p>
            <p>{props.correctAnswer}</p>
            <p>{props.category}</p>
            
        </div>
    )
}


export default Card