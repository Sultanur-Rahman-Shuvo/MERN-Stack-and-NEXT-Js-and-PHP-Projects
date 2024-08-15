const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

// Connect to MongoDB
connectToMongo();

const app = express();

// Use environment variable for port or default to 5000
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Optionally configure CORS to allow specific domains
app.use(express.json()); // Parse JSON bodies

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.error("Failed to start the server:", err);
    process.exit(1); // Exit the process with failure
  }
  console.log(`NotebookApp backend listening at http://localhost:${port}`);
});