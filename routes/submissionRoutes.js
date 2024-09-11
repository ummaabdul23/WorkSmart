const express = require('express');
const { getAllHomework, submitHomework } = require('../controllers/submissionController');
const auth = require('../middleware/auth');  // Protect routes with JWT authentication
const router = express.Router();

// Student views all homework
router.get('/', auth, getAllHomework);

// Student submits homework
router.post('/submit', auth, submitHomework);

module.exports = router;
