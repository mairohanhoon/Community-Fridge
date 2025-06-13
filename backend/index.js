import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// Routes
import authRouter from "./Routes/auth.routes.js";
import homeRouter from "./Routes/home.routes.js";
import donorRouter from "./Routes/donor.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(cors());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/home", homeRouter);
app.use("/api/donor", donorRouter);

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
