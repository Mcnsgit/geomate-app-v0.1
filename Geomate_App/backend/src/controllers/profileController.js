// profileController.js
const express = require('express');
const router = express.Router();
const UserProfile = require('../models/userProfile');

router.get('/:id', async (req, res) => {
    const userProfile = await UserProfile.findById(req.params.id);
    res.json(userProfile);
});

router.put('/:id', async (req, res) => {
    const updatedUserProfile = await UserProfile.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedUserProfile);
});

module.exports = router;
