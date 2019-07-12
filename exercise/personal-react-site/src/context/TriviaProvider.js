import React, {Component, createContext} from 'react'
import axios from 'axios'

const {Consumer, Provider } = createContext()


//
class TriviaProvider extends Component{
    constructor(){
        super()
        this.state = {
            bookByAuthor: [],
            authorFirstName: "",
            
        }
    }

    getBookByAuthor =() => {
        axios.get(`https://reststop.randomhouse.com/resources/authors/${this.state.authorFirstName}-S.jpg`)
             .then(res => {
                 console.log(res)
                // this.setState({
                //     bookByAuthor: res
                       
                // })
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


