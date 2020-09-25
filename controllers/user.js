"use strict";
// modules
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// model
const User = require("../database/models/user")


//=====================================
//           POST USER 
//=====================================


const saveUser = async (req, res) => {

  let {name, email, phone, password} = req.body

  const user = new User(req.body)

 
  try {
   await user.save();
    res.status(200).json({
      ok: true,
      message: 'User saved',
      user
    })
    
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error
    })
    
  }


}











module.exports = {

saveUser

};
