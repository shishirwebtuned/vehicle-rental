import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/category.controller.js";
import { adminOnly, protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategoryById);

router.post("/", createCategory, protect, adminOnly);
router.put("/:id", updateCategory, protect, adminOnly);
router.delete("/:id", deleteCategory, protect, adminOnly);

export default router;
