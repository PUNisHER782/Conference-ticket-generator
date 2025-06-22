const express = require('express');
const Reflection = require('../models/Reflection');
const User = require('../models/User');
const router = express.Router();

router.post('/submit', async (req, res) => {
  const { userId, type, contentUrl, text } = req.body;
  const reflection = new Reflection({ userId, type, contentUrl, text });
  await reflection.save();
  await User.findByIdAndUpdate(userId, { $push: { reflections: reflection._id } });
  res.json({ message: 'Reflection saved' });
});

module.exports = router;