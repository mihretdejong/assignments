import React from 'react'
import { Link } from 'react-router-dom'
import DrawerToggleBtn from './Sidedrawer/DrawerToggleBtn.js'

//url is always lowercase by convention
const Navbar = () => {
    return(
        <div className="navbar-container">
          <div >
            <DrawerToggleBtn/>
          </div>
          
          <div className="navbar">
            <Link to="/">
              <h6>H</h6>
              <h6>O</h6>
              <h6>M</h6>
              <h6>E</h6>
            </Link>
            <Link to="/about">
                <h6>A</h6>
                <h6>B</h6>
                <h6>O</h6>
                <h6>U</h6>
                <h6>T</h6>
            </Link>
            <Link to="/projects">
              <h6>P</h6>
              <h6>R</h6>
              <h6>O</h6>
              <h6>J</h6>
              <h6>E</h6>
              <h6>C</h6>
              <h6>T</h6>
              <h6>S</h6>
            
            </Link>

          </div>
        </div>
    )
}


export default Navbar