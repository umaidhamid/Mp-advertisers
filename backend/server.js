import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDB from "./Database/database.js";
import { authMiddleware } from "./middleware/auth.middleware.js";
// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();

// Middleware setup
const allowedOrigins = [
  "http://localhost:5173", // for local dev
  "https://mpadvertisers.vercel.app", // your Vercel frontend
];

// ✅ Enable CORS safely
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // important for cookies / JWT
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.static("uploads")); // serve images or other static files

// Routes import (you’ll create them next)
import ownerRoutes from "./routes/owner.routes.js";
app.use("/api/owners", ownerRoutes);

// Example route
app.get("/", (req, res) => {
  res.send("🚀 MP Advertisers backend is running!");
});
app.get("/api/owners/checkAuth", authMiddleware, (req, res) => {
  try {
    res.status(200).json({ isAuthenticated: true });
  } catch (e) {
    res.status(401).json({ isAuthenticated: false });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
