const express = require("express");
const router = express.Router();

// ✅ Fetch Approved Requests
router.get("/approvedlist", async (req, res) => {
    try {
        const db = req.app.locals.db;
        
        // Fetch all documents from the `approvedlist` collection
        const approvedRequests = await db.collection("approvedlist").find({}).toArray();

        res.json(approvedRequests);
    } catch (error) {
        console.error("❌ Error fetching approved requests:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
