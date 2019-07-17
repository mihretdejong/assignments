import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
    return (
        <div className="navCont">
            <div className="navbar">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/gallery">GALLERY</Link>
                <Link to="/contact">CONTACT</Link>

            </div>
            <div className="logoNav">

            </div>
            
        </div>
    )
}

export default Navbar