const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  title: String,
  pointsRequired: Number,
  description: String
});

module.exports = mongoose.model('Reward', rewardSchema);