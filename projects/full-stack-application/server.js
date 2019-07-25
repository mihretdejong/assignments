const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
//pull the PORT from process, we refer to environment
const PORT = process.env.PORT || 7000

// Middleware for every request
app.use(express.json())
app.use(morgan('dev'))

// DB connection
mongoose.connect("mongodb://localhost:27017/contactsdb", 
    {
         useNewUrlParser: true,
         useFindAndModify: false,
         useCreateIndex: true

    })
    .then(() => console.log("connected to the DB")) 
    .catch(err => console.log(err))


// Routes : define how to interact with the data(what methods to use, API etc)



//model: defines how our data should look like
app.use("/contacts", require('./routes/contactRouter.js'))

// Globall error handling
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.mesage})
})




// server listenerlisten
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

