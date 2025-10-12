import { Category } from "../models/category.model.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { sendResponse } from "../utils/sendResponse.js";

export const createCategory = catchAsync(async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) throw new AppError("All fields are required", 400);

  const existing = await Category.findOne({ name });
  if (existing) throw new AppError("Category already exists", 409);

  const category = new Category({
    name,
    description,
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
      category: {
        id: category._id,
        name: category.name,
        description: category.description,
      },
    },
  });
});

export const updateCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const updated = await Category.findByIdAndUpdate(
    id,
    {
      name,
      description,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updated) throw new AppError("Category not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Category updated successfully",
    data: {
      category: {
        id: updated._id,
        name: updated.name,
        description: updated.description,
      },
    },
  });
});

export const deleteCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const deleted = await Category.findByIdAndDelete(id);

  if (!deleted) throw new AppError("Category not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Category deleted successfully",
  });
});
