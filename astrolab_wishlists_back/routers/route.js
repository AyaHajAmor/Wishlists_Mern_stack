const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const userModel = require('../models/User');
const authorize = require('../middlewares/auth');
const { check, validationResult } = require('express-validator');
const userController = require('../controllers/userCntroller');


// User Signin
router.route('/register')
.post(
// upload.single("picture")
// ,
userController.register);

router.route('/connect')
.post(userController.connect);



// // Get All Users
// router.route('/all-user').get(authorize, (req, res) => {
//     userModel.find((error, response) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.status(200).json(response)
//         }
//     })
// })

// // Get A Single User
// router.route('/profile-user/:id').get(authorize, (req, res, next) => {
//   userModel.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data,
//       });
//     }
//   });
// });

// // Delete A User
// router.route('/delete-user/:id').delete((req, res, next) => {
//   userModel.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data,
//       });
//     }
//   });
// });

module.exports = router;