import React from 'react'
import '../style/resources.css'

const Resources = (props) => {
    return(
        <div>
            <div className="resource-page-div">
                <div className="resources-overlay">
                    <h1>ABOUT</h1>
                    <h3> This trivia project is a SPA (Single Page Application) which was built with React (a JavaScript library) and the Browser Router, Switch, Route and Link components. Node.js was used for the backend. 
                        An axios get request to a third party API was made to retrive the trivia data. The project was concieved for the love of knowledge and dedicated
                        to my brothers who are voracious readers and trivia enthusiasts.   </h3>
                        <h3>Mihret DJ</h3>
                    <h2>“A reader lives a thousand lives before he dies... The man who never reads lives only once.” ― George R.R. Martin</h2>
                </div>
            </div>
        </div>
    )
}

export default Resources












