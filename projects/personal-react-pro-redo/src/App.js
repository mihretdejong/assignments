import React, { Component } from 'react'
import axios from 'axios'
import Card from './components/Card.js'
import './style.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            triviaQuestions: [],
            count: 0
            

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
        console.log(this.state.triviaQuestions)
       

        return(
            <div>
                <Card/>
               
                    
               
            </div>
        )
    }
}

















export default App 