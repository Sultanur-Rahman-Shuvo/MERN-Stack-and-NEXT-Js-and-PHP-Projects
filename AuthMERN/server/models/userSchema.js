const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const keysecret = "ljadfjaskdjflksjadfkjsasdfajsdfj";

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not a valid email address");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

// Generate auth token
userSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, keysecret, { expiresIn: "1d" });
        this.tokens = this.tokens.concat({ token });
        await this.save();
        return token;
    } catch (error) {
        // Handle error as needed
        throw new Error("Error generating token: " + error.message);
    }
};

// Create model
const userdb = mongoose.model("users", userSchema);

module.exports = userdb;
