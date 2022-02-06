const express = require('express') 
const router = express.Router()
const User = require('../models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { verifyTokenAndAuth } = require("./VerifyToken")
router.post('/signUp', async(req, res)=>{
    
    const {email, password} = req.body
   const checkIfExists = await User.findOne({email})
   if(checkIfExists){
       return res.status(403).json({message:"This email is already signed up"})
   }
   const hashedPw = await bcrypt.hash(password,10)
   await User.create({

        email,
       password: hashedPw,
       isAdmin: false
    
   })
   
   return res.status(403).json({message:"Signed Up"})
    
})



router.post('/signIn', async(req,res)=>{
    const {email, password} = req.body
    const user = await User.findOne({email})
   const pwMatch = await bcrypt.compare(password, user.password)
    if (!pwMatch){
        return res.status(203).json({message:"Wrong credentials"})
    }
    const token = jwt.sign({user}, process.env.JWT, {
        expiresIn: "3d",
      });
    return res.status(403).json({message:"Loged", token})
    
})
router.post('/checkToken',verifyTokenAndAuth, async(req, res)=>{

    return res.status(200).json({token:true})
})

module.exports = router;
