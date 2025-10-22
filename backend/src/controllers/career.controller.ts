import dotenv from "dotenv";
import multer from "multer";
import { catchAsync } from "../utils/catchAsync.js";
import { AppError } from "../utils/AppError.js";
import { sendResponse } from "../utils/sendResponse.js";
import { sendEmail } from "../utils/sendEmail.js";
import { Career } from "../models/career.model.js";

dotenv.config();

const storage = multer.memoryStorage();
export const upload = multer({ storage });

export const applyToCareer = catchAsync(async (req, res) => {
  const { name, email, phone, message, appliedPosition } = req.body;

  if (!name || !email || !phone || !appliedPosition || !req.file) {
    throw new AppError("All fields are required", 400);
  }

  const subject = `New Job Application - ${appliedPosition}`;
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2>New Job Application Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Applied Position:</strong> ${appliedPosition}</p>

    ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}

      <hr/>
      <p>This application was submitted through your website's Career Form.</p>
    </div>
  `;

  sendEmail({
    to: process.env.SMTP_USER as string,
    subject,
    html,
    attachments: [
      {
        filename: req.file.originalname,
        content: req.file.buffer,
        contentType: req.file.mimetype,
      },
    ],
  } as any);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Your job application has been sent successfully!",
  });
});

export const createCareer = catchAsync(async (req, res) => {
  const { jobName, jobField, description, requirements, location, type } =
    req.body;

  if (
    !jobName ||
    !jobField ||
    !description ||
    !requirements ||
    !location ||
    !type
  ) {
    throw new AppError("All fields are required", 400);
  }

  const career = await Career.create({
    jobName,
    jobField,
    description,
    requirements: Array.isArray(requirements)
      ? requirements
      : requirements.split(",").map((r: any) => r.trim()),
    location,
    type,
  });

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Career created successfully",
    data: { career },
  });
});

export const getAllCareers = catchAsync(async (req, res) => {
  const careers = await Career.find().sort({ createdAt: -1 });

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Careers fetched successfully",
    data: { careers },
  });
});

export const getCareerById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const career = await Career.findById(id);
  if (!career) throw new AppError("Career not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Career fetched successfully",
    data: { career },
  });
});

export const updateCareer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { jobName, jobField, description, requirements, location, type } =
    req.body;

  const career = await Career.findByIdAndUpdate(
    id,
    {
      jobName,
      jobField,
      description,
      requirements: Array.isArray(requirements)
        ? requirements
        : requirements.split(",").map((r: any) => r.trim()),
      location,
      type,
    },
    { new: true }
  );

  if (!career) throw new AppError("Career not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Career updated successfully",
    data: { career },
  });
});

export const deleteCareer = catchAsync(async (req, res) => {
  const { id } = req.params;

  const career = await Career.findByIdAndDelete(id);
  if (!career) throw new AppError("Career not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Career deleted successfully",
  });
});
