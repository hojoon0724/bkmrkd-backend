// Base dep
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// Added dep
const Bookmark = require('./models/bookmarkModel');
const User = require('./models/userModel');
const bookmarkController = require('./controllers/BookmarksCtrl');
const userController = require('./controllers/UsersCtrl');
const PORT = process.env.PORT;

// Sample data
const seedData = require('./seedData/seed.json');

// Run
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/bookmark', bookmarkController);
app.use('/user', userController);

// Default Route
app.get('/', (req, res) => {
  res.send('bkmrkd backend is running');
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
