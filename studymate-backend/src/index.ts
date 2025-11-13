import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import geminiRoutes from "./routes/geminiRoutes";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// connect to database
connectDB();

//routes
app.use("/api/gemini", geminiRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
