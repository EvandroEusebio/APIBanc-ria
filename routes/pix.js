const express = require("express");
const router = express.Router();
const {Pix} = require("../models/index");
const authenticateToken = require('../middlewares/auth')

const JWT_SECRET = process.env.APP_KEY;

// Create a new user
router.post("/store", async (req, res) => {
  try {
    const pix = await Pix.create(req.body);
    res.json(pix);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to create pix." });
  }
});



router.get("/",authenticateToken,  async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed User not found." });
  }
});

module.exports = router;
