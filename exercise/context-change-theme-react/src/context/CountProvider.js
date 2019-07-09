import React, { Component } from 'react'

const CountContext = React.createContext ()
// has two properties : consumer and provider
// in render, we use this object as a tag 
//<CountContext.Provider>, we're telling it, to use the object CountContext 
// and to use the Provider component in it 
// CountContext.Provider (just like any other object)
// in render, we use  {this.props.children} to refer to the component
// in index.js that we are wrapped with CountContext
//  {this.props.children} says that, the wrap it is in will be used to 
console.log(CountContext)


class CountProvider extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
           <CountContext.Provider>
               {this.props.children}

               


           </CountContext.Provider>
        )
    }
}




export default CountProvider