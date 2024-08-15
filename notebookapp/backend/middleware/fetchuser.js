var jwt = require('jsonwebtoken');
const JWT_SECRET = "shuvoisagoodbo$y";

const fetchuser = (req, res, next) => {
    // Get the token from the headers
    const token = req.header('auth-token');
    
    // If no token is present, return an error
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        // Verify the token
        const data = jwt.verify(token, JWT_SECRET);
        // Attach the user to the request object
        req.user = data.user;
        // Proceed to the next middleware
        next();
    } catch (error) {
        // Handle invalid token errors
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
};

module.exports = fetchuser;
