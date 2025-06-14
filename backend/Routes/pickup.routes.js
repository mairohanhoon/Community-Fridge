import express from "express";
import requireAuth from "../Middlewares/requireAuth.middleware.js" ;
import { getNgoPickups, schedulePickup } from "../Controllers/pickup.controller.js";

const pickupRouter = express.Router();

pickupRouter.post("/", requireAuth(["ngo"]), schedulePickup)
pickupRouter.get("/my-pickups", requireAuth(["ngo"]), getNgoPickups)

export default pickupRouter;
