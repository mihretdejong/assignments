import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Auth from './components/Auth'

// the end point is different from our end point in express
// this is SPA, everything in our app gets loaded  with a single request
// we use switch and route to navigate within the same page. 
// we don't make request to the server for each page to load 
// axios does the backend routing 
const App = () => {
    return(
        <div>
            Here we go
            <Switch>
                <Route exact path="/" render={routerProps => <Home{...routerProps}/> }/>
            </Switch>
        </div>
    )
}







export default App 