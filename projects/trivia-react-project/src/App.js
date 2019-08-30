import React, { Component } from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Backdrop from './Backdrop/Backdrop.js'
import Sidedrawer from './SideDrawer/Sidedrawer'
import Home from './Pages/Home.js'
import Resources from './Pages/Resources.js'
import Questions from './Pages/Questions.js'
import LoadingPage from './LoadingPage/LoadingPage.js'
import {Switch, Route } from 'react-router-dom'
import './style/style.css'


class App extends Component{
    constructor(){
        super()
        this.state = {
            setofquestions: [],
            sideDrawerOpen: false,
            loadingPageOn: true,          
        }
    }

    loadingPageHandler = () => {
        this.setState({loadingPageOn: false})
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        } )
    }

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }
    
    render(){
            let backdrop = null;
            if(this.state.sideDrawerOpen){
                backdrop = <Backdrop click={this.backdropClickHandler}/>
            } 

        return(
            <div className="app-container-div" >

                <LoadingPage 
                        loadingPageOn={this.state.loadingPageOn} 
                        loadingPageHandler = {this.loadingPageHandler}/>
                <Sidedrawer 
                        show={this.state.sideDrawerOpen}
                        click={this.backdropClickHandler}/>  
                        {backdrop}
                <Navbar drawerClickHandler = {this.drawerToggleClickHandler}/>
                <Switch>
                    <Route 
                        exact path="/" 
                        render={(routerProps) =>  <Home {...routerProps}/>}/>
                    <Route 
                        path="/trivia"
                        render={(routerProps) =>  <Questions {...routerProps}/>}/>
                    <Route
                        path="/about"
                        render={(routerProps) => 
                            <Resources {...routerProps}/>               
                        }/>
                </Switch>
                <Footer/>
                       
            </div>
        )
    }
}


export default App