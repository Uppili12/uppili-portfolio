import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes";
import pool from "./config/db";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an Origin header
      // such as Postman/server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      // Allow local development
      if (
        origin === "http://localhost:5173" ||
        origin === "http://127.0.0.1:5173"
      ) {
        return callback(null, true);
      }

      // Allow Vercel deployments
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      // Reject unknown origins
      return callback(new Error("Not allowed by CORS"));
    },

    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],

    allowedHeaders: ["Content-Type", "Authorization"],

    credentials: false,
  })
);

app.use(express.json());

// Health check
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Uppili Portfolio API is running",
  });
});

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