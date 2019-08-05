import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../style/navbar.css'
import DrawerToggleBtn from '../Sidedrawer/DrawerToggleBtn.js'


const Navbar = props => {
    console.log(props.drawerToggleClickHandler)
    return (
        <div className="navbar">
            <nav className="toolbar-navigation">
                <div>
                    <DrawerToggleBtn
                        drawerClickHandler={props.drawerToggleClickHandler}/>
                        
                </div>
                <div className="toolbar-logo"><a href="#"> LOGO </a></div>
                <div className="gap"></div>
                <div className="toolbar-nav-items">
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/galleries">GALLERIES</Link>
                        <Link to="/contact">CONTACT</Link>
                </div> 
               
                    {/* <div className="toolbar-logo"><a href="#"></a></div>
                    
                    }
                {/* </div> */}
            </nav>
        </div>
    )

}

export default withRouter(Navbar)