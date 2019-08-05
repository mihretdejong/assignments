import React from 'react'
import './drawer-toggle-btn.css'


const DrawerToggleBtn = props => {
    const { drawerClickHandler } = props
    // console.log(props)
    return (
        <button className="toggle-button" 
                onClick={drawerClickHandler}>
            <div className="toggle-btn-burger"/>
            <div className="toggle-btn-burger"/>
            <div className="toggle-btn-burger"/>
        </button>
    )
}



export default DrawerToggleBtn