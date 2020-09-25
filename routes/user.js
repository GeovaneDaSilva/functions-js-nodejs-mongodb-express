'use strict'

const express = require('express');
const userController = require('../controllers/user')
const service = require('../services/email')



// Init Var
let router = express.Router();
 
let  auth = require('../middlewares/auth') // auth


router.post('/user', userController.saveUser); // POST USER







module.exports = router;