const express = require('express');
const router = express.Router();
const User = require('../Model/UserModel');
<<<<<<< HEAD
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs');


=======
>>>>>>> 8aa62bad2ef001eb2148408f4f3324c5807d11a3

// Signup Route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
<<<<<<< HEAD

  const userexist = await User.findOne({ username });
  // Hash password before saving
  const hashedPassword = await bcrypt.hash(password, 10);
=======
  const userexist = await User.findOne({ username });
>>>>>>> 8aa62bad2ef001eb2148408f4f3324c5807d11a3
  if (userexist) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Creating new user
  const newUser = new User({
    firstName,
    lastName,
    username,
    email,
<<<<<<< HEAD
    password: hashedPassword, // Save hashed password
  });

  try {
  await newUser.save();
  res.status(201).json({ message: 'User created successfully' });
} catch (err) {
  console.error('Error during user creation:', err); // Log the error
  res.status(500).json({ message: 'Something went wrong' });
}
=======
    password,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
>>>>>>> 8aa62bad2ef001eb2148408f4f3324c5807d11a3
});


// Login Route
router.post("/login", async (req, res) => {
<<<<<<< HEAD

  const { username, password } = req.body;
  // console.log('Login attempt with', username, password);

  const user = await User.findOne({ username });

 if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Compare the hashed password with the input password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
=======
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || user.password !== password) {
>>>>>>> 8aa62bad2ef001eb2148408f4f3324c5807d11a3
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate JWT Token
<<<<<<< HEAD
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
=======
  const token = jwt.sign({ userId: user._id, username: user.username }, "your_secret_key", {
    expiresIn: "1h",
  });

>>>>>>> 8aa62bad2ef001eb2148408f4f3324c5807d11a3
  res.status(200).json({ token });
});




module.exports = router;
