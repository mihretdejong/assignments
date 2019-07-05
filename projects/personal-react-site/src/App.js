import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card.js'



class App extends Component{
    constructor(){
        super()
        this.state = {
            questions: [],


        

            
        }
    }

    componentDidMount = () => {
        axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
            .then(response => {
                console.log(response.data.results)
                this.setState({
                    questions: response.data.results
                  
                    
                })
            })
            .catch(err => console.log(err))

    }


//
// how to map out the arrays and feed it into answers
// turn it into form (check box?)
// include a 
    render(){

        const mappedQuestions = this.state.questions.map(trivia => {
            return <Card 
                    question={trivia.question}
                    correctAnswer={trivia.correct_answer}
                    category={trivia.category}
                    />
        })

        return(
            <div>

                {mappedQuestions}

                
                
                

            </div>
        )
    }
}












export default App