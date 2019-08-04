import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import Galleries from './components/Galleries.js'
import Sidedrawer from './Sidedrawer/Sidedrawer.js'
import Navbar from './components/Navbar.js'
import Contact from './components/Contact.js'
import ContactProvider from './context/ContactProvider.js'

class App extends Component{
    constructor(){
        super()
        this.state = ({
            sideDrawerOpen: false,
            
        })
    }

    drawerToggleClickHandler = () => {
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
                <Sidedrawer 
                    show={this.state.sideDrawerOpen}
                    click={this.closeHandler}/>
                <Navbar
                    drawerToggleClickHandler={this.drawerToggleClickHandler}/>
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
















