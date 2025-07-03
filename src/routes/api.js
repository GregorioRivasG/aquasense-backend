//Endpoints para los datos de los sensores

const express = require('express');
const router = express.Router();
const { 
  createMeasurement, 
  getMeasurements 
} = require('../controllers/measurements');
router.post('/measurements', createMeasurement);
router.get('/measurements', getMeasurements);

module.exports = router;