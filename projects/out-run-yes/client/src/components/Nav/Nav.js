import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    const { logout, token } = props 
    return (
        <nav>
           { token && <button onClick={logout}> Logout </button> }

        </nav>
    )
}









export default Nav