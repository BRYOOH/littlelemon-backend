const mongoose = require("mongoose")

const Reservation = mongoose.model("Reservation",{
    id:{
        type:Number
    },
    gender:{
        type:String,
        default:"Male"
    },
    location:{
        type:String,
        default:"Nairobi"
    },
    people:{
        type:Number,
        default:1
    },
    date:{
        type:Date,
        default:Date.now()+1,
    }
})

module.exports = {Reservation}