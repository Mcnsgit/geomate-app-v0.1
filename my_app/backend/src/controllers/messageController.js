// messageController.js
const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.get('/:conversationId', async (req, res) => {
    const messages = await Message.find({ conversationId: req.params.conversationId });
    res.json(messages);
});

router.post('/', async (req, res) => {
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
});

module.exports = router;
