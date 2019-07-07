import React from 'react'
import Die from './Die.js'


const DiceBox = props => {
    const mappedDiceArr = props.numbers.map(number =>{
        return <Die num={number}/>
    })
    return (
        <div  style={{}}>
        <h2>
        {mappedDiceArr}

        </h2>
        
        </div>
    )

}





export default DiceBox