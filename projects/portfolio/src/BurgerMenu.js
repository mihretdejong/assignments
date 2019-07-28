import React from 'react'
import './style/burgermenu.css'


const BurgerMenu = (props) => {
    
    
    return(
        <div className="backgroundBuger">
            <div onClick={() => props.menuHandler()}>
                <div className={`bar1-${props.menuOpen}`} />
                <div className={`bar2-${props.menuOpen}`}/>
                <div className={`bar3-${props.menuOpen}`}/>
            </div>
        </div>


    )
}

export default BurgerMenu