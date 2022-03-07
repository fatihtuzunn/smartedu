const mongoose = require('mongoose')
const slugify = require('slugify');

const Schema = mongoose.Schema;

const CategoryScheme = new Schema({
    name:{type:String, unique:true, required:true},
    slug:{type:String, unique:true /* benzersiz olması id görevi görecek */ }
})

//modeldeki name propsunu slug haline getireceğiz
CategoryScheme.pre('validate', function(next) {
    this.slug=slugify(this.name,{
        lower:true, //küçük harf
        strict:true //gereksiz ifadeler yer almasın
    })
    next(); // sonraki middleware geçsin

})

const Category = mongoose.model('Category', CategoryScheme); //modele cevirme

module.exports = Category;