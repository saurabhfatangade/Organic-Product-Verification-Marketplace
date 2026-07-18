const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();   // ⭐ THIS LINE WAS MISSING

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("🚀 Organic Product Verification API is Running...");
});

// Test API
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "Backend is working successfully!",
        project: "Organic Product Verification Marketplace"
    });
});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});