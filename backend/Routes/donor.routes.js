import express from "express"
import requireAuth from "../Middlewares/requireAuth.middleware";

const donorRouter = express.Router();

donorRouter.post('/register', requireAuth(['donor']), )