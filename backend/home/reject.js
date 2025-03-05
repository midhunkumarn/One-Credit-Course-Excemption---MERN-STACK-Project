const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();


// 📌 Get all rejected requests
router.get("/rejectedlist", async (req, res) => {
    const db = req.app.locals.db;

    try {
        const rejectedRequests = await db.collection("rejectedlist").find().toArray();
        res.json(rejectedRequests);
    } catch (error) {
        console.error("❌ Error fetching rejected requests:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// 📌 Reject a pending request

module.exports = router;
