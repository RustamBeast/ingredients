const {Schema,model} = require('mongoose')
 const user = new Schema({
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    description: String,
    hidden: Boolean,
  
  });

  module.exports = model('User', user)
