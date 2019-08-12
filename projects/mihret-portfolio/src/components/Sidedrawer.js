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
                    <div className="sidedrawer-close-btn" onClick={props.click}> 
                        <Link to="/">HOME</Link> 
                    </div>
                    <div className="sidedrawer-close-btn" onClick={props.click}> 
                         <Link to="/about">ABOUT</Link>
                    </div>
                    <div className="sidedrawer-close-btn" onClick={props.click}> 
                        <Link to="/projects">PROJECTS</Link>
                    </div>
                    <div className="sidedrawer-close-btn" onClick={props.click}> 
                         <Link to="/contact">CONTACT</Link>
                       
                    </div>
                    
                   

                </div>
            </nav>
        </div>
    )
    
}





export default withRouter(Sidedrawer)