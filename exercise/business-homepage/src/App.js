import React from 'react'
import Navbar from './Navbar.js'
import Main from './Main.js'
import Footer from './Footer.js'
import "./style.css"

function App(){
    return(
        
        <div className="allContainer">
            <Navbar/>
            <Main />
            <Footer/>
        </div>
    )
}

export default App

// function App(props){
//     return(
        
//         <h1>Hello World {props.name}, I'm {props.age}</h1>
//         // <div className="allContainer">
//         //     <Navbar/>
//         //     <Main />
//         //     <Footer/>
//         // </div>
//     )
// }

// export default App