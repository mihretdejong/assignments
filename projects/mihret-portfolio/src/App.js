import React, { Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Sidedrawer from './components/Sidedrawer.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'


import './style.css'


class App extends Component{
    constructor(){
        super()
        this.state = ({
            sideDrawerOpen: false

        })
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }
    closeHandler =() => {
        this.setState({sideDrawerOpen: false})
    }

    render(){
        return(
            <div className="all-warper">
                <Navbar 
                    drawerToggleClickHandler={this.drawerToggleClickHandler}/>
                <Sidedrawer
                    show={this.state.sideDrawerOpen}
                    click={this.closeHandler}/>
                <Switch>
                    <Route exact path="/" render={rProps => <Home {...rProps}/>}/>
                    <Route  path="/about" render={rProps => <About {...rProps}/>}/>
                    <Route  path="/projects" render={rProps => <Projects {...rProps}/>}/>
                    <Route  path="/contact" render={rProps => <Contact {...rProps}/>}/>

                </Switch>

            </div>
        )
    }
}









export default App 