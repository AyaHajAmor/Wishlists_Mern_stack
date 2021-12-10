const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let wishlistModel= new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        id_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        products:[ {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: false
        }],
        
    },
    {
      timestamps: true
    },
    {
        collection: 'wishlists',
    }
);
wishlistModel.pre(/^find/, function () {
    this.populate('products');
})

module.exports = mongoose.model('Wishlist', wishlistModel);