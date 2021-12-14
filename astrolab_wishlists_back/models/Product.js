const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productModel= new Schema(
    {
        statut: {
            type: String,
            default: null
        },
        photo: {
            type: String,
            default: null
        },
        description: {
            type: String,
            required: true,
        },
        currency: {
            type: String,
            required: true,
            maxlength: 128,
        },
        price: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        id_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        id_wishlist: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Wishlist',
        },
    },
    {
      timestamps: true
    },
    {
        collection: 'products',
    }
);


module.exports = mongoose.model('Product', productModel);