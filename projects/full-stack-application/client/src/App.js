import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import Galleries from './components/Galleries.js'
import Sidedrawer from './Sidedrawer/Sidedrawer.js'
import Navbar from './components/Navbar.js'
import Contact from './components/Contact.js'
import ContactProvider from './context/ContactProvider.js'
import './style/style.css'

class App extends Component{
    constructor(){
        super()
        this.state = ({
            sideDrawerOpen: false,
            
        })
    }

    drawerToggleClickHandler = () => {
        console.log("hi")
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }

    closeHandler = () => {
        this.setState({sideDrawerOpen: false})
    }
    

    render(){
        

        return(
            <div>
                <Navbar
                    drawerToggleClickHandler={this.drawerToggleClickHandler}/>
                    
                <Sidedrawer 
                    show={this.state.sideDrawerOpen}
                    click={this.closeHandler}/>
                <Switch>
                    <Route exact path="/" render={ routerProps => <Home {...routerProps}/>}/>
                    <Route path="/about" render={ routerProps => <About {...routerProps}/>}/>
                    <Route path="/galleries" render={ routerProps => <Galleries {...routerProps}/>}/>
                    <Route path="/contact" render={routerProps => 
                            <ContactProvider>
                                <Contact{...routerProps}/>
                            </ContactProvider>
                    }/>
                </Switch>

            </div>
        )
    }
}

export default App 
















