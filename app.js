const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = 
dotenv.config()
const app = express()
app.use(express.json({extended:true}))
app.use('/api/auth', require('./routes/Authorization'))
 app.use('/api/admin', require('./routes/admin'))
 app.use('/api/foodsearch', require('./routes/Foodsearch'))
const start = async () => {
try{
     mongoose.connect(process.env.MONGOURI,
        {useNewUrlParser: true, useUnifiedTopology: true});
    app.listen(process.env.PORT || 4000, ()=>{
        console.log(`Server running on port ${process.env.PORT || 4000}`)
    })
}catch(e){
    console.log(e)
    process.exit(1)
}

}
start()
