import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes";
import pool from "./config/db";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Health check
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API is running",
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