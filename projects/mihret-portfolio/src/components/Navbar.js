import React, { Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import DrawerToggleBtn from './DrawerToggleBtn.js'
// import { browserHistory } from 'react-router-dom'


class Navbar extends Component{
    constructor(){
        super()
        this.state =({

        })
        
    }
    // navToHome() {
    //     browserHistory.push("/")
    // }
    render(){
        const { drawerToggleClickHandler } = this.props
        return(
            <div className="navbar">
                <nav className="toolbar-navigation">
                    <div>
                        <DrawerToggleBtn drawerClickHandler={drawerToggleClickHandler}/>                  
                    </div>
                    
                    <div className="gap"></div>
                    <div className="toolbar-nav-items">
                        <Link to="/" onClick={this.navToHome} >HOME</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/projects">PROJECTS</Link>
                        <Link to="/contact">CONTACT</Link>
                    </div>
                </nav>
            </div>
        )

    }
} 


export default withRouter(Navbar)