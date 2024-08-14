const express = require('express');
const router = new express.Router();
const userdb = require("../models/userSchema");
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');

// Registration route
router.post("/register", async (req, res) => {
    const { fname, email, password, cpassword } = req.body;

    if (!fname || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Fill all the details" });
    }

    try {
        const preuser = await userdb.findOne({ email: email });
        if (preuser) {
            return res.status(422).json({ error: "This Email already exists" });
        } 
        if (password !== cpassword) {
            return res.status(422).json({ error: "Password and Confirm Password mismatch" });
        } 
        
        const finalUser = new userdb({
            fname, email, password
        });

        // Hashing password before saving
        await finalUser.save();
        return res.status(201).json({ status: 201, storedata: finalUser });
    } catch (error) {
        return res.status(500).json({ error: "Server Error", details: error.message });
    }
});

// Login route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Fill all the details" });
    }

    try {
        const userValid = await userdb.findOne({ email: email });
        if (!userValid) {
            return res.status(422).json({ error: "Invalid Details" });
        }

        const isMatch = await bcrypt.compare(password, userValid.password);
        if (!isMatch) {
            return res.status(422).json({ error: "Invalid Details" });
        }

        // Token generation
        const token = await userValid.generateAuthToken();
        
        // Cookie generation
        res.cookie("usercookie", token, {
            expires: new Date(Date.now() + 9000000), // 9000000 ms = 2.5 hours
            httpOnly: true
        });

        const result = {
            userValid,
            token
        };
        return res.status(200).json({ status: 200, result });
    } catch (error) {
        return res.status(500).json({ error: "Server Error", details: error.message });
    }
});

// Valid user route
router.get("/validuser", authenticate, async (req, res) => {
    try {
        const ValidUserOne = await userdb.findOne({ _id: req.userId });
        if (!ValidUserOne) {
            return res.status(404).json({ status: 404, error: "User not found" });
        }
        return res.status(200).json({ status: 200, ValidUserOne });
    } catch (error) {
        return res.status(500).json({ status: 500, error: "Server Error", details: error.message });
    }
});

// Logout route
router.get("/logout", authenticate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelm) => {
            return curelm.token !== req.token;
        });

        await req.rootUser.save(); // Save updated user

        res.clearCookie("usercookie", { path: "/" });
        return res.status(200).json({ status: 200, message: "Logged out successfully" });
    } catch (error) {
        return res.status(500).json({ status: 500, error: "Server Error", details: error.message });
    }
});

module.exports = router;
