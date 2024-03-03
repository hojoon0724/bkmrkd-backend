const express = require('express');
const Bookmark = require('../models/bookmarkModel');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(`bookmark collection GET route response`);
});

router.post('/', async (req, res) => {
  res.send(`bookmark collection POST route response`);
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
