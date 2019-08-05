import React from 'react'
import { Route, Redirect } from 'react-router-dom'


// ...rest is everything we are passing the component as props
//e.g user from the userProvider 
const ProtectedRoute = props => {
    const { token, path, redirectTo, component: C, ...rest } = props 
   return(
       token? 
       <Route path={path} render={rProps => <C {...rest} {...rProps}/>}  /> :
       <Redirect to={redirectTo} />
   ) 
}








export default ProtectedRoute 