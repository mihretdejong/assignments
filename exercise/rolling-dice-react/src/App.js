import React, {Component} from 'react'
import Die from './Die'
import './style.css'


class App extends Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0

        }
    }
    rollingDice = () => {
        this.setState({
            num1: Math.floor(Math.random() * 6),
            num2: Math.floor(Math.random() * 6),
            num3: Math.floor(Math.random() * 6),
            num4: Math.floor(Math.random() * 6),
            num5: Math.floor(Math.random() * 6),
            num6: Math.floor(Math.random() * 6),

        })

    }
    


    render (){
        return (
            <div className="container">
                <h1> Hello Pocker Face! </h1>
                <Die num={this.state.num1}/>
                <Die num={this.state.num2}/>
                <Die num={this.state.num3}/>
                <Die num={this.state.num4}/>
                <Die num={this.state.num5}/>
                <Die num={this.state.num6}/>

                <button className="box" onClick={this.rollingDice}> Roll...</button>
            </div>
        )
    }
}




export default App