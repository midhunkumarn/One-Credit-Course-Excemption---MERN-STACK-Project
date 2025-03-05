const express = require("express");
const { ObjectId } = require("mongodb");

const router = express.Router();

// ✅ Fetch Pending Requests
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

// ✅ Approve Request: Move from `pendinglist` to `approvedlist`
router.post("/approve", async (req, res) => {
    console.log("In Request");
    const db = req.app.locals.db;
    const { _id } = req.body;
    console.log(_id);
    try {
        const db = req.app.locals.db;
        const { _id } = req.body; 
        if (!_id) {
            return res.status(400).json({ message: "❌ Invalid request ID" });
        }

        const objectId = new ObjectId(_id);
        console.log("🔍 Approving request with ID:", objectId);

        // Atomically find and delete from pendinglist
        const pendingItem = await db.collection("pendinglist").findOne({ _id });

        if (!pendingItem) {
            console.log("❌ Request not found in pendinglist");
            return res.status(404).json({ message: "Request not found." });
        }

        // ✅ Insert into approvedlist with all data
        await db.collection("approvedlist").insertOne({
            ...pendingItem, // Copy all data
            approvedDate: new Date().toISOString().split("T")[0] 
        });

        // ✅ Delete from pendinglist
        await db.collection("pendinglist").deleteOne({ _id });


        console.log("✅ Successfully moved to approvedlist");
        res.json({ message: "Request approved and moved to approvedlist." });
    } catch (error) {
        console.error("❌ Error approving request:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Reject Request: Move to `rejectedlist`
router.post("/reject", async (req, res) => {
    try {
        const db = req.app.locals.db;
        const { _id, reason } = req.body; 

        if (!_id || !reason.trim()) {
            return res.status(400).json({ message: "❌ Request ID and reason are required" });
        }

        const objectId = new ObjectId(_id);
        console.log("🔍 Rejecting request with ID:", objectId, "Reason:", reason);

        // Atomically find and delete from pendinglist
        const pendingItem = await db.collection("pendinglist").findOneAndDelete({ _id: objectId });

        if (!pendingItem.value) {
            console.log("❌ Request not found in pendinglist");
            return res.status(404).json({ message: "Request not found." });
        }

        // Insert into rejectedlist with reason
        await db.collection("rejectedlist").insertOne({
            ...pendingItem.value,
            rejectedDate: new Date().toISOString().split("T")[0],
            reason
        });

        console.log("✅ Successfully moved to rejectedlist");
        res.json({ message: "Request rejected and moved to rejectedlist." });
    } catch (error) {
        console.error("❌ Error rejecting request:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
