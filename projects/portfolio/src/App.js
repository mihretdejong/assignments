import React, { Component} from 'react'
import Home from './Home.js'
import About from './About.js'
import Projects from './Projects.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import BurgerMenu from './BurgerMenu.js'
import { Switch, Route } from 'react-router-dom'
import './style.css'
//swtich will hve to be imported with route that specifies where the 
// home path is usually just a /
//the url- we make it up but that will register as the url for the page
//we're passing components as a prop

class App extends Component{
    constructor(){
        super()
        this.state = {
            
            menuOpen: true



        }
    }
// if we don't pass specify the exact path, it will always load the home page when it reads the "/"
// we need Link component which is the a tag in React router
    menuHandler = () =>{
        this.setState((prevState =>{    
                return {menuOpen: !prevState.menuOpen}
            })
        
        )}
    render(){
        return(
            <div className="container-div">
                <BurgerMenu 

                    menuHandler = {this.menuHandler}
                    menuOpen= {this.state.menuOpen}/>
                <Navbar/>
                <Switch>
                    <Route 
                       exact path="/"
                        component={Home}/>
                    <Route
                        path="/about"
                        component={About}/>
                    <Route
                        path="/projects"
                        component={Projects}/>

                    <Home/>
                    <About/>
                    <Projects/>
                </Switch>
                <Footer/>

            </div>
        )
    }
}





//only one default export per page

export default App





