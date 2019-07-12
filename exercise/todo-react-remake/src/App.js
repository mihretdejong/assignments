import React, { Component} from 'react'
import axios from 'axios'



class App extends Component{
    constructor(){
        super()
        this.state = {
            todos: [],
            title: "",
            description: "",


        }
    }
    //a class method to load our page
    componentDidMount(){
        axios.get('https://api.vschool.io/mihretdejong/todo')
            .then(res => 
                this.setState({
                    todos: res.data,
                    title: this.todos.title
                }))
                
            .catch(err => console.log(err))

    }


    render(){
        return(
            <div>
                <h2>{this.todos.title}</h2>

            </div>
        )
    }
}



















export default App