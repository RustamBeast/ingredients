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
router.delete('/deleteIngredient', verifyTokenAndAdmin, async(req,res)=>{
    const {ingName} = req.body
    const ingToRemove = await Ingredient.findOneAndDelete({ name_en: ingName})
    console.log(ingToRemove)
 
    return(ingToRemove ? res.status(200).json({message: "Item deleted"}):
  
  res.status(400).json({message: "No such ingredient found"}))  
})
// router.post('/removeIngredient',verifyTokenAndAdmin, async(req, res)=>{
//     const {} = body.req
// })
// router.get('/removeIngredient',verifyTokenAndAdmin, async(req, res)=>{
    
// })





module.exports = router;
