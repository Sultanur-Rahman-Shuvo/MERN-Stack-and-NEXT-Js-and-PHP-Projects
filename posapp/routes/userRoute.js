const express = require("express");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/userModel");
const router = express.Router();

// Registration Route
router.post("/register", async (req, res) => {
  try {
    // Hashing the password before saving
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Creating a new user with the hashed password
    const newuser = new UserModel({ ...req.body, password: hashedPassword });
    await newuser.save();
    res.send("User Registered successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    // Finding the user by userId
    const user = await UserModel.findOne({ userId: req.body.userId });

    if (user) {
      // Comparing the provided password with the hashed password
      const isMatch = await bcrypt.compare(req.body.password, user.password);

      if (isMatch) {
        res.send(user);
      } else {
        res.status(400).json({ message: "Login failed" });
      }
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
