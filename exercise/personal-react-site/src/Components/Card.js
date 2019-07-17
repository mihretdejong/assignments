import React from 'react'
import Replace from './Replace.js'
import { Link, withRouter } from 'react-router-dom'


const Card = props => {
    // const answers = props.incorrect_answers.push(props.correct_answer)
    // console.log(answers)
    // const randomizedAnswer = answers.sort((a, b) => {
    //     return a - b

    //             })
    console.log(props.userIsCorrect)
    console.log(props.displayAnswer)

    const answers = [...props.incorrect_answers, props.correct_answer] 
    const randomFunc = (arr) => {
        for (let i = 0; i < arr.length - 1 ; i++){
          const num = Math.floor(Math.random() * (arr.length - 1));
          //why are we doing one less than the length of the array?
          const oldValue = arr[num]
          arr[num] = arr[num + 1] 
          arr[num + 1] = oldValue
        }
        return arr
    }
    const firstRun = randomFunc(answers)
    const secondRun = randomFunc(firstRun)
    const mappedAnswers = secondRun.map((answer, i) => {
        return <div key={i} >
                    <button className="answer-choices-btn" onClick={()=> props.handleSubmit(answer, props.correct_answer)}>{Replace(answer)}</button>   
               </div>
    })
    console.log(props.userIsCorrect)
    
    return(
        
        
       
        <div className="card-div" style={{}}> 
            <select>
                <option>General Knowledge </option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
            </select>

            <p className="question-tag" >{Replace(props.question)}</p>
                {mappedAnswers} 
            <div className="hey">
                {props.displayAnswer? 
                <div className="background-div"> 
                    <div className="correct-answer" >
                        <div>
                            {props.userIsCorrect?
                            <p>Correct!</p>
                            :
                            <p> Nice Try!</p>}
                        </div>
                        <p>The correct answer is: {Replace(props.correct_answer)}</p>
                        <p>Your current score is: {props.score}</p>   
                        <div className="score-link-end">{props.afterTenQuestions?
                            <div>
                                <p>Well done!</p>
                                <Link to="/" >Go to Home page</Link>    
                            </div>
                            : 
                            <button className="continue-btn" onClick={props.nextQuestion}>Continue</button>}</div> 
                    </div>
                </div>
                :
                <p> </p>
                }
            </div>  
        </div>
    )
}


export default withRouter(Card)