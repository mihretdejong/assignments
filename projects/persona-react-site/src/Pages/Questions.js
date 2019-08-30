import React, { Component} from 'react'
import axios from 'axios';
import Card from '../Components/Card.js'
import Form from './Form.js'
import '../style/question.css'

class Questions extends Component {
    constructor(){
        super()
        this.state = {
            trivia: [],
            i: 0,
            afterTenQuestions: false,
            score: 0,
            displayAnswer: false,
            messageToUser: "",
            userIsCorrect: false,
            category:"",
            difficulty: "easy",
            displayForm: true,   
        }     
    }
    // handle the user's answer button click to set state for score, category..etc
    handleSubmit = ( userAnswer, correctAnswer ) => {
        this.setState(prevState =>{
            if(userAnswer === correctAnswer){
                return {
                    displayAnswer: !prevState.displayAnswer,
                    score: prevState.score += 10 , 
                    category: prevState.category,
                    difficulty: prevState.difficulty,
                    userIsCorrect: true 
                }
            }else {
                return {
                    displayAnswer: !prevState.displayAnswer, 
                    userIsCorrect: false
                }
            }
        })
    }
    // set state for the initial axios request to get the data
    handleSubmitForm = (e) => {
        e.preventDefault()
        axios.get(`https://opentdb.com/api.php?amount=10&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    displayForm: false,
                    trivia: res.data.results,
                    afterTenQuestions: false,
                    difficulty: res.data.results.difficulty,      
                })
            })
            .catch(err => console.log(err))

    }
    //client presses to go to the next question after the score and correct answer display
    nextQuestion = () => {
        if (this.state.i < 9){
            this.setState(prevState => {
                return {
                    i: prevState.i + 1,
                    displayAnswer: false,
                }
            })
        } else {
            this.setState({afterTenQuestions: true})   
        }
    }

     handleChangeDif = difficulty => {
         this.setState({
             difficulty: difficulty.target.value,
         })
     }
     handleChangeCat = category => {
         this.setState({
            category: category.target.value
         })
     }
    render(){
    
        return (
            <div className="question-div">
                 {this.state.displayForm && 
                    <Form
                        handleSubmitForm = {this.handleSubmitForm}
                        handleChangeCat= {this.handleChangeCat}
                        handleChangeDif={this.handleChangeDif}/> 
                } 
                {this.state.trivia[0] ?
                    <div>
                        <Card 
                            userIsCorrect={this.state.userIsCorrect}
                            displayAnswer={this.state.displayAnswer}
                            score={this.state.score}
                            afterTenQuestions={this.state.afterTenQuestions}
                            nextQuestion={this.nextQuestion}
                            handleChangeDif={this.handleChangeDif}
                            handleChangeCat={this.handleChangeCat}
                            handleSubmit={this.handleSubmit}
                            handleSubmitForm = {this.handleSubmitForm}
                            correct_answer={this.state.trivia[this.state.i].correct_answer}
                            incorrect_answers={this.state.trivia[this.state.i].incorrect_answers}
                            question={this.state.trivia[this.state.i].question}
                        />
                    
                    </div> 
                    :
                    <div>
                    {/* <div> Question is loading</div> */}
                    </div>
                }
            </div>
        )
    }
}


export default Questions