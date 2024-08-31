// routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const { protect, roleCheck } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
    
// Route yang hanya bisa diakses oleh admin
router.get('/admin', protect, roleCheck('admin'), (req, res) => {
    res.json({ message: 'Selamat datang di halaman Admin!' });
});

// Route untuk user
router.get('/user', protect, roleCheck('user'), (req, res) => {
    res.json({ message: 'Selamat datang di halaman User!' });
});

module.exports = router;