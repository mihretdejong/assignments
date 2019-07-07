import React from 'react'

const Die = (props) => {
    return(
        <div className="box">
            <h2>{props.num.isSelected}</h2>
            <h2>{props.num.num}</h2>

        </div>
    )
}










export default Die