const User = require('../models/User');
const bcrypt = require('bcrypt');
const session = require('express-session');



exports.createUser = async (req, res) => {
    
    try {
    const user = await User.create(req.body);

    
        res.status(201).json({
            status: 'success',
            user,
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            error,
        });      
    }
        
};

exports.loginUser =  async (req, res) => {
    try {
        const {email, password} = req.body;
         await User.findOne({email: email}, (err,user) => {
            if (user) {
                bcrypt.compare(password, user.password, (err,same)=>{
                    if (same) {
                        //USer session
                        req.session.userID = user._id;
                        
                        res.redirect('/');
                    }
                })
            }
        })

        
    } catch (error) {
        res.status(400).json({
            status: 'error',
            error,
        });      
    }
}


