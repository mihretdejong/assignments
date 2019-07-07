import React from 'react'
import { Link, withRouter } from 'react-router-dom'



const Navbar = () => {
    return (
        <div className="nav-links">
            <Link to="/" >HOME</Link>
            <Link to="/questions" >QUESTIONS</Link>
            <Link to="/score" >SCORE</Link>
            



            
        </div>
    )
}






export default withRouter(Navbar) 