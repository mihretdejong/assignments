import React, { Component } from 'react'
import Home from './Home.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import './style.css'



const CountContext = React.createContext ()
console.log(CountContext)

class App extends Component{
   
    
    render(){
        return (
            <div className="main-body" >
                

                {/* <h1> {this.state.count} </h1>
                <button onClick={this.increment} > increment </button>
                <button> Toggle Theme</button> */}


            </div>
        )
    }
}







export default App