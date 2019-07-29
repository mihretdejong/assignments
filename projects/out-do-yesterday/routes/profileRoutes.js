const express = require('express')
const profileRouter = express.Router()
const Profile = require ('../models/profile.js')

profileRouter.get("/", (req, res, next) => {
    Profile.find((err, profile) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(profile)

    } )
})
profileRouter.get("/:_id", (req, res, next) => {
    Profile.findOne({_id: req.params._id}, (err, foundProfile) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status().send()
    })
})
profileRouter.post("/", (req, res, next) => {
    const newProfile = new Profile (req.body)
    newProfile.save((err, savedProfile) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedProfile)
    })
})









module.exports = profileRouter