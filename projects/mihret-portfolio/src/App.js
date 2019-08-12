import React, { Component} from 'react'
import Particles from 'react-particles-js'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Sidedrawer from './components/Sidedrawer.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import './style.css'

const particleOpt = {
    particles: {
        number: {
            value: 20,
            density: {
                enable: true,
                value_area: 600,
                
            }
        },
        // shape: {
        //     type: "circle"
        // }
        // ,
        opacity:{
            value: 0.4,
            random: true,
            anim: {
                enable: true,
                speed: 1
            }
        },
        size: {
            value: 2
        },
        move:{
            enable: true,
            speed: 0.5,
            direction: "top"
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse" 
            },
            onclick: {
                enable: true,
                mode: "push"
                // mode: "bubble"
                // mode: "remove"
            }
        }
        // ,
        // modes: {
        //     repulse: {
        //         distance: 50,
        //         duration: 1
        //     },
        //     bubble: {
        //         distance: 100,
        //         size: 10
        //     }
        // }
    }
}

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
                 <Particles 
                    className="particles-background"
                    params={particleOpt}
                     />
                
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
                <Footer/>

            </div>
        )
    }
}









export default App 