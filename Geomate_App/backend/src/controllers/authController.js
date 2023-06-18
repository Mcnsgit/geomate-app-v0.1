// authController.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
    return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
    return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
    res.json({ token });
});

module.exports = router;
