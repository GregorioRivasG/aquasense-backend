const mongoose = require('mongoose');

const TankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Tank', TankSchema);