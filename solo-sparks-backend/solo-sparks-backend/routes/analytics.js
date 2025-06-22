const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/summary/:id', async (req, res) => {
  const user = await User.findById(req.params.id).populate('reflections rewards');
  res.json({
    totalReflections: user.reflections.length,
    totalPoints: user.sparkPoints,
    rewardsUnlocked: user.rewards.length,
    moodStats: user.moodHistory
  });
});

module.exports = router;
