const express = require('express')
const babyRouter = express.Router()
const Baby = require('../models/baby.js')

//get all babies with the user id as given in the filter
babyRouter.get("/", (req, res, next) => {
    // we have the user_id because of jwt that created the auth in the server
    // console.log(req.user._id)
    Baby.find({user: req.user._id}, (err, babys) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(babys)
    })
})
babyRouter.get("/:babyId", (req, res, next) => {
    Baby.findOne({_id: req.params.babyId}, (err, baby) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(baby)
    })
})


// Add new baby entry
babyRouter.post("/", (req, res, next) => {
    // add user's id to the new baby object before saving in the db
    //the user's id is in the token
    req.body.user = req.user._id
    // we need to add teh user's id to the baby 
    // we get the user's id info from the token which we have access to
    const newBabyEntry = new Baby(req.body)
    newBabyEntry.save((err, savedBabyEntry) => {
        if(err){
           res.status(500)
           return next(err) 
        }
        return res.status(201).send(savedBabyEntry)
    })
})



babyRouter.delete('/:babyId', (req, res, next) => {
    Baby.findOneAndRemove(
        {_id: req.params.babyId, user: req.user._id},
        (err, deletedBabyEntry) => {
            if(err){
                res.stauts(500)
                return next (err)
            }
            return res.status(200).send(
                {
                    baby: deletedBabyEntry,
                    msg: `Successfully deleted the baby entry`
                }
            )
        }
    )
})
// edit baby entry 
// end points should be diffrent otherwise it will read the first one and never get to the second one
babyRouter.put("/editbabyentry/:_id", (req, res, next) => {
    // console.log("idone")
    Baby.findOneAndUpdate(
        {_id: req.params._id}, 
        req.body,
        {new: true},
        (err, updatedBabyEntry) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedBabyEntry)
    })
})

// add a baby post request 
babyRouter.put("/:_id", (req, res, next) => {
    // console.log("idtwo")
    Baby.findOne({_id: req.params._id}, (err, foundBabyEntry) => {
        if(err){
            res.status(500)
            return next(err)
        }
        // newBabyPostEntry = [...foundBabyEntry.posts, req.body]
        // instead of reseting the posts array, we are pushing in the new
        //post object(req.body.post) we are updating it with (the img and image caption)
        Baby.findOneAndUpdate(
            {_id: req.params._id},
            {$push: {posts: req.body.post}},
            {new: true},
            (err, updatedBabyPost) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedBabyPost)
            }
        ) 
    })
})

babyRouter.put("/:_id/:_babyPostId", (req, res, next) => {
    // const babyPostId = req.params._babyPostId
    Baby.findOneAndUpdate(
        {_id: req.params._id}, 
        {$pull: {posts: {_id: req.params._babyPostId}}},
        // {$pull: {posts: {_id: babyPostId}}},
        {new: true},
        (err, foundBabyEntry) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(foundBabyEntry)
    })
})
babyRouter.put("/growthchart/:_id", (req, res, next) => {
    Baby.findOne({_id: res.params._id}, (err, foundBabyEntry) => {
        if(err){
            res.status(500)
            return next(err)
        }
        Baby.findOneAndUpdate(
            {_id: req.params._id},
            {$push: {babyGrowthChart: req.body.babyGrowthChart}},
            {new: true},
            (err, updatedBabyGrowthChart) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedBabyGrowthChart)
            }
        )
    })
})
module.exports = babyRouter