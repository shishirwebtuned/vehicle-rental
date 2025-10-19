import multer from "multer";
import { Category } from "../models/category.model.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import cloudinary from "../utils/cloudinary.js";
import { sendResponse } from "../utils/sendResponse.js";
import streamifier from "streamifier";

const storage = multer.memoryStorage();
export const upload = multer({ storage });

export const createCategory = catchAsync(async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description || !req.file)
    throw new AppError("All fields are required", 400);

  const existing = await Category.findOne({ name });
  if (existing) throw new AppError("Category already exists", 409);

  const uploadToCloudinary = (fileBuffer: Buffer): Promise<any> => {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "category" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      streamifier.createReadStream(fileBuffer).pipe(uploadStream);
    });
  };

  const result = await uploadToCloudinary(req.file.buffer);

  const category = new Category({
    name,
    description,
    image: {
      url: result?.secure_url,
      public_id: result?.public_id,
    },
  });
  await category.save();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Category created successfully",
    data: {
      category: {
        id: category._id,
        name: category.name,
        description: category.description,
        image: category.image,
      },
    },
  });
});

export const getCategories = catchAsync(async (req, res) => {
  const categories =
    (await Category.find().sort({ createdAt: -1 }).lean()) || [];
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: categories.length
      ? "Categories Fetched Successfully"
      : "No categories found",
    data: {
      categories,
    },
  });
});

export const getCategoryById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findById(id).lean();
  if (!category) throw new AppError("Category not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Category fetched successfully",
    data: {
      category,
    },
  });
});

export const updateCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  // const { name, description } = req.body;

  const category = await Category.findById(id);
  if (!category) throw new AppError("Category not found", 404);

  if (req.file) {
    if (category.image?.public_id) {
      await cloudinary.uploader.destroy(category.image.public_id);
    }

    const streamUpload = (buffer: Buffer) =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "category" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(buffer).pipe(stream);
      });
    const result: any = await streamUpload(req.file.buffer);

    category.image = {
      url: result.secure_url,
      public_id: result.public_id,
    };
  }
  Object.assign(category, req.body);
  await category.save();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Category updated successfully",
    data: {
      category,
    },
  });
});

export const deleteCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const category = await Category.findById(id);

  if (!category) throw new AppError("Category not found", 404);

  if (category.image?.public_id) {
    await cloudinary.uploader.destroy(category.image.public_id);
  }

  await Category.findByIdAndDelete(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Category deleted successfully",
  });
});
