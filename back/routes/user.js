const express = require("express");
const router = express.Router();
const { User, Pix } = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authenticateToken = require("../middlewares/auth");

const JWT_SECRET = process.env.APP_KEY;

// Create a new pix
router.post("/pix", async (req, res) => {
  try {
    const { pix_key, destination, clientId } = req.body;

    // verify if clientId is exist
    const isClient = await User.findByPk(clientId);
    if (!isClient) {
      return res.status(404).json({ message: "Client not found." });
    }

    // verify pix to enterpriese or to client
    if (destination === "to_enterprise" && pix_key !== "123") {
      return res.status(400).json({ message: "Incorrect Pix Key" });
    } else if (destination === "to_client" && pix_key !== isClient.cpf) {
      return res.status(400).json({ message: "Incorrect Pix Key" });
    }

    // create pix
    const pix = await Pix.create(req.body);
    return res.json(pix);
  } catch (error) {
    console.log(error);
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
    res.status(500).json({ message: "Failed to create Client." });
  }
});

router.post("/login", async (req, res) => {
  const { cpf, password } = req.body;
  try {
    const user = await User.findOne({ where: { cpf } });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Verify if password is valid
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Create an token JWT
    const token = jwt.sign(
      { userId: user.id, username: user.name },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ user, token });
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
      return res.status(404).json({ message: "Client not found." });
    }

    const pixsUser = await Pix.findAll({
      where: { clientId: user.id },
      include: [
        {
          model: User,
          as: "clients",
          attributes: ["name"],
        },
      ],
      order: [
        ['createdAt', 'DESC'] // or 'DESC'
      ]
    });

    if (pixsUser.length === 0) {
      return res.status(404).json({ message: "Client Pix not found." });
    }

    //get Total Received pix
    const totalPix = await Pix.count({
      where:{
        clientId: user.id,
      }
    })

    //get Total Received pix
    const totalReceivedPix = await Pix.count({
      where:{
        clientId: user.id,
        destination: "to_client"
      }
    })

    //get Total Received pix
    const totalSendPix = await Pix.count({
      where:{
        clientId: user.id,
        destination: "to_enterprise"
      }
    })

    res.json({pixsUser, totalReceivedPix, totalSendPix, totalPix});
  } catch (error) {
    res.status(500).json({ message: "Error: " + error.message });
  }
});

// get received user pix
router.get("/pix/receive/:id", authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Client not found." });
    }
    const pixsUser = await Pix.findAll({
      where: { clientId: user.id, destination: "to_client" },
    });
    res.json(pixsUser);
  } catch (error) {
    res.status(500).json({ message: "Error: " + error.message });
  }
});

// gete send user pix
router.get("/pix/send/:id", authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Client not found." });
    }
    const pixsUser = await Pix.findAll({
      where: { clientId: user.id, destination: "to_enterprise" },
    });
    res.json(pixsUser);
  } catch (error) {
    res.status(500).json({ message: "Error: " + error.message });
  }
});

module.exports = router;
