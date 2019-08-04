const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true 
    },
    password:{
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model("User", userSchema)
//TypeError: Router.use() requires middleware function but got a Object 
// if you forget to export 