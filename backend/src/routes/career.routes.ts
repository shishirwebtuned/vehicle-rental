import express from "express";
import { adminOnly, protect } from "../middleware/auth.middleware.js";
import {
  applyToCareer,
  createCareer,
  deleteCareer,
  getAllCareers,
  getCareerById,
  updateCareer,
  upload,
} from "../controllers/career.controller.js";

const router = express.Router();

router.get("/", getAllCareers);
router.get("/:id", getCareerById);
router.post("/apply", upload.single("resume"), applyToCareer);

router.post("/", protect, adminOnly, createCareer);
router.put("/:id", protect, adminOnly, updateCareer);
router.delete("/:id", protect, adminOnly, deleteCareer);

export default router;
