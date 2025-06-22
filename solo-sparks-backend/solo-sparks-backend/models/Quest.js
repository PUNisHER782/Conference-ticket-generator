const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: { type: String, enum: ['daily', 'weekly', 'monthly'] },
});

module.exports = mongoose.model('Quest', questSchema);