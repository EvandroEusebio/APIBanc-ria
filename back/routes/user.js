const express = require("express");
const router = express.Router();
const { User, Pix } = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authenticateToken = require("../middlewares/auth");

const JWT_SECRET = process.env.APP_KEY;


// Create a new pix
router.post("/pix", authenticateToken, async (req, res) => {
  try {
    const pix = await Pix.create(req.body);
    res.json(pix);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to create pix." });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create user." });
  }
});

router.post("/login", async (req, res) => {
  const { cpf, password } = req.body;
  try {
    const user = await User.findOne({ where: { cpf } });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Verifica se a senha fornecida é válida
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Cria um token JWT
    const token = jwt.sign(
      { userId: user.id, username: user.name },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

/*
router.get("/", async (req, res) => {
  try {
    const user = await User.findAll({
      include: {
        model: Pix,
        as: "pixs",
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed User not found." });
  }
});
*/

router.get("/pix/:id", authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const pixsUser = await Pix.findAll({
      where: { clientId: user.id },
    });
    if (pixsUser.length === 0) {
      return res.status(404).json({ message: "User Pix not found." });
    }
    res.json(pixsUser);
  } catch (error) {
    res.status(500).json({ message: "Error: " + error.message });
  }
});

module.exports = router;

