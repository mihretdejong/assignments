import React, { Component } from 'react'
import Navbar from './Navbar.js'
import Home from './Home.js'
import Footer from './Footer.js'
import About from './About.js'
import Gallery from './Gallery.js'
import Contact from './Contact.js'
import { Switch, Route} from 'react-router-dom'
import "./style.css"

class App extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(

            <div className="allContainer">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
                <Footer/>
            </div>
        )

    }
   
}

export default App

// function App(props){
//     return(
        
//         <h1>Hello World {props.name}, I'm {props.age}</h1>
//         // <div className="allContainer">
//         //     <Navbar/>
//         //     <Main />
//         //     <Footer/>
//         // </div>
//     )
// }

// export default App