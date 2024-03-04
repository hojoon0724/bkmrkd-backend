const mongoose = require('./connection');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
  // _id = bookmark.userId
});

const User = mongoose.model('User', userSchema);

module.exports = User;
