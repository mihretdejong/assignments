import React from 'react'
import './side-drawer.css'
import { Link, withRouter } from 'react-router-dom'
//we make this a class (instead of a parenthesis we use curly bracket)
//the return in parenthesis allows us to write a multi-line JSX above the return
// with the if statement we are making the className binary, either side-drawer or side-drawer-open
//in css we give side-drawer be the default and side-drawer-open be the open state of the side drawer
//the if statement goes back and forth between one class(side-drawer) and two classes (side-drawer and open)
//in CSS we denote the two classes as: .side-drawer.open 
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
                        <Link to="/questions" >QUESTIONS</Link>
                        <Link to="/score" >RESOURCES</Link>
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