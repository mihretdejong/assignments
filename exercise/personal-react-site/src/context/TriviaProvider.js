import React, {Component, createContext} from 'react'
import axios from 'axios'

const {Consumer, Provider } = createContext()


//
class TriviaProvider extends Component{
    constructor(){
        super()
        this.state = {
            bookByAuthor: [],
            authorName: "",
            
        }
    }

    getBookByAuthor =() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.authorName}`)
        // https://www.googleapis.com/books/v1/volumes?q=search+terms
             .then(res => {
                 console.log(res)
                this.setState({
                    bookByAuthor: res
                       
                })
            })
            .catch(err => console.log(err))   
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })

    }
    handleSubmit = e => {

        e.preventDefault() 
        this.setState({
            isbn: this.state.isbn
        })



    }

    render(){
        return(
           <Provider
                value={{

                    
                }}>
                {this.props.children}
           </Provider>
       )
    }
}

export default TriviaProvider

export const withTrivia = C => props => (
    <Consumer>
        { (value) => < C {...value} {...props}/>}
    </Consumer>
)


