const express = require ('express')
const app = express()
require('dotenv').config()
const mongoose = require ('mongoose')
const morgan = require ('morgan')
const PORT = process.env.PORT || 7000
//we refert to environmental 


app.use(express.json())
app.use(morgan('dev'))


mongoose.connect("mongodb://localhost: 27017/userdb", 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true

    })
    .then(() => console.log('connected to mydb'))
    .catch(err => console.log(err))

// app.use("/user", require('./routes/userRoutes.js'))
app.use("/run", require('./routes/runRouter.js'))
app.use("/auth", require('./routes/authRouter.js'))

app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => console.log(`server is running on port ${PORT} `) )
