const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/User');
const {  validationResult } = require('express-validator');


//sign in
exports.connect = async (req, res, next) => {
    let getUser;
    userModel.findOne({ email: req.body.email, })
        .then((user) => {
            if (!user) {
                return res.status(401).json({
                    message: 'Authentication failed',
                });
            }
            getUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then((response) => {
            if (!response) {
                return res.status(401).json({
                    message: 'Authentication failed',
                });
            }
            let jwtToken = jwt.sign(
                {
                    email: getUser.email,
                    userId: getUser._id,
                },
                'longer-secret-is-better',
                {
                    expiresIn: '1h',
                }
            );
            res.status(200).json({
                token: jwtToken,
                expiresIn: 3600,
                msg: getUser,
            });
        })
        .catch((err) => {
            return res.status(401).json({
                message: 'Authentication failed',
            });
        });
};


//sign up
exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    } else {
        bcrypt.hash(req.body.password, 10).then((hash) => {
            const user = new userModel({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                picture: req.body.picture,
                password: hash,
            });
            user
                .save()
                .then((response) => {
                    res.status(201).json({
                        message: 'User successfully created!',
                        result: response,
                    });
                })
                .catch((error) => {
                    res.status(500).json({
                        error: error,
                    });
                });
        });
    }
};
