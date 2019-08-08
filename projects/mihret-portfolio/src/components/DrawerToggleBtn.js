import React from 'react'


const DrawerToggleBtn = (props) => {
    return(
        <div className="toggle-button"
                onClick={props.drawerClickHandler}>
            <div className="toggle-btn-burger"/>
            <div className="toggle-btn-burger"/>
            <div className="toggle-btn-burger"/>

        </div>
    )
}










export default DrawerToggleBtn