const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next)=>{
    
    const authHeader = req.headers.token
   
    if (!authHeader) return res.status(401).json("You are not authenticated!")
    const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err) return res.status(403).json("Session expiered")
        
        req.user = user
        next()
    })
}
const verifyTokenAndAuth = (req,res,next)=>{
    verifyToken(req,res, ()=>{
        console.log(req.user.user._id,req.query.id)
        if (req.user.user._id !== req.headers.id) return res.status(403).json("You have no rights to do that")
        next()
    })
   
    }
    const verifyTokenAndAdmin = (req,res,next)=>{
        verifyTokenAndAuth(req,res, ()=>{
           
            if(!req.user.user.isAdmin)return res.status(403).json("You have no rights to do that")
            next()
        })
       
        }

        module.exports = {verifyToken, verifyTokenAndAuth,verifyTokenAndAdmin}