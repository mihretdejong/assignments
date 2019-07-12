import React from 'react'
import { withTrivia } from '../context/TriviaProvider'



const Resources = (props) => {
    return(
        <div>
            <div className="resource-page-div">
                <form onSubmit={props.handleSubmit}>
                    <input onChange={props.handleChange} type="text" name="isbn" className="search-input" placeholder="ISBN search here..."/>
                </form>
                <h3> More Trivia Resources Coming Soon!</h3>
            </div>
        </div>
    )
}

export default withTrivia(Resources)












