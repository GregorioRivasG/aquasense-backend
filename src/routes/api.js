const express = require('express');
const router = express.Router();
const { 
  createMeasurement,
  getMeasurements
} = require('../controllers/measurements');

// Measurement routes
router.post('/measurements', createMeasurement);
router.get('/measurements', getMeasurements);

module.exports = router;