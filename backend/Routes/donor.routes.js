import express from "express";
import requireAuth from "../Middlewares/requireAuth.middleware.js";
import {
  donatedFood,
  donatedFoodList,
  registerFood,
} from "../Controllers/donor.controller.js";

const donorRouter = express.Router();

donorRouter.post("/register", requireAuth(["donor"]), registerFood);
donorRouter.get("/donations", requireAuth(["donor"]), donatedFoodList);
donorRouter.post("/get-donation", donatedFood);

export default donorRouter;
