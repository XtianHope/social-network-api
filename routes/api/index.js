const express = require('express');
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

const router = express.Router();

// Routes for users
router.use('/users', userRoutes);

// Routes for thoughts
router.use('/thoughts', thoughtRoutes);

module.exports = router;