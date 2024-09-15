const User = require('../models/User');
const jwt = require('jsonwebtoken');

// User Registration
exports.register = async (req, res) => {
  const { username, password, role } = req.body;

  console.log('Registration attempt:', { username, role });  // Log registration attempt

  try {
    // Check if the user already exists
    let user = await User.findOne({ where: { username } });
    
    if (user) {
      console.log('User already exists:', username);  // Log if user already exists
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    user = await User.create({ username, password, role });
    console.log('New user created:', user);  // Log newly created user

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    console.log('Registration token generated:', token);  // Log token generation
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error during registration:', error);  // Log error details
    res.status(500).json({ message: 'Server error' });
  }
};

// User Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  console.log('Login attempt:', username);  // Log login attempt

  try {
    // Check if the user exists
    let user = await User.findOne({ where: { username } });
    
    if (!user) {
      console.log('User not found:', username);  // Log if user is not found
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if the password matches
    if (password !== user.password) {
      console.log('Invalid password for user:', username);  // Log incorrect password
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    console.log('Login token generated:', token);  // Log token generation
    res.json({ token, role: user.role });
  } catch (error) {
    console.error('Error during login:', error);  // Log error details
    res.status(500).json({ message: 'Server error' });
  }
};
