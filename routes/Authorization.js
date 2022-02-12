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
   
   return res.status(203).json({message:"Signed Up", status: true});
    
})

router.post('/signIn', async(req,res)=>{
    const {email, password} = req.body
    const user = await User.findOne({email})
   const pwMatch = await bcrypt.compare(password, user.password)
    if (!pwMatch){
        return res.status(403).json({message:"Wrong credentials"})
    }
    const token = jwt.sign({user}, process.env.JWT, {
        expiresIn: "3d",
      });
    return res.status(203).json({message:"Loged", token, userId : user._id})
    
})

router.post('/checkToken',verifyTokenAndAuth, async(req, res)=>{

    return res.status(200).json({token:true})
})

router.delete('/user/:id', verifyTokenAndAuth, async (req,res)=>{ 
    await User.remove({
      _id: req.query.id,
    })

      console.log('User successfully removed from polls collection!');
      res.status(200).json({message: 'User successfully removed from polls collection!'});


    });



module.exports = router;
