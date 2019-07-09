import React, { Component} from 'react'
import axios from 'axios';
import Card from './Card.js'



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
                    afterTenQuestions: false,   
                })
            })
            .catch(err => console.log(err))   
    }
  // handleSubmit is being given more than one prop, from the Card component
  //since handleSubmit is a function it can take as many props as you give it
  
    handleSubmit = ( userAnswer, correctAnswer ) => {
        // let number = this.state.score 
        // if(userAnswer === correctAnswer){
        //     number += 10
        //     console.log(number)
        // }
        this.setState(prevState =>{
            if(userAnswer === correctAnswer){
                return {
                    displayAnswer: !prevState.displayAnswer,
                    score: prevState.score += 10 , 
                }
            }else {
                return {
                    displayAnswer: !prevState.displayAnswer, 
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
    //.persist - requests permission to use persistent storage() and returns a promise with a .then and a .catch
    //asks the browser to use persistent storage(local storage), if the browser grants permission
    //react creats a synthetic event and if we want the event's information to stay, we use e.persist
    //
    //e.persist()
    //the e isn't available to asynchronous(as is in the case of setState), we we have to save it by using e.persist
    //but if we don't pass our method e, we don't have to use e.persist 
    //console.log(e.target.textContent)
    // handleQuestionAnswer = () => {

    //     this.setState(prevState => {
    //        if( e.target.textContent === this.state.correct_answer ){
    //            return {score: prevState.score + 1, displayAnswer: true}
    //        } else {
    //            return {messageToUser: "Wrong Anser- continue to next question", displayAnswer: true}
    //        }
            
    //     })
    // }
    //toaster ~ kind of alert

    render(){

        return (
            <div>
                
                {this.state.trivia[0]? <Card 

                                            displayAnswer={this.state.displayAnswer}
                                            score={this.state.score}
                                            afterTenQuestions={this.state.afterTenQuestions}
                                            nextQuestion={this.nextQuestion}
                                            handleChange={this.handleChange}
                                            handleSubmit={this.handleSubmit}
                                            correct_answer={this.state.trivia[this.state.i].correct_answer}
                                            incorrect_answers={this.state.trivia[this.state.i].incorrect_answers}
                                            question={this.state.trivia[this.state.i].question}/> : "Question Loading"}
                 {this.state.messageToUser}
            </div>
        )
    }

}






export default Questions