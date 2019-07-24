const express = require ('express')
const todoRouter = express.Router()
const uuid = require('uuid/v4')
//Router is a constructor function, returns an object , it does what our app was duing 
//do we have to install router?

const todos = [
    {
        "name": "Go for a run",
        "description": "Sunday runs are the best",
        "imageUrl": "http://www.myimage",
        "completed": false,
        "_id": uuid()
    },
    {
        "name": "Laundry",
        "description": "Can someone do this one for me please",
        "imageUrl": "http://www.myimage",
        "completed": false,
        "_id": uuid()
    }
    ,
    {
        "name": "How about coding",
        "description": "Let's code everyday!",
        "imageUrl": "http://www.myimage",
        "completed": false,
        "_id": uuid()
    },
    {
        "name": "Bake something",
        "description": "how about yummy fresh break",
        "imageUrl": "http://www.myimage",
        "completed": false,
        "_id": uuid()
    }
    
]

todoRouter.get("/", (req, res) =>{
    res.send(todos)

})
todoRouter.get("/:_id", (req, res) => {
    // console.log(req.params)
    //req is coming from the client
    //res is the server object
    //:_id is a placeholder and we can change req.params._id
    //req.params(placeholder) will pick on whatever we give it in the endpoint as id
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    console.log(foundTodo)
    res.send(foundTodo)

})
todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    console.log(newTodo)
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(newTodo)

})
todoRouter.delete("/:_id", (req, res) => {
    const tobeDeletedTodo = todos.find(todo => todo._id === req.params._id)
    const updatedDB = todos.filter(todo => todo._id !== req.params._id)
    todos = updatedDB
    res.send(`Successfully deleted ${tobeDeletedTodo.title}!`)
})
todoRouter.put("/:_id", (req, res) => {
    const tobeEditedTodo = todos.find(todo => todo._id === req.params._id)
    // console.log(req.body)
    const updatedObj = req.body
    const updatedTodo = Object.assign(tobeEditedTodo, updatedObj)
    const updatedDB = todos.map(todo => todo._id === req.params._id ? updatedTodo : todo)
    todos = updatedDB
    res.send(updatedTodo)
})


//makes this file accessible to other files
module.exports = todoRouter