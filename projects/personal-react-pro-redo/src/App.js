import React, { Component } from 'react'
import axios from 'axios'
import Card from './components/Card.js/index.js.js.js'
import './style.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            triviaQuestions: [],
            index: 0,
            allAnswers: [],
            correctAnswers: [],
            incorrectAnswers: [],
            score: 0,
            sideDrawerOpen: false

        }
    }

    componentDidMount(){
        axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
             .then(res => 
               
                this.setState({
                    triviaQuestions: res.data.results
                    
                }))
             .catch(err => console.log(err))
    }

    render(){
       
        

        return(
            <div>
                <Card
                    correctAnswer={this.state.trivia[0].correct_answer}
                    incorrectAnswers={this.state.trivia[0].incorrect_answer}/>
                    console.log(this.state.triviaQuestions)
               
                
               
            </div>
        )
    }
}

















export default App 