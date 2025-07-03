const mongoose = require('mongoose');
//campos para peceras

const tankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Tank', tankSchema);
