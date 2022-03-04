const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CourseScheme = new Schema({
    name:{type:String, unique:true, required:true},
    description:{type:String, unique:true, required:true},
    createdAt:{type:Date, default: Date.now }
})

const Course = mongoose.model('Course', CourseScheme); //modele cevirme

module.exports = Course;