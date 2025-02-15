const express = require('express');
const router = express.Router();
const User = require('../Model/UserModel');

// Signup Route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  const userexist = await User.findOne({ username });
  if (userexist) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Creating new user
  const newUser = new User({
    firstName,
    lastName,
    username,
    email,
    password,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});


// Login Route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate JWT Token
  const token = jwt.sign({ userId: user._id, username: user.username }, "your_secret_key", {
    expiresIn: "1h",
  });

  res.status(200).json({ token });
});




module.exports = router;
