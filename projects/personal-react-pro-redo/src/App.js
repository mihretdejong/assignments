import React, { Component} from 'react'

class App extends Component{
    constructor(){
        super()
    }
    // once we are connected to html, our js has several variables 
        // document, window, localStorage...etc 
        //localStorage is a property of window
            // has two methods to get and save data 
            // localStorage.setItem("id")
            // localStorage.getItem()
    handleSubmit = () => {
        cd 
    }
    render(){
        console.log(document)
        console.log(window)
        localStorage.setItem("id", "235cgdfhwer46353")
        const id = localStorage.getItem("id")
        console.log(id)
        return(
            <div>
                 <h1> You rock baby!</h1>
                 <div onClick={this.handleChange}>Add to local storage</div>
            </div>
        )

    }
}

export default App