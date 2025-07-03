const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/authController');
const verifyToken = require('../middleware/verifyToken');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', verifyToken, getMe); 

module.exports = router;
