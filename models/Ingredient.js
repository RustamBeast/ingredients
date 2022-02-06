const {Schema,model} = require('mongoose')
 const ingredient = new Schema({
    name_en:  {type:String, required: true, unique: true},
    name_ru: {type:String, required: true, unique: true},
    kcal: {type:String, required: true},
    type: {type:String, required: true},
  
  });

  module.exports = model('Ingredient', ingredient)
