const express = require('express') 
const router = express.Router()
const { verifyTokenAndAdmin } = require("./VerifyToken")
const Ingredient = require("../models/Ingredient")

router.post('/addIngredient',verifyTokenAndAdmin, async(req, res)=>{
    const {name_en, name_ru, kcal, type} = req.body
   newIng = await Ingredient.create({
        name_en, 
        name_ru, 
        kcal, 
        type
    })
    return res.status(200).json({newIng})
})

// router.post('/removeIngredient',verifyTokenAndAdmin, async(req, res)=>{
//     const {} = body.req
// })
// router.get('/removeIngredient',verifyTokenAndAdmin, async(req, res)=>{
    
// })





module.exports = router;
