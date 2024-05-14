const {response}=require('express')
const users = require('../Models/userSchema');
const jwt=require('jsonwebtoken');
//logic of register

exports.adminregister=async(req,res)=>{
    //get user details from request body
    const {username,email,password}=req.body;

    try{
        const existingUser=await users.findOne({email});
        if(existingUser){
            res.status(404).json("User already registered")
        }
        else{
            const newUser=new users({username,email,password});
            await newUser.save()
            res.status(200).json(newUser)

        }
    }
    catch(err){
        res.status(404).json(err)

    }
}
exports.userregister=async(req,res)=>{
    //get user details from request body
    const {username,email,password}=req.body;

    try{
        const existingUser=await users.findOne({email});
        if(existingUser){
            res.status(404).json("User already registered")
        }
        else{
            const newUser=new users({username,email,password});
            await newUser.save()
            res.status(200).json(newUser)

        }
    }
    catch(err){
        res.status(404).json(err)

    }
}
exports.adminlogin=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const existingUser=await users.findOne({email,password});
        if(existingUser){
            //token generation
            const token=jwt.sign({userId:existingUser._id},process.env.JWTKEY);
            res.status(200).json({existingUser,token})

        }
        else{
            res.status(402).json("Incorrect email or password")

        }
    }
    catch(err){
        res.status(404).json(err)

    }

}
exports.userlogin=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const existingUser=await users.findOne({email,password});
        if(existingUser){
            //token generation
            const token=jwt.sign({userId:existingUser._id},process.env.JWTKEY);
            res.status(200).json({existingUser,token})

        }
        else{
            res.status(402).json("Incorrect email or password")

        }
    }
    catch(err){
        res.status(404).json(err)

    }

}
exports.getAllUsers=async(req,res)=>{
    //get all product from the mongoDB- find()
    try{
        const AllUsers= await users.find()
        res.status(200).json(AllUsers)
    }
    catch(err){
        res.status(404).json(err)
    }
}