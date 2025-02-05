const port ="4000";
const express= require("express");
const app = express();
const jwt=require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const mongoose =require("mongoose")
const path=require("path");
const dotenv = require('dotenv');
const { SignUp, Login, EditUser } = require("./Controllers/UsersController");
const { AddReservation, DeleteReservation, GetAll } = require("./Controllers/ReservationController");

app.use(express.json());
app.use(cors());
dotenv.config();

mongoose.connect(process.env.DBKEY).then(()=>console.log("MongoDB is running")).catch((error)=>console.log("MongoDB is not running",error));

app.get('/',(req,res)=>(
    res.send("Express app is running")
));

app.post("/addReserve", AddReservation);
app.delete("/removeReserve/:id",DeleteReservation);
app.get("/getall",GetAll);

app.post("/signup",SignUp);
app.patch("/editUser/:id",EditUser);
app.post("/login",Login);

app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running on port:" + port);
    }else{
        console.log("Server is not running " + error);
        
    }
})