const express = require("express");
const router = express.Router();
const {Pix, User} = require("../models/index");
const authenticateToken = require('../middlewares/auth');

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



router.get("/",  async (req, res) => {
  try {
    const pix = await Pix.findAll({
      include: [{
        model: User,
        as: "clients",
        attributes: ['name', 'cpf']
      }
    ]   
    })
    res.json(pix);
  } catch (error) {
    res.status(500).json({ message: "Failed Pix not found." });
  }
});



module.exports = router;
