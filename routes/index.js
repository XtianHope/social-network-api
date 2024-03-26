const express = require('express');
const apiRoutes = require('./api');

const router = express.Router();

// Routes for API
router.use('/api', apiRoutes);

module.exports = router;