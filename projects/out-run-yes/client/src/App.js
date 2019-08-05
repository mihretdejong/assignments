import React, { Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './components/Auth'
import BabyForm from './components/Baby/BabyForm.js'
import ProtectedRoute from './shared/ProtectedRoute.js'
import Nav from './components/Nav/Nav.js'
import { withUser} from './context/UserProvider'

// the end point is different from our end point in express
// this is SPA, everything in our app gets loaded  with a single request
// we use switch and route to navigate within the same page. 
// we don't make request to the server for each page to load 
// axios does the backend routing 
class App extends Component {
    render(){
        const { token, logout, user} = this.props
        return(
            <div>
                {/* Here we go */}

                <Nav token={token} logout={logout}/>
                <Switch>
                    <Route exact path="/" 
                        render={routerProps => !token ?
                                <Auth {...routerProps}/> :
                                <Redirect to="/baby" />
                                }/>

                    <ProtectedRoute
                        token={token}
                        path="/baby"
                        component={BabyForm}
                        user={user}
                        />
                    
                    {/*
                    this is the alternative to the protectedRoute 
                     <Route path="/baby" render={routerProps => token?
                                <BabyForm {...routerProps} {...this.props}/> :
                                <Redirect to="/"/>
                                }/> */}
                </Switch>
            </div>
        )
    }
}


export default withUser(App)