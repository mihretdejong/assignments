import React from 'react'
import './DrawerToggleButton.css'


const drawerToggleButton = props =>{
     
    return    <button className="toggle-button" onClick={props.click}>
                <div className="toggle-button-burger"/>
                <div className="toggle-button-burger"/>
                <div className="toggle-button-burger"/>
             </button>  
}

export default drawerToggleButton