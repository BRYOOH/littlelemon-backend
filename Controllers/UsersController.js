const Users = require("../Models/Users").Users;
const jwt = require("jsonwebtoken");

const SignUp = async(req,res) =>{

    let check = await Users.findOne({email:req.body.email});

    if(check){
        res.status(404).json({success:false, error:"User with the same email address already exists"})
    }

    let id;

    let users = await Users.find({});
    if(users.length>0){
        let last_user= users.slice(-1);
        let last_array = last_user[0];
        id=last_array.id + 1;
    } else{
        id=1;
    }

    const User = new Users({
        id:id,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        image:req.body.image
    });

    await User.save();
    console.log(User);
    
    const data={
        User:{
            id:User._id
        }
    };

    const token = jwt.sign(data,'secret_token');
    res.json({success:true,token});
};

const Login = async(req,res)=>{
    let check= await Users.findOne({email:req.body.email})
    if(check){
        const passcheck = req.body.password === check.password;
        if(passcheck){
            const data={
                check:{
                    id:check._id
                }
            }

            const token=jwt.sign(data,'secret_token')
            res.json({success:true,})
        }else{
            res.status(400).json({success:false,errors:"User password is incorrect"});
        }
    }else{
        res.status(400).json({success:false,errors:"User email is incorrect"});   
    }
};

module.exports={SignUp,Login};