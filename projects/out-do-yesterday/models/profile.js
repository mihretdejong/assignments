const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        default: ""
    },
    passWord: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model("Profile", profileSchema)