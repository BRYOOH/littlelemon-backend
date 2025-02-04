const mongoose = require("mongoose")

const Users = mongoose.model("Users",{
    id:{
        type:Number
    },
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
    },
    image:{
        type:String,
    },
})

module.exports = {Users}