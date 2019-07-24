import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton.js'
import './Navbar.css'
// import DrawerToggleButton from './SideDrawer/DrawerToggleButton';



const Navbar = (props) => {
    return (
        <header className="toolbar">
            <div className="toolbar-navigation">
                <div>
                     <DrawerToggleButton className="burger-button" click={props.drawerClickHandler}/> 
                </div>
                <div className="toolbar-logo"><a href="#"> </a></div>
                <div className="gap"/>
                <div className="toolbar-nav-items">
                    <Link to="/" >HOME</Link>
                    <Link to="/trivia" >TRIVIA</Link>
                    <Link to="/resources" >RESOURCES</Link>

                </div> 
                
            </div>

        </header>
    )
}






export default withRouter(Navbar) 