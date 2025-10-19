import express from "express";
import {
  createBooking,
  getBookingById,
  getBookings,
  updateBooking,
} from "../controllers/booking.controller.js";
import { adminOnly, protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookings, adminOnly, protect);
router.get("/:id", getBookingById, adminOnly, protect);
router.patch("/:id", updateBooking, adminOnly, protect);

export default router;
