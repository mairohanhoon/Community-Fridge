import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import serverless from "serverless-http";

// Routes
import authRouter from "./Routes/auth.routes.js";
import donorRouter from "./Routes/donor.routes.js";
import pickupRouter from "./Routes/pickup.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

const allowedOrigins = [
  "https://community-fridge-z7xx.vercel.app", // ✅ your frontend domain
  "http://localhost:3000", // optional for local testing
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/donor", donorRouter);
app.use("/api/pickups", pickupRouter);

mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => {
    console.log("Connected to Database!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Database Connection failed!");
  });

export default serverless(app);
