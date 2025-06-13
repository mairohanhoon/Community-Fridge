import express from "express";
import requireAuth from "../Middlewares/requireAuth.middleware.js";
import homePageController from "../Controllers/home.controller.js";

const homeRouter = express.Router();

homeRouter.get("/", requireAuth(), homePageController); // Add roles like requireAuth(['admin'])

export default homeRouter;