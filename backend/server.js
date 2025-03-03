const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Define Schema & Model (Ensure correct DB & Collection)
const PendingSchema = new mongoose.Schema({
    name: String,
    rollNumber: String,
    department: String,
    completedCourses: [String],
    exemptionRequested: String,
    requestDate: String
});

// ✅ Explicitly Specify `User.pendinglist`
const PendingRequest = mongoose.model("pendinglist", PendingSchema, "pendinglist");

// ✅ Fetch Data API
app.get("/pending", async (req, res) => {
  try {
      const pendingRequests = await PendingRequest.find();
      console.log("📩 MongoDB Data Fetched:", pendingRequests); // Debugging

      if (pendingRequests.length === 0) {
          console.warn("⚠️ No pending requests found in MongoDB!");
      }

      res.json(pendingRequests);
  } catch (error) {
      console.error("❌ Error fetching pending requests:", error);
      res.status(500).json({ error: "Error fetching pending requests" });
  }
});



// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
