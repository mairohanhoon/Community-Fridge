import UserModel from "../Models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signUpController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User is already exists, you can login",
        success: false,
      });
    }
    if (!(role === "ngo" || role === "donor")) {
      return res.status(401).json({
        message: "Select the desired role only",
        success: false,
      });
    }
    const newUser = await UserModel({ name, email, password, role });
    newUser.password = await bcrypt.hash(password, 10);
    const result = await newUser.save();
    return res
      .status(201)
      .json({ message: "Signup successfully", success: true, result });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Signup Internal Server Error", success: false });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(409).json({
        message: "Email doesnt match login failed",
        success: false,
      });
    }
    const isPasswordEqual = await bcrypt.compare(password, user.password);
    if (!isPasswordEqual) {
      return res.status(409).json({
        message: "Password doesnt match login failed",
        success: false,
      });
    }
    const jwtToken = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );
    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
    });
    return res.status(200).json({
      message: "Login successfully",
      success: true,
      jwtToken,
      email,
      name: user.name,
      role: user.role,
      _id: user._id,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

const isLoggedInController = async (req, res) => {
  try {
    const jwtT = req.cookies?.token;
    if (!jwtT) {
      return res
        .status(402)
        .json({ message: "TOKEN NOT AVAILABLE", success: false });
    }
    const decoded = jwt.verify(jwtT, process.env.JWT_SECRET);
    return res.status(200).json({
      message: "Token fetched successfully",
      success: true,
      decoded,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

const logOutController = async (req, res) => {
  try {
    res.clearCookie("token");
    res
      .status(200)
      .json({ message: "Logged Out Clear Cookies", success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

export {
  signUpController,
  loginController,
  isLoggedInController,
  logOutController,
};
