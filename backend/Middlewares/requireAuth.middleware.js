// Middlewares/requireAuth.middleware.js
import jwt from "jsonwebtoken";

const requireAuth = (allowedRoles = []) => {
  return (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token", success: false });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = {
        id: decoded.id,
        role: decoded.role,
      };

      if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
        return res
          .status(403)
          .json({ message: "Forbidden: Access denied", success: false });
      }

      console.log("✅ REQUIRE AUTH COMPLETED");
      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid token", success: false });
    }
  };
};

export default requireAuth;
