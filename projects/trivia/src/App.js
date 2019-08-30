import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home.js'
import Trivia from './Components/Trivia'
import About from './Components/About.js'



const App = props => {
    return(
        <div>
            <Switch>
                <Route 
                    exact path="/"
                    render={(routerProps) => <Home {...routerProps}/>}>Home</Route>
                <Route 
                    path="/trivia"
                    render={(routerProps) => <Trivia {...routerProps}/>}>Trivia</Route>
                <Route 
                    path="/"
                    render={(routerProps) => <About {...routerProps}/>}>About</Route>
            </Switch>
        </div>
    )
}





export default App 