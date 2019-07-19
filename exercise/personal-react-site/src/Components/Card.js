import React from 'react'
import Replace from './Replace.js'
import { Link, withRouter } from 'react-router-dom'


const Card = props => {
   
    // console.log(props.userIsCorrect)
    // console.log(props.displayAnswer)

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
    console.log(props.handleSubmit)
    const firstRun = randomFunc(answers)
    const secondRun = randomFunc(firstRun)
    const mappedAnswers = secondRun.map((answer, i) => {
        return <div key={i} >
                    <button className="answer-choices-btn" onClick={()=> props.handleSubmit(answer, props.correct_answer)}>{Replace(answer)}</button>   
               </div>
    })
    // console.log(props.userIsCorrect)
    // we used two handlechanges for each select options
    //the handlechanges save the value of the user's input in state with the setState method
    //onChange and name go on the select and value on the options
    //Controlled component- a component where state keeps current with any user input.
    //two way data binding states that, the form has to be bound to the state, and the state has to be bound to the form
    //the moment the user types a letter, the state is immediatly updating
    //1.Fomr-buld a form with a form, input and button tag
    //a form refreshes by default 
    //2.every input needs three attributes, name, onChange and value
    // name represents what the input is about, the name(literal name in state) has to match with the state
    //the value(literal value in state) must be referencing the name in state(this is what is creating the two way data binding)
    //onChange is the event(camelCased)-it fires the moment the user puts a letter 
    //onChange listens to the event and we build a changeHandler 
    //eventhandlers(handleChange)-recieve an event when the onChange fires
    //the event is an object that tells us exactly where the event occured
    //if we console log the event, it will show up as an object
    //because it's an object we grab the value as : event.target
    //handleChange = (event) => { this.setState({ category: event.target.value})}: the literal value of the input that is saved in state the moment the user starts typing
    //the two data binding happens because, the moment the user puts in info, setState fires and the whole page rerenders and state updates with the new value 
    //the last thing on a form is a handleSubmit method that fires on form submition 
    // a callback func that exists inside of another func that only runs once something in the outer function triggers it 
    //function returnTotal(total){
    //  return total  
    //}
    // 
    //function sum(num1, num2, callback){
        // const result = num1 + num2 
        // callback(result)
    //}
    // sum (2, 4, returnTotal)
    
    return(
        <div className="card-div" style={{}}> 
            

            <form onSubmit={ (e) => props.handleSubmitForm(e)} >
                
                
                <select onChange={props.handleChangeCat} name={props.category}>
                    <option>-Select a Category </option>
                    <option value="General Knowledge">General Knowledge </option>
                    <option value="History">History</option>
                    <option value="Science: Computers">Computers</option>
                    <option value="Geography">Geography</option>
                    <option value="Entertainment: Video Games">Video Games</option>
                    <option value="Science: Mathematics">Math</option>
                    <option value="Entertainment: Film">Film</option>
                </select>

                <select onChange={props.handleChangeDif} name={props.difficulty}>
                    <option>-Select level-</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Difficult</option>   
                </select>
                <button >Submit</button>
            </form>
             <form >

            </form> 

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