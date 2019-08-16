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
    babyBlurb:{
        type: String,
        default: ""

    },
    posts: {
        type: [{
            img: {
                type: String,
                required: true
            },
            title: {
                type: String,
                default: ""
            },
            ageInMonths:{
                type: Number,
                default: 0
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
    input: {
        type: [{
            input: {
                type: String,
                required: true
            },
            imgCaption: {
                type: String, 
                required: true
            },
            thoughts: {
                type: String, 
                required: true
            },
            ageInMonths: {
                type: Number, 
                required: 0
            }
        }],
        default: []
    },
    sleep: {
        type: [{
            timeEntry: {
                type: Number,
                default: 0
            },
            napTime: {
                type: Date,
                default: Date.now
            }
        }]

    },
    fluid: {
        type: [{
            fluidEntry: {
                type: Number,
                default: 0
            },

            fulidTime:{
                type: Date,
                default: Date.now
            }
        }]
    },
    babyGrowthChart: {
        type: [{
            height:{
                type: Number, 
                default: 0
            },
            weight:{
                type: Number,
                default: 0
            },
            headCircumference: {
                type: Number, 
                default: 0
            },
            date: {
                type: String, 
                default: 0
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