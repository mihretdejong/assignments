const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

// this file is route for auth purposes
//login and signup 
    //authenticate the user
    //by creating and sending a token 
    //we use the jwt package to create a token 
    // npm i jsonwebtoken and we save it in jwt by convention
    // the token has three strings separated by periods
    //1st, header, 2nd payload has the user info, 3rd is the signature that authenticates
    //the server creates the token 
    // 

/// to be able to post, the user needs to keep the token and send it to the server with their post request
//to enable saving the token in the local storage, we need another npm package
// npm install express-jwt // is our gatekeeper 
//express-jwt expects a token and if there is one it decrypts into a user object
// we will have a path in our server.js which has an endpoint where all authorised request is made through 
// by convention this end point is /api 
// express-jwt is just like express.json which expects an object  and turns it into (req.body)
authRouter.post("/signup", (req, res, next) => {
    // check the database to see if the requsted username already exists
    // 1 check if the user exists
    //2. create the user
    //3 create a token
    // send back the user obj and the token 
    User.findOne({username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        // if it does, send back an error
        if(user){
            res.status(400)
            return next(new Error("That username is already taken."))
        }  
        // if it doesn't, create the user and the token, send them both bak
        // we are using the model to create the new user
        const newUser = new User(req.body)
        // the bottom line saves it in the db
        // the .save method starts the .pre mehtod in the user.js model
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            // at this point, the user was saved successfully
                // send back a token and the user object for our front-end
                // sign is the method that creates the token
                //savedUser is in json(bson) to be converted into js object
                //we give it the sign method, the payload and the secret that is the signature for creating 
                const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
                return res.status(201).send({token, user: savedUser.withoutPassword(), token})
                // what is sent here is what is recieved as res.data in the front 
        })
    })
    

})

authRouter.post("/login", (req, res, next) => {
    // 1- check to see if the user exists
    // 2-check to see if their password matches
    // 3- create token
    // 4- send user obj and token 

    User.findOne({username: req.body.username.toLowerCase()}, (err, user) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        //Does a user by that username exist
        //  || user.password !== req.body.password//goes in the if condition

        if(!user ){
            res.status(403)
            return next(new Error("The username or password are incorrect!"))
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(401)
                return next (err)
            }
            if(!isMatch){
                res.status(401)
                return next(new Error ("Username or Passowrd are incorrect!"))
            }
            //if they are at this point, they are authenticated
            //if so create a new token and a successful response
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            // const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(200).send({token, user: user.withoutPassword()})
        })
    })
})


module.exports = authRouter