const express = require('express') 
const router = express.Router()
const { verifyTokenAndAuth } = require("./VerifyToken")
const Ingredient = require("../models/Ingredient")

router.get('/ingList',verifyTokenAndAuth, async(req, res)=>{
    const ingList = await Ingredient.find()
    return res.status(200).json(ingList)
})

// router.post('/removeIngredient',verifyTokenAndAdmin, async(req, res)=>{
//     const {} = body.req
// })
// router.get('/removeIngredient',verifyTokenAndAdmin, async(req, res)=>{
    
// })





module.exports = router;
