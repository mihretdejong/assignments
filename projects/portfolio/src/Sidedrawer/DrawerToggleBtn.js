import React from 'react'
import './drawertogglebtn.css'



const DrawerToggleBtn = props => {
    const { drawerClickHandler } = props

    return(
        <div className="toggle-button"
                onClick={drawerClickHandler}>
            <div className="toggle-btn-burger"/>
            <div className="toggle-btn-burger"/>
            <div className="toggle-btn-burger"/>
        </div>
    )
}





export default DrawerToggleBtn