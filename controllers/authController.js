const User = require('../models/User');
const bcrypt = require('bcrypt');
const express = require("express");
const router = express.Router();



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
/* 
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
} */


  // signup route
 /*  exports.createUser= async (req, res) => {
    const body = req.body;

    if (!(body.email && body.password)) {
      return res.status(400).send({ error: "Data not formatted properly" });
    }

    // creating a new mongoose doc from user data
    const user = new User(body);
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).send(doc));
  } */

  // login route
  exports.loginUser = async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (user) {
      // check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {
        //USer session
        req.session.userID = user._id;
        
        res.redirect('/');
      } else {
        
        res.status(400).redirect('/login?error=invalid_password') 

      }
    } else {
      res.status(401).redirect('/login?error=user_not_found') 
      
    }
  }

  exports.logoutUser = async (req, res) => {
    try {
      req.session.destroy(()=> {
        res.redirect('/');
      });
    } catch (error) {
      res.status(400).json({
          status: 'error',
          error,
      });      
  }
}