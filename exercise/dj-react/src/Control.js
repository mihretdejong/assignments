import React from 'react'

const Control = props => {
    console.log("hi")
    return (
        <div>
            <button onClick={props.blackAndWhite}>All Four Bling</button>
            <button onClick={props.blackAndWhiteTop}>Top Two Bling</button>
            <button onClick={props.blueBtmLeft}>Bottom Left Bling</button>
            <button onClick={props.blueBtmRight}>Bottom Right Bling</button>
            <button onClick={props.topLeft}>Top Left Bling</button>
            <button onClick={props.topRight}>Top Right Bling</button>
            <button onClick={props.btmLeft}>Bottom Left Bling</button>
            <button onClick={props.btmRight}>Bottom Right Bling</button>

            
        </div>
    )
}












export default Control 