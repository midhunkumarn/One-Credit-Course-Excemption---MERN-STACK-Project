const express = require("express");
const { ObjectId } = require("mongodb");

const router = express.Router();

// 📌 Get Pending Requests
router.get("/pendinglist", async (req, res) => {
    try {
        const db = req.app.locals.db;
        const pendingRequests = await db.collection("pendinglist").find({}).toArray();
        res.json(pendingRequests);
    } catch (error) {
        console.error("❌ Error fetching pending requests:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// 📌 Approve Request
router.post("/approve", async (req, res) => {
    const db = req.app.locals.db;
    const { _id } = req.body;

    if (!_id || typeof _id !== "string" || !_id.match(/^[a-fA-F0-9]{24}$/)) {
        return res.status(400).json({ message: "❌ Invalid request ID format" });
    }

    try {
        const objectId = new ObjectId(_id);
        console.log("🔍 Approving request with ID:", objectId);

        // Find the request in pendinglist
        const pendingItem = await db.collection("pendinglist").findOne({ _id: objectId });

        if (!pendingItem) {
            return res.status(404).json({ message: "❌ Request not found." });
        }

        // Move data to approvedlist
        await db.collection("approvedlist").insertOne({
            ...pendingItem,
            approvedDate: new Date().toISOString().split("T")[0] // Add approval date
        });

        // Remove from pendinglist
        await db.collection("pendinglist").deleteOne({ _id: objectId });

        res.json({ message: "✅ Request approved and moved to approvedlist." });
    } catch (error) {
        console.error("❌ Error approving request:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// 📌 Reject Request
router.post("/reject", async (req, res) => {
    const db = req.app.locals.db;
    const { _id, reason } = req.body;

    if (!_id || typeof _id !== "string" || !_id.match(/^[a-fA-F0-9]{24}$/)) {
        return res.status(400).json({ message: "❌ Invalid request ID format" });
    }

    if (!reason || !reason.trim()) {
        return res.status(400).json({ message: "❌ Reason is required for rejection" });
    }

    try {
        const objectId = new ObjectId(_id);
        console.log("🔍 Rejecting request with ID:", objectId, "Reason:", reason);

        // Find the request in pendinglist
        const pendingItem = await db.collection("pendinglist").findOne({ _id: objectId });

        if (!pendingItem) {
            return res.status(404).json({ message: "❌ Request not found." });
        }

        // Move data to rejectedlist
        await db.collection("rejectedlist").insertOne({
            ...pendingItem, // Copy existing data
            rejectedDate: new Date().toISOString().split("T")[0], // Add rejection date
            reason // Store rejection reason
        });

        // Remove from pendinglist
        await db.collection("pendinglist").deleteOne({ _id: objectId });

        res.json({ message: "✅ Request rejected and moved to rejectedlist." });
    } catch (error) {
        console.error("❌ Error rejecting request:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
