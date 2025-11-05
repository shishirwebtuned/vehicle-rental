import express from "express";
import { adminOnly, protect } from "../middleware/auth.middleware.js";
import {
  createBlog,
  deleteBlog,
  getBlogById,
  getBlogBySlug,
  getBlogs,
  updateBlog,
  upload,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/", upload.single("image"), createBlog, adminOnly, protect);
router.get("/", getBlogs);
router.get("/id/:id", getBlogById);
router.get("/slug/:slug", getBlogBySlug);
router.put("/:id", upload.single("image"), updateBlog, adminOnly, protect);
router.delete("/:id", deleteBlog, adminOnly, protect);

export default router;
