import React from 'react'
import './sidedrawer.css'
import { Link, withRouter } from 'react-router-dom'



const Sidedrawer = props => {
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'
    }
    return(
        <div>
            <nav className={drawerClasses}>
                <div>
                    <div onClick={props.click} className="sidedrawer-close-btn"> X </div>
                    <Link to="/"> HOME </Link>
                    <Link to="/about"> ABOUT </Link>
                    <Link to="/projects"> PROJECTS </Link>
                </div>
            </nav>

        </div>
    )
}












export default Sidedrawer