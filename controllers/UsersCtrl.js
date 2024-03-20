const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    let { username, password } = req.body;
    username = username.toLowerCase();
    const checkUserName = await User.findOne({ username });
    if (checkUserName) {
      res.status(409).json({ message: `Username already exists` });
    } else {
      password = await bcrypt.hash(password, await bcrypt.genSalt(10));
      const user = await User.create({ username, password });
      res.json(user);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post('/login', async (req, res) => {
  let { username, password } = req.body;
  username = username.toLowerCase();
  const user = await User.findOne({ username });

  if (!user || !bcrypt.compareSync(password, user.password))
    return res.status(401).json({ error: 'invalid credentials' });

  const token = jwt.sign({ userId: user.id, username: user.username }, process.env.SECRET, { expiresIn: '1h' });
  console.log(token, username);
  res.json({ token, username });
});

module.exports = router;
