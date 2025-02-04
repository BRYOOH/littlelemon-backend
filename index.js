const port ="4000";
const express= require("express");
const app = express();
const jwt=require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const mongoose =require("mongoose")
const path=require("path");
const { SignUp, Login } = require("./Controllers/UsersController");
const { AddReservation, DeleteReservation, GetAll } = require("./Controllers/ReservationController");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://brianmuchira001:Muriukis@cluster0.c8atalq.mongodb.net/Littlelemon").then(()=>console.log("MongoBD is running")).catch((error)=>console.log("MongoDB is not running"));

app.get('/',(req,res)=>(
    res.send("Express app is running")
));

app.post("/addReserve", AddReservation);
app.delete("/removeReserve",DeleteReservation);
app.get("/getall",GetAll);

app.post("/signup",SignUp);
app.post("/login",Login);

app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running on port:" + port);
    }else{
        console.log("Server is not running " + error);
        
    }
})