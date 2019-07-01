import React from 'react'


const SuperHero = (props) => {
    return (
        <div className="hero-div" onClick ={ () => props.handleChange(props.catchPhrase)}> 

            <h1>{props.name}</h1>
            <h1>{props.catchPhrase}</h1>
            <h1>{props.show}</h1>
            <img className="hero-image" src={props.imageName}/>


        </div>
    )
}






export default SuperHero 