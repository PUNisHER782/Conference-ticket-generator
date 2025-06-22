const express = require('express');
const Quest = require('../models/Quest');
const router = express.Router();

// Return static quests
router.get('/get-quests', async (req, res) => {
  const quests = await Quest.find({});
  res.json(quests);
});

module.exports = router;
