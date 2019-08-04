const express = require('express')
const runRouter = express.Router()
const Run = require ('../models/run.js')


//Find all runs under the same profile 
runRouter.get('/user/:userId', (req, res, next) =>{
    Run.find({user: req.params.userId}, (err, run) => {
        if(err){
           res.status(500)
           return next(err)
        }
        return res.status(200).send(run)

    })
})

runRouter.get("/", (req, res, next) =>{
    Run.find((err, run) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(run)
    })
})
//we pass data as req.body req.params or req.query, in this case we will use req.params
runRouter.post("/:userId", (req, res, next) => {
    // we're adding the profile id to the req.body object the user is sending us so that it may be saved
    //profile Id is required per our runs shema 
    req.body.user = req.params.userId
    const newRun = new Run(req.body)
    newRun.save((err, savedRun) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedRun)
    })
})
runRouter.delete('/:runId', (req, res, next) => {
    Run.findOneAndRemove(
        //, user: req.user._id in the filter doesn't work why?
        {_id: req.params.runId},
        (err, deletedrun) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(
                {
                    post: deletedRun,
                    msg: `Successfully deleted ${deleteRun.runname}`
                }
            )

        }
    )
})





module.exports = runRouter