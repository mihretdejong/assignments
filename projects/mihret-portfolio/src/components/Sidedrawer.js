import React from 'react'
import { Link, withRouter } from 'react-router-dom'


const Sidedrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open'
    }
    //we can have two classes as in the if condition(side-drawer or open)
    //the css is the only thing that is controling the sidedrawer 
    console.log(props)
    return(
        <div>
            <nav className={drawerClasses}>
                <div>
                    <div onClick={props.click} className="sidedrawer-close-btn"> X </div>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/projects">PROJECTS</Link>
                    <Link to="/contact">CONTACT</Link>

                </div>
            </nav>
        </div>
    )
    
}





export default withRouter(Sidedrawer)