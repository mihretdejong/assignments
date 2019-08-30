import React from 'react'
import './side-drawer.css'
import { Link, withRouter } from 'react-router-dom'


const Sidedrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open'
    }
   return (  
       <div>
            <nav className={drawerClasses}>
               <div className="side-drawer-links">
                        <Link to="/" >HOME</Link>
                        <Link to="/trivia" >TRIVIA</Link>
                        <Link to="/about" >ABOUT</Link>
                        <div onClick={props.click} className="sidedrawer-close-btn">Close</div>
                </div> 
            </nav>
            <nav>
                <div className="side-drawer-right" ></div>
            </nav>
       </div>
   )
}

export default withRouter(Sidedrawer)