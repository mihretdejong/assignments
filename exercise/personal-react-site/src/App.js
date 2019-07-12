import React, { Component } from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Backdrop from './Backdrop/Backdrop.js'
import Sidedrawer from './SideDrawer/Sidedrawer'
import Home from './Pages/Home.js'
import Resources from './Pages/Resources.js'
import Questions from './Pages/Questions.js'
import './style/style.css'
import {Switch, Route } from 'react-router-dom'
// import QuestionList from './QuestionList.js';




class App extends Component{
    constructor(){
        super()
        this.state = {
            setofquestions: [],
            sideDrawerOpen: false,
            
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
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}

        } )

    }
    //backdropClickHandler with always close the drawer, so we don't need to set prevState
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})

    }

    render(){

            // let sidedrawer = null;
            let backdrop = null;
            //the logic here only controls the backdrop 
            //the sidedrawer will be controlled with CSS property
            // inside return, we can pass our component a prop called 'show'
            if(this.state.sideDrawerOpen){
                backdrop = <Backdrop click={this.backdropClickHandler}/>
            } 

        return(
            <div style={{height: 100}}>
                
                <Sidedrawer show={this.state.sideDrawerOpen}/>
                {/* <Backdrop/> */}
                
                {backdrop}
                <Navbar drawerClickHandler = {this.drawerToggleClickHandler}/>
                <Switch>
                    
                    
                    <Route exact path="/" component={Home}/>
                

                    <Route 
                        path="/questions"
                        component={Questions}/>
                    <Route
                        path="/score"
                        component={Resources}/>
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