const express = require('express')
const userRouter = express.Router()
const User = require ('../models/user.js')

userRouter.get("/", (req, res, next) => {
    User.find((err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(user)

    } )
})
userRouter.get("/:_id", (req, res, next) => {
    User.findOne({_id: req.params._id}, (err, foundUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundUser)
    })
})
userRouter.post("/", (req, res, next) => {
    const newUser = new User (req.body)
    newUser.save((err, savedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedUser)
    })
})

userRouter.delete("/:_id", (req, res, next) => {
    User.findOneAndRemove({_id: req.params._id}, (err, deletedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(
            {
                post: deletedUser,
                msg: `Successfully deleted ${deletedUser.username}`
            }
        )
    })
})
userRouter.put("/:_id", (req, res, next) => {
    User.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updatedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedUser)
        }
    )
})




module.exports = userRouter