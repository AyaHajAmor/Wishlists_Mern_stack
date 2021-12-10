const express = require('express');
const wishlistModel = require('../models/Wishlist');


exports.addwishlist = async (req, res) => {
    try {
    const { body } = req;
   const wishlist = new wishlistModel({name: body.name, id_user: body.id_user});
   const savedWishlist = await wishlist.save()
   res.status(200).json({
    wishlist: savedWishlist,
    });
  }catch (error) {
    res.status(500).json({
        error: error,
    });
  }
  }

  exports.allwishlists = async (req, res) => {
    try {
        const  user  = req.params.id ;
        const data = await wishlistModel.find({id_user : user});
        res.status(200).json({
            data,
            });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error,
        });
    
    }
}
