const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({message: "Backend is running"});


});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.get("/api/users", (req, res) => {
    res.json([
        { id: 1, name: "Kyle"},
        { id: 2, name: "Test User"}
    ]);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log('Server running on port ${PORT}'
    );
});