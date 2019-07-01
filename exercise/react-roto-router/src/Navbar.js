import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = props => {
    console.log(props)
    return (
        <nav>
            <>
                <h1>SPA</h1>
            </>

            <div className="nav-links" >
                <Link to="/" >HOME</Link>
                <Link to="/" >BOUTIQUE</Link>
                <Link to="/about" >ABOUT</Link>
                <Link to="/services" >SERVICES</Link>
                <Link to="/" >LOCATION</Link>
                <Link to="/contact" >CONTACT</Link>
            </div>


        </nav>
    )
}








export default withRouter(Navbar)
