const express = require('express');
const Bookmark = require('../models/bookmarkModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ userId: req.userId });
    res.json(bookmarks);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post('/', async (req, res) => {
  try {
    req.body.username = req.username;
  } catch (error) {
    res.json(error);
  }
});

router.get('/:id', async (req, res) => {
  res.send(`single bookmark GET route response`);
});

router.put('/:id', async (req, res) => {
  res.send(`single bookmark PUT route response`);
});

router.delete('/:id', async (req, res) => {
  res.send(`single bookmark DELETE route response`);
});

module.exports = router;
