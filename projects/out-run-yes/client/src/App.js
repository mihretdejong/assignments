import React, { Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './components/Auth'
import Baby from './components/Baby'
// we don't have to say index.js, we can just say Baby and that will be the component imporetd
import ProtectedRoute from './shared/ProtectedRoute.js'
import Nav from './components/Nav/Nav.js'
import { withUser} from './context/UserProvider'

// the end point is different from our end point in express
// this is SPA, everything in our app gets loaded  with a single request
// we use switch and route to navigate within the same page. 
// we don't make request to the server for each page to load 
// axios does the backend routing 

//the UserProvider is providing the token and user object from state, our state is getting this information from the 
// local storage// you can also directly ask if there is a token or user object in the local storage 
//right in the <redirecting ternary, meaning instead of getting the token from state, we can directly grab it from the local storage
//
class App extends Component {
    render(){
        const { token, logout, user, addBaby} = this.props
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
                        component={Baby}
                        user={user}
                        redirectTo="/"
                        addBaby={addBaby}

                        />
         {/* the protectedroute is always expecting the 
         redirectto path and if you don't provide it, it will throw an err */}
                    
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