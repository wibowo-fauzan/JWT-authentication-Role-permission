const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Endpoint untuk mendapatkan profil pengguna
router.get('/', protect, (req, res) => {
    const user = req.user; // Informasi pengguna dari token yang telah didecode
    res.json({
        id: user.id,
        nama_lengkap: user.nama_lengkap,
        username: user.username,
        email: user.email,
        nomor_telpon: user.nomor_telpon,
        role: user.role
    });
});

module.exports = router;