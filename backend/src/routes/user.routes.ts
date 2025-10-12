import express from "express";
import { adminOnly, protect } from "../middleware/auth.middleware.js";
import {
  createAdmin,
  loginUser,
  registerUser,
  verifyOtp,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/verifyOtp", verifyOtp);
router.post("/create-admin", protect, adminOnly, createAdmin);

export default router;
