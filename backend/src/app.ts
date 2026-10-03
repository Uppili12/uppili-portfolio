import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes";

const app = express();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://uppili-portfolio.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Parse JSON request body
app.use(express.json());

// Root API route
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Uppili Portfolio API is running",
  });
});

// Contact API
app.use("/api/contact", contactRoutes);

export default app;