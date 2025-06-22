const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  personality: { type: Object },
  moodHistory: [{ mood: String, date: Date }],
  sparkPoints: { type: Number, default: 0 },
  reflections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reflection' }],
  rewards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reward' }]
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = function (input) {
  return bcrypt.compare(input, this.password);
};

module.exports = mongoose.model('User', userSchema);
