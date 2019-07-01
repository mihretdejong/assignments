import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Footer = props => {
    console.log(props)
    return (
        <footer> 
           
            <div className="dir-div">
                <Link to="/" >HOME</Link>
                <Link to="/about" >ABOUT</Link>
                <Link to="/services" >SERVICES</Link>

            </div>
            <div className="address">
                <p> 801-500-5999 | 402 E Honey Milk Blvd, Salt Lake City, UT 84111 | M-F 10am-8pm, Sat & Sun 10am-6pm</p>
                <button> BOOK NOW </button>                
            </div>

        </footer>
    )
}







export default withRouter(Footer) 