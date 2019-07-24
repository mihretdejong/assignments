const express = require('express')
//express is exports a function that when called gives us an obj 
const app = express() //app is our server
const morgan = require('morgan')
// servers listen to requests
// send  a response
// we're using the express node modulepkg to build the  server
// const uuid = require ("uuid/v4")
//MERN app (MongoDB Express React Node)

// Mount Path
//req is users request
//res is servers response
//collection: similar objects in a DB
app.use(express.json())
app.use(morgan("dev"))



//in the server, gotta put the route to display it

// we're putting a dynamic endnpoint so that it takes whatever number is assigned
//request params(is empthy by default but changes to the number we give it at the end of the url)
//API is the only thing interacts with the DB(the logic that we write)
//

//
app.use("/todos", require('./routes/todoRouter.js'))







//the computer has thousands of ports
//PORT (our server listens to requests just like event listeners)
//takes two arguments, port and a call back function
//start a server nodemon server.js (nodemon reads and compiles our files )
//we are not directlly connected to the browser, this is the local server, all debugging happens in the terminal 
//you have to manually stop your server before closing a file or it will run in the background
app.listen(7800, ()=>{
    console.log('server is running on port 7800')
})