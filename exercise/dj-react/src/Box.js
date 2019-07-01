import React from 'react'



const Box = props => {
    
    console.log("hello")
    const boxStyle = {
        backgroundColor: props.color
    }
    return (
        <div className="box" style={boxStyle}>
            

        </div>
    )
}





export default Box 