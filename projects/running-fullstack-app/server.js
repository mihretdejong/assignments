const express = require ('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000


//middleware
app.use(express.json())
app.use(morgan('dev'))

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/runnerdb", 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log("connected to db"))
    .catch(err => console.log(err))

// routes




// global err
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


// server listen
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})






