const express = require('express');
const router = express.Router();

const sensorController = require('../controller/sensors.controller.js'); // Corrected path

router.post('/', sensorController.createSensorData);
router.get('/', sensorController.getAllSensorData);
router.post('/search', sensorController.getSensorDataWithinRange);
router.get('/:id', sensorController.getSensorDataById);
router.delete('/:id', sensorController.deleteSensorData);

module.exports = router;