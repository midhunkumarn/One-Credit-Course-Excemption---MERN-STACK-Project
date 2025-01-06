const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Sample Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Example of adding routes (you can create a separate folder for routes)
app.post("/add-data", async (req, res) => {
  const { name, age } = req.body;
  try {
    const newData = new DataModel({ name, age });
    await newData.save();
    res.status(201).json({ message: "Data added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
