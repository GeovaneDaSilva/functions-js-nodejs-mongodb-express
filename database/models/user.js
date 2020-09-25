//Web Model
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;




var userSchema = new Schema({
   
    name: {  type: String, required: [false, ' El name es requerido']},
    email: {  type: String, unique: true, required: [false, ' El email es requerido']},
    phone: {  type: String, required: [false, ' El phone es requerido']},
    password: {  type: String, required: [false, ' El password es requerido']},

});

userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });


module.exports = mongoose.model('User', userSchema);