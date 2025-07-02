import express from "express";
import {
    forgotPassword,
    getUser,
    getUserForPortfolio,
    login,
    logout,
    register,
    resetPassword,
    updatePassword,
    updateProfile,
} from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);

// Test endpoint for debugging
router.get("/test", (req, res) => {
  res.json({ 
    message: "User routes working", 
    env: process.env.NODE_ENV,
    corsOrigins: [
      process.env.PORTFOLIO_URL,
      process.env.DASHBOARD_URL,
      process.env.PORTFOLIO_URL_PROD,
      process.env.DASHBOARD_URL_PROD,
    ].filter(Boolean)
  });
});
router.get("/me", isAuthenticated, getUser);
router.put("/me/profile/update", isAuthenticated, updateProfile);
router.get("/portfolio/me", getUserForPortfolio);
router.put("/update/password", isAuthenticated, updatePassword);
router.post("/forgot/password", forgotPassword);
router.put("/password/reset/:token", resetPassword);

export default router;
