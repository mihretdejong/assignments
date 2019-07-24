const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require ('mongoose')
const PORT = process.env.PORT || 6700


//middlwhere
app.use(express.json())
app.use(morgan("dev"))

//connection to DB
mongoose.connect('mongodb://localhost:27017/store',
    {
        userNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log("Connected to DB"))
    .catch(err => console.err(err))

//routes
app.use("/storeinventoryshoes", require("./routes/inventoryRouter.js"))


// Globar error handler

new Error("this is a message") // the error message
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})






app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
} )