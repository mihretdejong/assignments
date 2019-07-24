const express = require ('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')


// Get All

inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, shoe) => {
        if(err){
            res.status(500)
            return next(err)

        }
        return res.status(200).send(shoe)
    })

})

// Get one
// if .find is used, it will return the whole array instead of just the item
// we use .findOne to get a specific item
inventoryRouter.get("/:_id", (req, res, next) =>{
    Inventory.findOne({_id: req.params._id}, (err, foundShoe) => {
        if(err){
            res.status(err)
            return next(err)
        }
        return res.status(200).send(foundShoe)
    })
})
// if you get an error message that says res.status(500) is not a function, check to see if you have the (req, res, next) parameters in their rightful palce(sequence matters)
// Post (insert one inventory)
inventoryRouter.post("/", (req, res, next) =>{
    const newShoe = new Inventory(req.body)
    newShoe.save((err, savedShoe) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedShoe)
    })
})
// DELETE 
//
inventoryRouter.delete("/:_id", (req, res, next) => {
    Inventory.findOneAndRemove({_id: req.params._id},(err, deletedShoe) => {
        if(err){
            res.status(500)
            return next(err)
        }
        // we're just giving it an object here to tell us what we jsut deleted
        //the object is the parameter we gave the findOneAndRemove method
        //obj.name will give us the name property of that object
        return res.status(202).send(
            {
                shoe: deletedShoe,
                msg: `Successfully deleted ${deletedShoe.name}`
            }
        )
    })
})
inventoryRouter.put("/:_id", (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params._id}, 
        req.body,
        {new: true},
        (err, updatedShoe) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        
        return res.status(201).send(updatedShoe)
    })
})







module.exports =  inventoryRouter