import jwt from "jsonwebtoken";
const homePageController = async (req, res) => {
  try {
    const token = req.cookies.token;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decodedToken);
    return res.status(200).json({
      message: "✅ Successfully reached Home Page",
      user: req.user,
      decodedToken,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "❌ Error in home page controller",
      success: false,
    });
  }
};




export default homePageController;
