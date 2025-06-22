const express = require('express');
const User = require('../models/User');
const Reward = require('../models/Reward');
const router = express.Router();

router.post('/redeem', async (req, res) => {
  const { userId, rewardId } = req.body;
  const user = await User.findById(userId);
  const reward = await Reward.findById(rewardId);
  if (user.sparkPoints < reward.pointsRequired) {
    return res.status(400).json({ error: 'Not enough points' });
  }
  user.sparkPoints -= reward.pointsRequired;
  user.rewards.push(rewardId);
  await user.save();
  res.json({ message: 'Reward redeemed' });
});

module.exports = router;