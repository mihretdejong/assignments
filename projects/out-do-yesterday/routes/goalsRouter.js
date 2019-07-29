const express = require('express')
const goalsRouter = express.Router()
const Goals = require ('../models/goals.js')


//Find all goals under the same profile 
goalsRouter.get('/profile/:profileId', (req, res, next) =>{
    Goals.find({profile: req.params.profileId}, (err, goals) => {
        if(err){
           res.status(500)
           return next(err)
        }
        return res.status(200).send(goals)

    })
})

goalsRouter.get("/", (req, res, next) =>{
    Goals.find((err, goals) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(goals)
    })
})
//we pass data as req.body req.params or req.query, in this case we will use req.params
goalsRouter.post("/:profileId", (req, res, next) => {
    // we're adding the profile id to the req.body object the user is sending us so that it may be saved
    //profile Id is required per our goals shema 
    req.body.profile = req.params.profileId
    const newGoals = new Goals(req.body)
    newGoals.save((err, savedGoal) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedGoal)
    })
})





module.exports = goalsRouter