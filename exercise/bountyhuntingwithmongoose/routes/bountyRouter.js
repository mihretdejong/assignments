const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/Bounty.js")



bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

// bountyRouter.delete("/:_id", (req, res, next) =>{
//     Bounty.findOneAndRemove({_id: req.params._id}, (err, deletedBounty) =>{
//         if(err){
//             res.status(500)
//             return res.next(err)
//         }
//         return res.status(202).send({
//             bounty: deletedBounty,
//             msg: `Successfully deleted ${deletedBounty.firstname} ${deletedBounty.lastName}`
//         })
//     })
// })
//why is next dimmed?
bountyRouter.delete("/:_id", (req, res, next) =>{
    Bounty.findOneAndRemove({_id: req.params._id}, (err, deletedBounty) =>{
        if(err){
            res.status(500)
            return res.next(err)
        }
        return res.status(202).send({
            bounty: deletedBounty,
            msg: `Successfully deleted ${deletedBounty.firstName} ${deletedBounty.lastName}`

        })
    })
})

// bountyRouter.put("/:_id", (req, res, next) =>{
//     Bounty.findOneAndUpdate(
//         {_id: req.params._id},
//         req.body,
//         {new:true},
//         (err, updatedBounty) =>{
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(201).send(updatedBounty)
//         })
// })
bountyRouter.put("/:_id", (req, res, next) =>{
    Bounty.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updatedBounty) =>{
            if(err){
                res.status(500)
                res.next(err)
            }
            return res.status(201).send(updatedBounty)

        })
})












module.exports = bountyRouter