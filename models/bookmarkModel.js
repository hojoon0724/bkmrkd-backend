const mongoose = require('./connection');

const bookmarkSchema = new mongoose.Schema({
  title: { String },
  url: { URL },
  username: { String }
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
