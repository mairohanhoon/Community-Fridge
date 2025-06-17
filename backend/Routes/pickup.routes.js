import express from "express";
import requireAuth from "../Middlewares/requireAuth.middleware.js";
import {
  getAllDonations,
  getNgoPickups,
  schedulePickup,
} from "../Controllers/pickup.controller.js";

const pickupRouter = express.Router();

pickupRouter.post("/", requireAuth(["ngo"]), schedulePickup);
pickupRouter.get("/my-pickups", requireAuth(["ngo"]), getNgoPickups);
pickupRouter.get("/allDonations", requireAuth(["ngo"]), getAllDonations);

export default pickupRouter;
