const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use('/auth', require('./routes/auth'));
app.use('/personality', require('./routes/personality'));
app.use('/quests', require('./routes/quests'));
app.use('/reflection', require('./routes/reflection'));
app.use('/rewards', require('./routes/rewards'));
app.use('/analytics', require('./routes/analytics'));

module.exports = app;
