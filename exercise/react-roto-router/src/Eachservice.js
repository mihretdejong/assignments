import React from 'react'



const Eachservice = props => {
    //an array of object that all have an _id
    //I'm given a singe _id
    const foundItem = props.service.find(oneservice => oneservice._id === props.match.params._id)
    
    return (
        <div className="eachser-dis-div" style={{color: foundItem.color}}>
            <h1> {foundItem.type} </h1>
        </div>
    )

}










export default Eachservice