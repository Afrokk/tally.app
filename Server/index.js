const express = require("express");
const networkPort = process.env.networkPort || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ 
    greeting: "You sent a GET request to the server",
    message: "Hello from server!" });
});

app.listen(networkPort, () => {
  console.log(`Server working on Port: ${networkPort}`);
});
