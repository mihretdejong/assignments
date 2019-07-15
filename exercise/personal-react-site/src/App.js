import React, { Component } from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Backdrop from './Backdrop/Backdrop.js'
import Sidedrawer from './SideDrawer/Sidedrawer'
import Home from './Pages/Home.js'
import Resources from './Pages/Resources.js'
import Questions from './Pages/Questions.js'
import LoadingPage from './LoadingPage/LoadingPage.js'
import './style/style.css'
import {Switch, Route } from 'react-router-dom'
// import QuestionList from './QuestionList.js';




class App extends Component{
    constructor(){
        super()
        this.state = {
            setofquestions: [],
            sideDrawerOpen: false,
            loadingPageOn: true,
            
        }
    }
    //one of the reason we need to use a class is for a lifecycle method
    //we use the axios library so that we don't have to do an xhr file everytime?
    //setState is asynchronous-meaning, it waits, pending, before it mutates the state. the waiting is still fast but it makes a difference if we expect react to display the mutatted dtata right away
    //as opposed to, synchrouns-maening, it immediately executs change of state.
    //the change of state is first rendered before it is saved in state, 
    //render is called twice, once following the get request,the second time after the first condition
    //KEY: when you console log to see your data, do it in render
    // otherwise, you can tell it to r

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
    loadingPageHandler = () => {
        this.setState({loadingPageOn: false})
    }
    
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
            <div className="app-container-div" >

                <LoadingPage loadingPageOn={this.state.loadingPageOn} loadingPageHandler = {this.loadingPageHandler}/>
                <Sidedrawer show={this.state.sideDrawerOpen}
                            click={this.backdropClickHandler}/>
                {/* <Sided /> */}
                {/* <Backdrop/> */}
                
                {backdrop}
                <Navbar drawerClickHandler = {this.drawerToggleClickHandler}/>
                <Switch>
                    <Route exact path="/" render={(routerProps) =>  <Home {...routerProps}/>}/>
                    <Route 
                        path="/questions"
                        render={(routerProps) =>  <Questions {...routerProps}/>}/>
                    <Route
                        path="/score"
                        render={(routerProps) =>  <Resources {...routerProps}/>}/>
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