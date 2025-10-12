import express from "express";
import {
  addVehicle,
  deleteVehicle,
  getVehicleById,
  getVehicles,
  updateVehicle,
  upload,
} from "../controllers/vehicle.controller.js";
import { adminOnly, protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getVehicles);
router.get("/:id", getVehicleById);

router.post("/", upload.single("image"), addVehicle, protect, adminOnly);
router.put("/:id", upload.single("image"), updateVehicle, protect, adminOnly);
router.delete("/:id", deleteVehicle, protect, adminOnly);

export default router;
