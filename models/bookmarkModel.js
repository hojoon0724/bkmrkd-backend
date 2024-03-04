const mongoose = require('./connection');

const bookmarkSchema = new mongoose.Schema({
  title: { type: String },
  url: { type: String },
  userId: { type: String }
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
