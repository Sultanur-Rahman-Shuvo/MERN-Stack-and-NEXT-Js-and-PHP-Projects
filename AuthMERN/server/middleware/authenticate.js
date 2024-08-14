const jwt = require("jsonwebtoken");
const userdb = require("../models/userSchema");
const keysecret = "ljadfjaskdjflksjadfkjsasdfajsdfj";

const authenticate = async (req, res, next) => {
    try {
        // Extract token from Authorization header
        const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
        
        if (!token) {
            return res.status(401).json({ status: 401, message: "No token provided" });
        }

        // Verify token
        const verifiedToken = jwt.verify(token, keysecret);

        // Find user by id from token
        const rootUser = await userdb.findOne({ _id: verifiedToken._id });

        if (!rootUser) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }

        // Attach user info to request object
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(401).json({ status: 401, message: "Unauthorized - Invalid token" });
    }
};

module.exports = authenticate;
