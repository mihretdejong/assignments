import React, { Component } from 'react'
import Home from './Home.js'
import About from './About.js'
import Services from './Services.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Contact from './Contact.js'
import Boutique from './Boutique.js'
import { Switch, Route } from 'react-router-dom'
import './style.css'
import Eachservice from './Eachservice.js';

// import Navbar from './Navbar.js'


class App extends Component {
    constructor(){
        super()
        this.state = {
            service: [
                {type: 'primer', name:'brighten', color: "blue",  _id:"rel456987"},
                {type: 'risenglow', name:'glow', color: "gold", _id:"glo456987"},
                {type: 'toner', name:'illuminate', color: "rose", _id:"rel456987"}


            ]
        }
    }
    render(){
        return(
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/"        component={Home}/>
                    <Route  path="/about"   component={About}/>
                    <Route  
                        path="/services" 
                        render={(routerProps) => <Services {...routerProps} 
                        service={this.state.service} />}/>
                    <Route 
                        path="/service/:_id"
                        //the route is used in the Link to prop
                        render={(routerProps) => <Eachservice {...routerProps} service={this.state.service}/>}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/boutique" component={Boutique}/>
                </Switch>
                <Footer/>
            
            </div>
        ) 
    }  
}








export default App 