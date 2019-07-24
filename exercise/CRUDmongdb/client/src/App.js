import React, { Component } from 'react'
import axios from 'axios'
import Shoes from './Shoes.js'
import './style/style.css'
import ShoeForm from './component/ShoeForm.js'
// .catch needed 
//fasdfadsf
// dfasdf
//fadsfadsf

class App extends Component{
    constructor(){
        super()
        this.state = {
            shoes: [],
            name: "",
            brand: "",
            price: "",
            imgUrl: "",

        }
    }
   
// the proxy error happens if the client server is running before the backend server is running
//nodemone is listening to updates in the front end and that gives us a proxy error 
// to stop the proxy errors, go ahead and start the backend server with node and not nodemon (that is a bandaid fix)
//once they deploy that won't be a problem because both backend and front end servers will be running at the same time
//IGNOR it for now 
    componentDidMount(){
        console.log("hello")
        axios.get("/storeinventoryshoes")
        .then(res =>{
                console.log(res.data)
                this.setState({
                    shoes: res.data
                })
            })
            .catch(err => console.log(err))
    }
    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({
            [name] : value
        })
    }
    handleDelete = (_id) => {
        console.log(_id)
        axios.delete(`/storeinventoryshoes/${_id}`)
            .then(res => {
                this.setState(prevState => ({
                    shoes: prevState.shoes.filter(shoe => shoe._id !== _id)
                }))
            })
            .catch(err => console.log(err))


    }
    handleSubmit = ( e ) => {
        e.preventDefault()
        const newShoe = {
            name: this.state.name, 
            price: this.state.price,
            brand: this.state.brand,
            imgUrl: this.state.imgUrl,

        }
        
        axios.post("/storeinventoryshoes", newShoe)
            .then(res => {
                const newShoeFromDB = res.data
                this.setState(prevState => ({
                    shoes: [...prevState.shoes, newShoeFromDB],
                    name: "",
                    price: "",
                    imgUrl: "",
                    brand: "",
                }))


            })
            .catch(err => console.log(err))

    }


    render(){
        console.log(this.handleDelete)
        return(
            <div>
                <ShoeForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}/>
                <Shoes

                    shoes={this.state.shoes}/>

            </div>
        )
    }





} 








export default App