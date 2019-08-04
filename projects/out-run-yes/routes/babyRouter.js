const express = require('express')
const babyRouter = express.Router()
const Baby = require('../models/baby.js')

//get all babies with the user id as given in the filter
babyRouter.get("/", (req, res, next) => {
    Baby.find({user: req.user._id}, (err, babys) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(babys)
    })
})

// Add new baby
babyRouter.post("/", (req, res, next) => {
    // add user's id to the new baby object before saving in the db
    req.body.user = req.user._id
    // we need to add teh user's id to the baby 
    // we get the user's id info from the token which we have access to

    const newBaby = new Baby(req.body)
    newBaby.save((err, savedBaby) => {
        if(err){
           res.status(500)
           return next(err) 
        }
        return res.status(201).send(savedBaby)
    })
})










module.exports = babyRouter