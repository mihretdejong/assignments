import React, { Component} from 'react'
import axios from 'axios'
import './style.css'


class App extends Component{
    constructor(){
        super()
        this.state = {

        }
             
    }
    componentDidMount = () => {
        
        axios.get('http://www.colr.org/json/color/random')
        
            .then(res => {
                console.log(res.data.colors[0].hex)
                this.setState({
                    color: res.data.colors[0].hex
                    
                })

            })
            .catch(err => console.log(err))

    }

    render(){
       
        return(
            <div className="main" style={{backgroundColor:`#${this.state.color}`}}>


            </div>
        )
    }
}










export default App