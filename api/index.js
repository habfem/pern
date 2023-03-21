import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/user.js"
import authRoute from "./routes/auth.js"

const app = express();
app.use(express.json());

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("Your APi is running");
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`)
});