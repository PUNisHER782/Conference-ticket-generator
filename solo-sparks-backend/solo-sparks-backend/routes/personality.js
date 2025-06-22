const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Simple personality test endpoint
router.post('/submit-personality', async (req, res) => {
  const { userId, answers } = req.body;
  const traits = { introvert: 0, extrovert: 0 }; // Simplified logic
  answers.forEach(q => (traits[q] ? traits[q]++ : traits[q] = 1));
  await User.findByIdAndUpdate(userId, { personality: traits });
  res.json({ message: 'Personality saved', traits });
});

module.exports = router;