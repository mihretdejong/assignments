const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true 
    },
    password:{
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

})
// 1 hook, 2 mehtods
// pre is the hook method// the function work is key becuase it tells us this which is the user object
//password encryption on / signup
//salt round is one of the  

userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })

} )

// 2 methods // to see if the user's password is the same as the one created
// checks encrypted password on login  and 
userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err){
            return callback(err)
        }
        callback(null, isMatch)
    })

}

// to prevent sending the password to the user
// removes password from user obj before sending it to the front end
userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model("User", userSchema)
//TypeError: Router.use() requires middleware function but got a Object 
// if you forget to export 

// 