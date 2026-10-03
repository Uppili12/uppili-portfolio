import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes";
import pool from "./config/db";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// CORS
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// JSON middleware
app.use(express.json());

// Health check
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API is running",
  });
});

// Root route
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Uppili Portfolio API is running",
  });
});

// Contact API
app.use("/api/contact", contactRoutes);

// Start server
app.listen(PORT, async () => {
  console.log(
    `Portfolio backend running on http://localhost:${PORT}`
  );

  try {
    await pool.query("SELECT NOW()");
    console.log("PostgreSQL connection successful");
  } catch (error) {
    console.error(
      "PostgreSQL connection failed:",
      error
    );
  }
});