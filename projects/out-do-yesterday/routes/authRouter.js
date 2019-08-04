const express = require ('express')
const authRouter = express.Router()

const User = require ('../models/user.js')
const jwt= require ('jsonwebtoken')

//Singup, Login
    // Authenticate the user
    // Create and send a token 
    // we use a post request, because we will be sending the the username, signup info
    // we will install 
        // npm i jsonwebtoken (used for creating a token)
        // saved in jwt variable by convention
        // what is the token: 
            //has three strings seperated by periods
                //1st is the header
                // 2nd is the payload which has the user info(user obj)
                // 3rd is the signature it has the authonticaiton string
                // the token is only for authentication not for securing the data
                // go to jwt.io
                // to know that the server 
                // we create an envi file, and we will also include it gitignore
            // npm install dotenv
            // the package allows us to configure the .env file 
            // in the server we require dotenv file and that will configure the .env file 

authRouter.post('/signup', (res, req, next) => {
    // chekc the database to see if the requested username already exists
   
    User.findOne({username: req.body.username.toLowercase()}, (err, user) => {
        // //if it does, send back an error 
        
        if(err){
            res.status(500)
            return next(err)
        }
        // if mongodb doesn't find a user it sends a falsie value or null, 
        // that way we can do an if statment and handle the null and let the user know that the username is taken 
        //does the user already exisit/username is taken
        //if profile exist same as if(user)

        if (user ){
            // we can also say if(user !== null)
            // 400 is authentication error
            res.status(400)
            return next(new Error("That username already taken!"))
        }
        // if username is not taken, create the user and the token, send them both back
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            //if there were no error, the user was saved successfully so we will create a token for the user
            //and send it to the user
            // create the token, send token and user object to the front-end
            // sign takes two arguments, we tell it to turn savedUser from bson to an object with the toObject mehtod
            //the SECRET in the env file should be a random words so that it's hard for the computer to decode
            // to create a token, we install
            //npm i jsonwebtoken 
            //save it in jwt variable 
            // a token is just verification, not for encryption
            // it is simply a signature of the server that allows to ma
            //it is a secure way of authentication but not passing data
            // npm install dotenv to configure the .env file 
                // at this point, the user was saved successfully
                    // send back a token and the user object for our front-end
                    // the savedUser comes back in json file so we have to change it back into object
                    // in our .env file we save our SECRET="a few random words which is hard to decode for compouters"
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            return res.status(201).send({token, user:savedUser})
                    
            })

        })
    })
// })