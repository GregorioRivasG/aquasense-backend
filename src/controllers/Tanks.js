const Tank = require('../models/Tank');

//CRUD de las peceras
exports.createTank = async (req, res) => {
  try {
    const tank = new Tank(req.body);
    await tank.save();
    res.status(201).json(tank);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTanks = async (req, res) => {
  try {
    const tanks = await Tank.find();
    res.json(tanks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTankById = async (req, res) => {
  try {
    const tank = await Tank.findById(req.params.id);
    if (!tank) return res.status(404).json({ message: 'Pecera no encontrada' });
    res.json(tank);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTank = async (req, res) => {
  try {
    const updated = await Tank.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Pecera no encontrada' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTank = async (req, res) => {
  try {
    const deleted = await Tank.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Pecera no encontrada' });
    res.json({ message: 'Pecera eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
