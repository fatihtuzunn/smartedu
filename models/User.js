const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserScheme = new Schema({
    name:{type:String, required:true},
    email:{type:String, unique:true, required:true},
    password:{type:String, required:true },

})

UserScheme.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    })
})
const User = mongoose.model('User', UserScheme); //modele cevirme

module.exports = User;