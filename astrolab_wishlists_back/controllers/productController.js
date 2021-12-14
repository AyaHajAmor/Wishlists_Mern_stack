const express = require('express');
const wishlistModel = require('../models/Wishlist');
const productModel = require('../models/Product');
const { validationResult } = require('express-validator');


exports.addproduct = async (req, res) => {
    try {
        const { body } = req;
        const product = new productModel({ 
            name: body.name, 
            price: body.price,
            currency: body.currency,
            description: body.description,
            id_wishlist: body.id_wishlist,
            id_user: body.id_user,
            statut: body.statut,
            photo: body.photo,
        });
        const savedProduct = await product.save()
        const findedWishlist = await wishlistModel.findOne({ _id: body.id_wishlist });
        findedWishlist.products.push(savedProduct._id);
        await findedWishlist.save()
        res.status(200).json({
            product: savedProduct,
        });
    } catch (error) {
        res.status(500).json({
            error: error,
        });
    }
}

exports.allproducts = async (req, res) => {
    try {
        const user = req.params.id;
        const data = await productModel.find({ id_user: user });
        res.status(200).json({
            data,
        });
    } catch (error) {
        res.status(500).json({
            error: error,
        });
    }
}
