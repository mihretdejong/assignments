
import React, { Component } from 'react'
import Box from './Box'
import Control from './Control'
import './style.css'





class App extends Component {
    constructor(){
        super()
        this.state = {
            box1Color: "black",
            box2Color: "black",
            box3Color: "black",
            box4Color: "black"
            
        }
    }

    blackAndWhite = () => {
        let newColor
        if(this.state.box1Color === "black"){
            newColor = "white"
        } else {
            newColor = "black"
        }
        this.setState({
            box1Color: newColor,
            box2Color: newColor,
            box3Color: newColor,
            box4Color: newColor,   
        })
    }
    blackAndWhiteTop = () => {
        let newColor
        if(this.state.box1Color === "black"){
            newColor = "white"
        } else {
            newColor = "black"
        }
        this.setState({
            box1Color: newColor,
            box2Color: newColor,

           
        })   
    }
    blueBtmLeft = () => {
        let newColor
        if(this.state.box3Color === "black"){
            newColor = "blue"
        } else {
            newColor = "black"
        }
        this.setState({
            box3Color: newColor,
           
        })   
    }
    blueBtmRight = () => {
        let newColor
        if(this.state.box4Color === "black"){
            newColor = "blue"
        } else {
            newColor = "black"
        }
        this.setState({
            box4Color: newColor,
           
        })
    }
    topLeft = () => {
        let newColor
        if(this.state.box1Color === "black"){
            newColor = "pink"
        } else {
            newColor = "black"
        }
        this.setState({
            box1Color: newColor,
           
        })    
    }
    topRight = () => {
        let newColor
        if(this.state.box2Color === "black"){
            newColor = "purple"
        } else {
            newColor = "black"
        }
        this.setState({
            box2Color: newColor,
           
        })  
    }
    btmLeft = () => {
        let newColor
        if(this.state.box3Color === "black"){
            newColor = "yellow"
        } else {
            newColor = "black"
        }
        this.setState({
            box3Color: newColor,
           
        })   
    }
    btmRight = () => {
        let newColor
        if(this.state.box4Color === "black"){
            newColor = "red"
        } else {
            newColor = "black"
        }
        this.setState({
            box4Color: newColor,
           
        })    
    }
    render (){
      
        return(
        <div className="app-div">
            <h2> DJ React </h2>
            <Box color={this.state.box1Color} />
            <Box color={this.state.box2Color} />
            <Box color={this.state.box3Color} />
            <Box color={this.state.box4Color}/>

            <Control 
                blackAndWhite={this.blackAndWhite}
                blackAndWhiteTop={this.blackAndWhiteTop}
                blueBtmLeft={this.blueBtmLeft}
                blueBtmRight={this.blueBtmRight}
                topLeft={this.topLeft}
                topRight={this.topRight}
                btmLeft={this.btmLeft}
                btmRight={this.btmRight}
                />
        </div>
        )
    }
}



























// blackAndWhite = () => {
//     this.setState({
//         box1Color: this.state.box1Color === "black" ? "white" : "black"
//     })
// }

// let newColor
// if(this.state.box1color === "black"){
//     newColor
// }

// render(){
//     const boxstyle ={
//         backgroundColor: this.StaticRange.box1Color
//     }
//     return (
//         <div style={{boxstyle}}>
//             <

//         </div>
//     )
// }







export default App









