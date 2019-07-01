import React from 'react'
import Pet from './Pet'

const Friends = (props) => {

    const mappedPets = props.pets.map((pet, i) => 
                            <Pet 
                            key={i + pet.name}
                            name={pet.name}
                            breed={pet.breed}/> )
    
    return (
        <div className="friends-div">
            <p>Hello pet Lovers!</p>
            <div className="hello-div">
                <p>My name is {props.name} and I'm {props.age} years old. The following are my pets.</p>
                <div className="friend-and-pup"> </div>
                </div>
            {mappedPets}
        </div>
    )
}





export default Friends
