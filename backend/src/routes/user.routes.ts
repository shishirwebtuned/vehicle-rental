import express from "express";
import { adminOnly, protect } from "../middleware/auth.middleware.js";
import {
  createAdmin,
  getUserById,
  getUsers,
  loginUser,
  registerUser,
  verifyOtp,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/verifyOtp", verifyOtp);
router.post("/create-admin", protect, adminOnly, createAdmin);
router.get("/user-list", protect, adminOnly, getUsers);
router.get("/:id", getUserById);

export default router;
