import React, { Component} from 'react'
import axios from 'axios';
import Card from '../Components/Card.js'
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
            difficulty: 'Easy',
            messageToUser: "",
            userIsCorrect: false,
            category:"",
        }     
    }
  
    componentDidMount(){
        axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
            .then(res => {
                 console.log(res.data.results)
                this.setState({
                    trivia: res.data.results,
                    afterTenQuestions: false,   
                })
            })
            .catch(err => console.log(err))   
    }
    handleSubmit = ( userAnswer, correctAnswer, e ) => {
        // e.preventDefault()
        this.setState(prevState =>{
            if(userAnswer === correctAnswer){
                return {
                    displayAnswer: !prevState.displayAnswer,
                    score: prevState.score += 10 , 
                    category: prevState.category,
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
    //client presses to go to the next question after the score and correct answer display
    //onClick event, the i is the entire object (q's and answers)
    //in nextQuestion(we're mapping through the question in our data (sort of))/without using map
    nextQuestion = () => {
        console.log(this.state.i)
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
     handleChange = difficulty => {
        //  const value = e.target.value
        //  [e.target.name] = e.target.value 
         this.setState({
             [difficulty.target.name]: difficulty.target.value
         })
     }
    render(){
        console.log(this.state.userIsCorrect)

        return (
            <div className="question-div">
                {this.state.trivia[0]? <Card 
                                            userIsCorrect={this.state.userIsCorrect}
                                            displayAnswer={this.state.displayAnswer}
                                            score={this.state.score}
                                            afterTenQuestions={this.state.afterTenQuestions}
                                            nextQuestion={this.nextQuestion}
                                            handleChange={this.handleChange}
                                            handleSubmit={this.handleSubmit}
                                            correct_answer={this.state.trivia[this.state.i].correct_answer}
                                            incorrect_answers={this.state.trivia[this.state.i].incorrect_answers}
                                            question={this.state.trivia[this.state.i].question}
                                            />
                                             : 
                                             "Question Loading"}
                 {this.state.messageToUser}
            </div>
        )
    }

}






export default Questions