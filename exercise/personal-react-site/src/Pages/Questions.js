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
            difficulty: "hart",
            displayForm: true,   
        }     
    }
    // lifecycle methods
    //comppnent did mount triggred on page load
    //component did update triggred whenever there is a change in props or change in state 
  
    // componentDidMount(){
    //     axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
    //         .then(res => {
    //              console.log(res.data.results)
    //             this.setState({
    //                 trivia: res.data.results,
    //                 afterTenQuestions: false,   
    //             })
    //         })
    //         .catch(err => console.log(err))   
    // }
    
    handleSubmit = ( userAnswer, correctAnswer ) => {
       
        console.log('handleSubmit')
        //film = 10
        //music = 12
        //history  = 23
        // const 
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
    // this.setState(prevState =>{
    //     if(){
    //         use this number
    //     } else if ( the user === science){
    //         use this number in query
    //     }
    // })
    // console.log(e)
    handleSubmitForm = (e) => {
        e.preventDefault()
        console.log(this.state.category)
        console.log(this.state.difficulty)

       
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
    //onClick event, the i is the entire object (q's and answers)
    //in nextQuestion(we're mapping through the question in our data (sort of))/without using map
    nextQuestion = () => {
        // console.log(this.state.i)
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
    // had to write two handleChange's because it was having a hard time updating
    //
     handleChangeDif = difficulty => {
        //  const value = e.target.value
        //  [e.target.name] = e.target.value 
        // [difficulty.target.name] = difficulty.target.value
        // console.log(difficulty.target.value) 
         this.setState({
             difficulty: difficulty.target.value,
            //  category: category.target.value
         })
     }
     handleChangeCat = category => {
        //  console.log(category.target.value)
         this.setState({
            category: category.target.value
         })
     }
    render(){
        // console.log(this.state.userIsCorrect) //render is immediately called everytime setState fires which is every time the user puts something in input
        // in return, we render two statements which says display thefirst bracket followed by the next bracket
        //first display form, then perform the methods on the form
        //then display the first question from trivia , then display the card component
        // we need to write a statment that says loading while the question is coming through 
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