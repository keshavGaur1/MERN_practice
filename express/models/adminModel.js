const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName : {type:String , required:true },
    password : {type:String , required:true },
    emailId : {type:String , required:true },
    isActive : {type:Boolean , required:true ,default:false },
    hasRole : {type:String , enum:["admin","user"] , default:'user' },
    createdAt : {type:Date , default:Date.now }
})

const UserModel = new mongoose.model('UserData',userSchema)

module.exports = UserModel