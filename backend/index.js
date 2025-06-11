import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import authRouter from "./Routes/auth.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(cors());
app.use(cookieParser())
app.use("/api/auth", authRouter);

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
