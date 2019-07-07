import React, {Component} from 'react'
import DiceBox from './DiceBox'
import './style.css'


class App extends Component {
    constructor(){
        super()
        this.state = {
            numArr: [
                {num:0, isSelected:false},
                {num:0, isSelected:false},
                {num:0, isSelected:false},
                {num:0, isSelected:false},
                {num:0, isSelected:false},
            ],
            
            
          
        }
    }
    //how do you save the rolled nums
    rollingDice = () => {
        this.setState(prevState => {
            return {
                numArr: prevState.numArr.map((number, i)=>{
                    return {
                            num: Math.floor(Math.random() * 6 +1),
                            isSelected: prevState.numArr[i].isSelected , 
                            
                    }
                }) 

            }
        
        })
    }
   
    


    render (){
        return (
            <div className="container">
                {/* <h1> Hello Pocker Face! </h1> */}
                <DiceBox numbers={this.state.numArr}/>
                {/* <DiceBox num={this.state.num2}/>
                <DiceBox num={this.state.num3}/>
                <DiceBox num={this.state.num4}/>
                <DiceBox num={this.state.num5}/> */}
                

                <button  className="box-btn" onClick={this.rollingDice}> Roll...</button>
            </div>
        )
    }
}




export default App