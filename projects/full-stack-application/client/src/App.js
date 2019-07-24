import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import ContactProvider from './context/ContactProvider.js'

class App extends Component{
    constructor(){
        super()
        this.state = ({
            
        })
    }




    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" render={ routerProps => <Home {...routerProps}/>}/>
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
















