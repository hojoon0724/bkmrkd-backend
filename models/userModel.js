const mongoose = require('./connection');

const userSchema = new mongoose.Schema({
  username: { String, required: true, unique: true },
  password: { String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
