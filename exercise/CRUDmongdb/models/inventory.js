const mongoose = require('mongoose')
const Schema = mongoose.Schema


const inventorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true

    },
    department: {
        type: String,
        //enum makes it so that the post request has to choose which department.
        enum: ["sporting goods", "clothing", "food", "kids"],
        required: true 
    // you don't have to expect
    },
    isAvailable: {
        type: Boolean, 
        default: true

    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"

    },
    brand: {
        type: String,
        default: ""

    },
    color: {
        type: [String],
        default: []

    },
    price: {
        type: Number,
        required: true
    },
    imgUrl: String


})


// Boods.find({author: requestAnimationFrame.params.author}, (err, books) => {

// })







module.exports = mongoose.model("InventoryModel", inventorySchema)