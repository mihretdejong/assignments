const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const babySchema = new Schema({
    babyname: {
        type: String,
        required: true
    },
    babyImg: {
        type: String,
        default: ""
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Baby", babySchema)