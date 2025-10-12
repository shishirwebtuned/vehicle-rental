import mongoose from "mongoose";
import { Vehicle } from "../models/vehicle.model.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { sendResponse } from "../utils/sendResponse.js";
import multer from "multer";
import cloudinary from "../utils/cloudinary.js";
import streamifier from "streamifier";
import { buffer } from "stream/consumers";
import { resolve } from "path";
import { rejects } from "assert";

const storage = multer.memoryStorage();
export const upload = multer({ storage });

export const addVehicle = catchAsync(async (req, res) => {
  const {
    name,
    brand,
    vehicleModel,
    category,
    numberPlate,
    seats,
    fuelType,
    pricePerDay,
    description,
  } = req.body;

  if (
    !name ||
    !brand ||
    !vehicleModel ||
    !numberPlate ||
    !category ||
    !seats ||
    !fuelType ||
    !pricePerDay ||
    !req.file ||
    !description
  )
    throw new AppError("All fields are required", 400);

  if (!mongoose.Types.ObjectId.isValid(category))
    throw new AppError("Invalid category ID", 400);

  const existing = await Vehicle.findOne({ numberPlate });
  if (existing)
    throw new AppError("Vehicle with this number plate already exists", 409);

  const uploadToCloudinary = (fileBuffer: Buffer): Promise<any> => {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "vehicles" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      streamifier.createReadStream(fileBuffer).pipe(uploadStream);
    });
  };

  const result = await uploadToCloudinary(req.file.buffer);

  const vehicle = new Vehicle({
    name,
    brand,
    vehicleModel,
    numberPlate,
    category,
    seats,
    fuelType,
    description,
    pricePerDay,
    image: {
      url: result?.secure_url,
      public_id: result?.public_id,
    },
  });
  await vehicle.save();

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Vehicle added successfully",
    data: {
      vehicle: {
        id: vehicle._id,
        name: vehicle.name,
        brand: vehicle.brand,
        vehicleModel: vehicle.vehicleModel,
        numberPlate: vehicle.numberPlate,
        category: vehicle.category,
        seats: vehicle.seats,
        fuelType: vehicle.fuelType,
        pricePerDay: vehicle.pricePerDay,
        image: vehicle.image,
        description: vehicle.description,
      },
    },
  });
});

export const getVehicles = catchAsync(async (req, res) => {
  const vehicles = (await Vehicle.find().sort({ createdAt: -1 }).lean()) || [];
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: vehicles.length
      ? "Vehicles Fetched Successfully"
      : "No Vehicles found",
    data: {
      vehicles,
    },
  });
});

export const getVehicleById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const vehicle = await Vehicle.findById(id).lean();
  if (!vehicle) throw new AppError("Vehicle not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Vehicle fetched successfully",
    data: {
      vehicle,
    },
  });
});

export const updateVehicle = catchAsync(async (req, res) => {
  const { id } = req.params;

  const vehicle = await Vehicle.findById(id);
  if (!vehicle) throw new AppError("Vehicle not found", 404);

  if (req.file) {
    if (vehicle.image?.public_id) {
      await cloudinary.uploader.destroy(vehicle.image.public_id);
    }

    const streamUpload = (buffer: Buffer) =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "vehicles" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(buffer).pipe(stream);
      });
    const result: any = await streamUpload(req.file.buffer);

    vehicle.image = {
      url: result.secure_url,
      public_id: result.public_id,
    };
  }
  Object.assign(vehicle, req.body);
  await vehicle.save();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Vehicle updated successfully",
    data: { vehicle },
  });
});

export const deleteVehicle = catchAsync(async (req, res) => {
  const { id } = req.params;

  const vehicle = await Vehicle.findById(id);
  if (!vehicle) throw new AppError("Vehicle not found", 404);

  if (vehicle.image?.public_id) {
    await cloudinary.uploader.destroy(vehicle.image.public_id);
  }

  await Vehicle.findByIdAndDelete(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Vehicle deleted successfully",
  });
});
