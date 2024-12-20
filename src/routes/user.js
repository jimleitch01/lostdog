const express = require('express');
const router = express.Router();
const db = require('../db');

// User registration route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await db.insertUser(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

module.exports = router;
