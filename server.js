
const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello! Node.js and Express server is running on port 3000.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
