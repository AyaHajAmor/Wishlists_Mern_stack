const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let userModel= new Schema(
    {
        picture: {
            type: String,
            default: null
        },
        phone: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            maxlength: 128,
        },
        email: {
            type: String,
            unique: true,
            match: /^\S+@\S+\.\S+$/,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
    },
    {
        collection: 'users',
    }
);

userModel.plugin(uniqueValidator, { message: 'Email est deja utilisé!' });
module.exports = mongoose.model('User', userModel);