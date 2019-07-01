import React, { Component }from 'react'



class App extends Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            imageUrl: "",
            names: []

        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            

            //this bracket allows us to update both names
            //to make the update dynamic, we can update it by name and not just by value
            //we call the variable event.target.name but react doesn't like the syntax 
            //wrap it in a backet and it will read it just fine
            //the target of the event is the input
        })
    }
    handleSubmit = (event) => {
        console.log(this.state.lastName)
        console.log(this.state["lastName"])
        //the ones up top are the same, bracket used to appease react
        event.preventDefault()
        const newName = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            img: this.state.imageUrl}
        this.setState(prevState =>({
            firstName: "",
            lastName: "",
            names: [...prevState.names, newName]

        }))
    }
    



    render(){
        console.log(this.state.names)
        const mappedNames = this.state.names.map(person => <li> Name: {person.firstName} {person.lastName} Age: {person.age} Image: <img src={person.img}/></li>)
        return(
            
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={this.state.firstName}
                        placeholder="First Name"
                        onChange={this.handleChange} />
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        placeholder="Last Name"
                        onChange={this.handleChange}/>
                    <input
                        type="number"
                        name="age"
                        value={this.state.age}
                        placeholder=" age"
                        onChange={this.handleChange}/>
                    <input
                        type="imagUrl"
                        name="imageUrl"
                        value={this.state.imageUrl}
                        placeholder="Image"
                        onChange={this.handleChange}/>
                    



                        <button>Submit</button>
                    
                </form>
                <div>
                    <ol>{mappedNames}</ol>
                    
                </div>
                
                
               
            </div>
        )
    }
}










export default App