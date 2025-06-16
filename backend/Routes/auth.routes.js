import express from "express";
import {
  signUpValidation,
  loginValidation,
} from "../Middlewares/auth.middleware.js";
import {
  isLoggedInController,
  loginController,
  logOutController,
  signUpController,
} from "../Controllers/auth.controller.js";
const authRouter = express.Router();

authRouter.post("/signup", signUpValidation, signUpController);
authRouter.post("/login", loginValidation, loginController);
authRouter.get("/userLoggedIn", isLoggedInController);
authRouter.post("/logout", logOutController);

export default authRouter;
