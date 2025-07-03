const Measurement = require('../models/Measurement');

//funcion para guardar los datos de los 3 sensores
exports.createMeasurement = async (req, res) => {
  try {
    const { tankId, temperature, ph, conductivity } = req.body;
    
    const newMeasurement = new Measurement({
      tankId,
      temperature,
      ph,
      conductivity
    });

    const savedMeasurement = await newMeasurement.save();
    res.status(201).json(savedMeasurement);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Ver los datos ordenados
exports.getMeasurements = async (req, res) => {
  try {
    const measurements = await Measurement.find().sort({ timestamp: -1 });
    res.json(measurements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};