const express = require ('express')
const contactRouter = express.Router()
const Contact = require('../models/contacts.js')
// we are requiring the model which we exported from our mode


//Get all
contactRouter.get("/", (req, res, next) => {
    Contact.find((err, contacts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(contacts)
    })

})
//Get one
contactRouter.get("/:_id", (req, res, next) => {
    Contact.findOne({_id: req.params._id}, (err, foundContact) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundContact)
    })
})
// Post 
contactRouter.post("/", (req, res, next) => {
    //instantiating a new object with the ooject posted(in the body)
    const newContact = new Contact(req.body)
    newContact.save((err, savedContact) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedContact)
    })
})

// Delete 
contactRouter.delete("/:_id", (req, res, next) => {
    Contact.findOneAndRemove({_id: req.params._id}, (err, deletedContact) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(
            {
                drink: deletedContact,
                msg: `Successfully deleted ${deletedContact.name}`
            }
        )
    })
})

// Edit
contactRouter.put("/:_id", (req, res, next) => {
    Contact.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updatedContact) => {
            if(err){
                res.status(500)
                return next (err)
            }
            return res.status(201).send(updatedContact)
        }
    
    )
})


module.exports = contactRouter