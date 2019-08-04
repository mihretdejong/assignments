const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const runSchema = new Schema({

    fitnessActivity: {
        type: String,
        required: true,
    },
    time:{
        type: Number,
        default: 0

    },
    category: {
        type: "String",
        enum: ["Stay Active","","Couch to 5K", "10K","Half-Marathon","Marathon" ]
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.Object,
        ref: "User",
        required: true,
    }
  
})
//profile it blonges too
//Schema.Types.Object a specific data type that defines Object ID
// the ref is the model this goal belongs too which in this case is Profile
//





module.exports = mongoose.model("Run", runSchema)