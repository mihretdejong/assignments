import React from 'react'
// import { Link } from 'react-router-dom'

const Nav = props => {
    const { logout, token } = props 
    return (
        <nav className="nav-bar">
           { token && <div className="logout-button" onClick={logout}> Logout </div> }
         

        </nav>
    )
}


export default Nav