const {Schema, model} = require('mongoose')
const mongoose = require("mongoose");

const User = new Schema({

    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivate: {type: Boolean, default: false},
    activation: {type: String},

})

module.exports = model('User', User)


