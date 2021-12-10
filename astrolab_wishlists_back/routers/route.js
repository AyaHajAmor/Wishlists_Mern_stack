const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const userModel = require('../models/User');
const authorize = require('../middlewares/auth');
const { check, validationResult } = require('express-validator');
const userController = require('../controllers/userCntroller');
const productController = require('../controllers/productController');
const wishlistController = require('../controllers/wishlistController');


// User Auth
router.route('/register').post(/* upload.single("picture"), */ userController.register);
router.route('/connect').post(userController.connect);

// Routes Product
// router.route('/getproduct/:id').get( authorize ,productController.getproduct);
router.route('/addproduct').post( /*authorize ,*/productController.addproduct);
// router.route('/updateproduct/:id').put( authorize ,productController.updateproduct);
router.route('/allproducts/:id').get( /*authorize ,*/productController.allproducts);

// Routes Wishlist
// router.route('/getwishlist/:id').get( authorize ,wishlistController.getwishlist);
router.route('/addwishlist').post(/* authorize ,*/wishlistController.addwishlist);
// router.route('/updatewishlist/:id').put( authorize ,wishlistController.updatewishlist);
router.route('/allwishlists/:id').get( /*authorize , */wishlistController.allwishlists);
// router.route('/wishlist/products/:id').get( authorize ,wishlistController.allwishlists);


module.exports = router;