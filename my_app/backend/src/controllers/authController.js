const express = require('express');
const User = require('../models/user');

exports.register = async (req, res) => {
  // Registration logic here
};

exports.login = async (req, res) => {
  // Login logic here
};


const SomeModel = require('../models/user');

exports.someFunction = async (req, res, next) => {
  // Your code here
}; const express = require('express');
const User = require('../models/user');

// Registration function
exports.register = async (req, res) => {
    try {
    const { name, email, password } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }
    // Create new user
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
}
};

// Login function
exports.login = async (req, res) => {
    try {
    const { email, password } = req.body;
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    // Check if password is correct
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    // Generate token
    const token = user.generateAuthToken();
    res.status(200).json({ token });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
}
};


const SomeModel = require('../models/user');

exports.someFunction = async (req, res, next) => {
  try {
    // Your code here
    res.status(200).json({ message: "Function executed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};