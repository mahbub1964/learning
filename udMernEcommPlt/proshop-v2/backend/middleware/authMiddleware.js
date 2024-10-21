import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwt; //Read the JWT from the cookie
  if(token) {
    try { const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch(error) { console.log("Token error:", error);
      res.status(401); throw new Error("Not authorized, token failed");
  } } else {
    res.status(401); throw new Error("Not authorized, no token");
  }
});

// Admin routes
const admin = (req, res, next) => {
  if(req.user && req.user.isAdmin) next(); else {
    res.status(401); throw new Error("Not authorized as admin");
  }
};

export { protect, admin };