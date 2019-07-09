import React from 'react'
import Replace from './Replace.js'
import { Link, withRouter } from 'react-router-dom'


const Card = props => {
    // const answers = props.incorrect_answers.push(props.correct_answer)
    // console.log(answers)

    const answers = [...props.incorrect_answers, props.correct_answer] 
    // const randomizedAnswer = answers.sort((a, b) => {
    //     return a - b

    //             })
    
    const randomFunc = (arr) => {
        for (let i = 0; i < arr.length - 1 ; i++){
          const num = Math.floor(Math.random() * (arr.length - 1));
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
            
                    <button onClick={()=> props.handleSubmit(answer, props.correct_answer)}>{Replace(answer)}</button>
                    
               </div>
    })

    return(
        <div className="card-div" style={{border: "1px solid black"}}>  
            <p>{Replace(props.question)}</p>
                {mappedAnswers}
                {/* in the "hey" div, we are writing a ternery that askes if displayanswer is
            still false, if so, we are telling it  */}
               
                <div className="hey">
                    {/* fragmentize because you can only return one thing in a ternery */}
                    {props.displayAnswer? 
                    <div className="background-div"> 
                        <div className="correct-answer" >
                            <p>{Replace(props.correct_answer)}</p>
                            <p>Your current score is {props.score}</p>
                            
                            {/* the btn onClick also triggers the form's onSubmit and the onSubmit resets
                            the value of displayAnswer in state so that the correct answer is not displayed 
                            automatically when we continue to the next question */}
                            {/* nested ternery in a ternary doesn't work
                            we had to create a new div on one side of the ternary to add the new ternery
                            that asks whether we have reached at ten questions and if so 
                            to go to the score page. if not, to keep displaying the continue button  */}
                             
                            <div>{props.afterTenQuestions?
                                <Link to="/score" >SCORE</Link> 
                                : 
                                <button onClick={props.nextQuestion}>Continue</button>}</div> 
                            
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