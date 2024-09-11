const express = require('express');
const { createHomework, getHomework } = require('../controllers/homeworkController');
const auth = require('../middleware/auth');  // Protect routes with JWT authentication
const router = express.Router();

// Teacher creates homework
router.post('/create', auth, createHomework);

// Teacher views all homework
router.get('/', auth, getHomework);

module.exports = router;
