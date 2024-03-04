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
    req.body.userId = req.userId;
    res.json(await Bookmark.create(req.body));
  } catch (error) {
    res.json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    res.json(await Bookmark.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  console.log(req.body);
  try {
    await Bookmark.findByIdAndUpdate(req.params.id, req.body);
    res.json(await Bookmark.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    res.json(await Bookmark.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
