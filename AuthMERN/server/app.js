const express = require('express');
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8009; // Use environment variable for port

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration (customize as needed)
app.use(cors({
    origin: 'http://localhost:3000', // Update this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Routes
app.use(router);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!", details: err.message });
});

// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
