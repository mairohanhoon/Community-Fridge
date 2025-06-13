import express from "express";
import requireAuth from "../Middlewares/requireAuth.middleware.js";
import { registerFood } from "../Controllers/donor.controller.js";

const donorRouter = express.Router();

donorRouter.post("/register", requireAuth(["donor"]), registerFood);

export default donorRouter;
