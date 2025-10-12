import type { Request, Response } from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import { sendResponse } from "../utils/sendResponse.js";
import { catchAsync } from "../utils/catchAsync.js";
import { AppError } from "../utils/AppError.js";

export const loginUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new AppError("Invalid email", 401);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new AppError("Incorrect password", 401);

  // if (user.role !== "admin") throw new AppError("Access denied !", 403);

  const token = generateToken((user._id as string).toString(), user.role);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Login successful",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
      },
      token,
    },
  });
});

export const registerUser = catchAsync(async (req, res) => {
  const { name, email, password, phoneNumber, address } = req.body;

  if (!name || !email || !password || !phoneNumber || !address)
    throw new AppError("All fields are required", 400);

  const existingUser = await User.findOne({ email });
  if (existingUser)
    throw new AppError("User with this email already exists", 401);

  const user = new User({
    name,
    email,
    password,
    role: "customer",
    phoneNumber,
    address,
  });
  await user.save();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Signup Successful",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phoneNumber: user.phoneNumber,
        address: user.address,
        status: user.status,
      },
    },
  });
});

export const createAdmin = catchAsync(async (req, res) => {
  const { name, email, password, phoneNumber, address } = req.body;

  if (!name || !email || !password || !phoneNumber || !address)
    throw new AppError("All fields are required", 400);

  const existingUser = await User.findOne({ email });
  if (existingUser)
    throw new AppError("User with this email already exists", 401);

  const user = new User({
    name,
    email,
    password,
    role: "admin",
    phoneNumber,
    address,
  });
  await user.save();

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Admin Created Successful",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    },
  });
});
