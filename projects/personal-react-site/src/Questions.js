import React, { Component} from 'react'
import axios from 'axios';
import Card from './Card.js'



class Questions extends Component {
    constructor(){
        super()
        this.state = {
            trivia: [],
            i: 0,
            choice: '',
            score: 0,
            displayAnswer: false,

        }     
    }
    //check if it's the last question
    //check if i === i.length, then reroute them to score page
    // on submit, check if choice is equal to the correct answer
    //if it is add 1 to score
    //pass the 
    // compare the user's choice with the correct answer
    // save the user's running score
    componentDidMount(){
        axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
            .then(res => {
                 console.log(res.data.results)
                this.setState({
                    trivia: res.data.results,   
                })
            })
            .catch(err => console.log(err))   
    }
  
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("test")
        this.setState(prevState =>{
            return {
                
                displayAnswer: !prevState.displayAnswer,
                choice: '',
                score: prevState.score + 1
            }
        })
  

    }
    //client presses to go to the next question after the score and correct answer display
    //onClick event, the i is the entire object (q's and answers)
    
    nextQuestion = () => {
        this.setState(prevState => {
            return {
                i: prevState.i + 1
            }
        })

    }

    handleChange = (e) => {
        this.setState({
            choice: e.target.value
        })
    }

    render(){

        return (
            <div>
                
                {this.state.trivia[0]? <Card 

                                            displayAnswer={this.state.displayAnswer}
                                            nextQuestion={this.nextQuestion}
                                            handleChange={this.handleChange}
                                            handleSubmit={this.handleSubmit}
                                            correct_answer={this.state.trivia[this.state.i].correct_answer}
                                            incorrect_answers={this.state.trivia[this.state.i].incorrect_answers}
                                            question={this.state.trivia[this.state.i].question}/> : "Question Loading"}
                 
            </div>
        )
    }

}






export default Questions