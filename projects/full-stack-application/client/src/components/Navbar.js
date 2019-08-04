import React from 'react'
import { Link, withRouter } from 'react-router-dom'
// import DrawerToggleBtn from '../Sidedrawer/DrawerToggleBtn.js'


const Navbar = (props) => {
    return (
        <div className="navbar">
            <nav className="toolbar-navigation">
               
                    {/* <div className="toolbar-logo"><a href="#"></a></div>
                    <div className="gap"></div>
                    <div className="toolbar-nav-items">
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/galleries">GALLERIES</Link>
                        <Link to="/contact">CONTACT</Link>
                    </div> */}
                {/* </div> */}
            </nav>
        </div>
    )

}

export default withRouter(Navbar)