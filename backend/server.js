const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');

const PORT = 5000;
const app = express();

/* Middleware */
app.use(cors(
    'http://localhost:3001'
));
app.use(bodyParser.json()); 

/* MongoDB Connection */
const URL = 'mongodb+srv://midhun78:Midhun7896@cluster0.rtvvsct.mongodb.net/User?retryWrites=true&w=majority';
const client = new MongoClient(URL, {
    serverApi: {
        version: ServerApiVersion.v1,   
        strict: true,
        deprecationErrors: true,
    }
});

// Establish Database Connection
async function database_connection() {
    try {
        await client.connect();
        console.log("Connected to MongoDB successfully!");

        // Attach DB instance to app locals (to use in routes)
        app.locals.db = client.db("User");  // Change "User" to your actual database name
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
}

// Import Routes (After DB Connection)
app.use("/home", require("./home/pending.js")); 
app.use("/approve", require("./home/approve.js"));
app.use("/reject", require("./home/reject.js")); 


// Ensure database connection before server starts
database_connection().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`); 
    });
}).catch(err => console.error("Failed to start server:", err));

/* Graceful Shutdown */
process.on("SIGINT", async () => {
    console.log("Closing MongoDB connection...");
    await client.close();
    console.log("MongoDB connection closed.");
    process.exit(0);
});
