import React from 'react'


const Card = (props) => {
    const answers = [...props.incorrectAnswers, props.correctAnswer]
    const mappedQuestions = answers.map((answer, i) => {
        return <div>
                    <button>{answers}</button>

               </div>
    })
    return(
        <div>
            

        </div>
    )
}









export default Card 