const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../db');

// Set up multer for photo uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Pet registration route
router.post('/register', upload.single('photo'), async (req, res) => {
  const { userId, name, description } = req.body;
  const photoPath = req.file.path;
  try {
    const pet = await db.insertPet(userId, name, description, photoPath);
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register pet' });
  }
});

module.exports = router;
