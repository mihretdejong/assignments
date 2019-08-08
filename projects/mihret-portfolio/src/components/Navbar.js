import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import DrawerToggleBtn from './DrawerToggleBtn.js'


const Navbar = props => {
    return(
        <div className="navbar">
            <nav className="toolbar-navigation">
                <div>
                    <DrawerToggleBtn drawerClickHandler={props.drawerToggleClickHandler}/>                  
                </div>
                <div className="gap"></div>
                <div className="toolbar-nav-items">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/projects">PROJECTS</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
            </nav>
        </div>
    )
}


export default withRouter(Navbar)