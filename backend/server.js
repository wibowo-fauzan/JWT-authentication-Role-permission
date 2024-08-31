const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes'); // Tambahkan import ini
const { connectDB } = require('./config/db');
const User = require('./models/User.js');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// Connect to MySQL
connectDB();

// Sync models
User.sync({ alter: true })
    .then(() => console.log('Database synced'))
    .catch(err => console.log('Error syncing database:', err));

// Routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes); // Tambahkan rute profil

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));