import React from 'react'
import Replace from './Replace.js'


const Card = props => {
    // const answers = props.incorrect_answers.push(props.correct_answer)
    // console.log(answers)

    const answers = [...props.incorrect_answers, `${props.correct_answer}+correct`] 
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
                    <p>{Replace(answer)}</p>
                    <input
                        onChange={props.handleChange} 
                        value={answer} 
                        name="choice" 
                        type="radio"/>
               </div>
    })

    return(
        <div className="card-div" style={{border: "1px solid black"}}>

            
            <p>{Replace(props.question)}</p>
           

            <form onSubmit={(e) => props.handleSubmit(e)} >
                {mappedAnswers}
                <button 
                    className={props.displayAnswer? "hidebutton": "" }>Submit</button>
                <div className="hey">
                    {/* fragmentize because you can only return one thing in a ternery */}
                    {props.displayAnswer? 
                    <div className="background-div"> 
                        <div className="correct-answer" >
                            <p>{Replace(props.correct_answer)}</p>
                            {/* the btn onClick also triggers the form's onSubmit and the onSubmit resets
                            the value of displayAnswer in state so that the correct answer is not displayed 
                            automatically when we continue to the next question */}
                            <button onClick={props.nextQuestion}>Continue</button>
                        </div>
                    </div>
                    :
                    <p> </p>
                    }
                </div>

            </form>
            
            
           
            
        </div>
    )
}


export default Card