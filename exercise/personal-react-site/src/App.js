import React, { Component } from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

import Home from './Home.js'
import Score from './Score.js'
import Questions from './Components/Questions'
import './style.css'
import {Switch, Route } from 'react-router-dom'
// import QuestionList from './QuestionList.js';




class App extends Component{
    constructor(){
        super()
        this.state = {
            setofquestions: [],
            
        }
    }

    // componentDidMount = () => {
    //     axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
    //         .then(response => {
    //             console.log(response.data.results)
    //             this.setState({
    //                 setofquestions: response.data.results  
    //             })
    //         })
    //         .catch(err => console.log(err))

    // }


//
// how to map out the arrays and feed it into answers
// turn it into form (check box?)
// include a 
    render(){

       

        return(
            <div>
                <Navbar/>
                <Switch>
                    
                    
                    <Route exact path="/" component={Home}/>
                

                    <Route 
                        path="/questions"
                        component={Questions}/>
                    <Route
                        path="/score"
                        component={Score}/>
                </Switch>
                {/* <h1> {Replace("&#039")}</h1> */}
                <Footer/>

                        {/* <Route path="/questionlist" component={QuestionList}/>
                        //we need exact path or it won't go to the other pages */}
                

                
                
                

            </div>
        )
    }
}












export default App