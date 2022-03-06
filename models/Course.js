const mongoose = require('mongoose')
const slugify = require('slugify');

const Schema = mongoose.Schema;

const CourseScheme = new Schema({
    name:{type:String, unique:true, required:true},
    description:{type:String, unique:true, required:true},
    createdAt:{type:Date, default: Date.now },
    slug:{type:String, unique:true /* benzersiz olması id görevi görecek */ }
})

//modeldeki name propsunu slug haline getireceğiz
CourseScheme.pre('validate', function(next) {
    this.slug=slugify(this.name,{
        lower:true, //küçük harf
        strict:true //gereksiz ifadeler yer almasın
    })
    next(); // sonraki middleware geçsin

})

const Course = mongoose.model('Course', CourseScheme); //modele cevirme

module.exports = Course;