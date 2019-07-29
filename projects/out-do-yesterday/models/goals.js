const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const goalsSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    time:{
        type: Number,
        default: 0

    },
    category: {
        type: "String",
        enum: ["Personal-nutrition","Personal-health","Personal-financial", "Personal-exercise","Personal-selfDev","Professional-work" ]
    },
    completed: {
        type: Boolean,
        default: false
    },
    profile: {
        type: Schema.Types.Object,
        ref: "Profile",
        required: true,
    }
  
})
//profile it blonges too
//Schema.Types.Object a specific data type that defines Object ID
// the ref is the model this goal belongs too which in this case is Profile
//











module.exports = mongoose.model("Goals", goalsSchema)