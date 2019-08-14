const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const babySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    babyProImg:{
        type: String,
        required: true
    },
    posts: {
        type: [{
            img: {
                type: String,
                required: true
            },
            imgCaption: {
                type: String, 
                required: true
            },
            time: {
                type: Date,
                default: Date.now
            }
        }],
        default: []
    },
    // inputAndOutput: {
    //     type: [{
    //         input: {
    //             type: String,
    //             required: true
    //         },
    //         imgCaption: {
    //             type: String, 
    //             required: true
    //         }
    //     }],
    //     default: []
    // },
    babyGrowthChart: {
        type: [{
            height:{
                type: String, 
                default: ""
            },
            weight:{
                type: String,
                default: ""
            },
            headCircumference: {
                type: String, 
                default: ""
            },
            date: {
                type: String, 
                default: ""
            },
            time: {
                type:Date,
                default: Date.now
            }
        }],
        default: []
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

})

module.exports = mongoose.model("Baby", babySchema)