const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 7000
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

// const expressJwt = require('express-jwt')

//to congigure our .env file we install
    // npm install dotenv

// Middlewares for every request 
app.use(express.json())
app.use(morgan('dev'))

// DB connection 
mongoose.connect("mongodb://localhost:27017/runactivities",{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => console.log("connected to the DB"))
.catch(err => console.log(err))



 //gatekeeper. checks for a token on requests to/api, 
 // if there is a token, it will create the req.user object
// if there is not a token, it will through an "unauthorized error"
//once the request past 
app.use("/api", expressJwt({secret: process.env.SECRET})) //creates the req.user object 

// Routes
app.use("/auth", require('./routes/authRouter.js'))
app.use("/api/baby", require('./routes/babyRouter.js'))

//Global error handler 
app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
} )




//
app.listen(PORT, () => console.log( `Server is running on Port ${PORT} `))









