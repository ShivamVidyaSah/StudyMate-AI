import Router from "./routes/geminiRoutes";
import  express  from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cors from "cors";

dotenv.config();
//console.log("Environment loaded:", process.env);


const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// connect to database
connectDB();

//routes
app.use("/", Router);
// app.use("/api/gemini", geminiRoutes);
// app.use("/api/test-gemini", geminiRoutes);

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
