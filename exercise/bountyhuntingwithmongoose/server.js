const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000


app.use(express.json())
app.use(morgan('dev'))


mongoose.connect("mongodb://localhost:27017/bounties", 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log("connected to DB"))
    .catch(err => console.log(err))

app.use("/bounties", require("./routes/bountyRouter.js"))


app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})











app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})