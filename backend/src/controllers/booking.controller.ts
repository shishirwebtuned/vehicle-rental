import mongoose from "mongoose";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { Booking } from "../models/booking.model.js";
import { sendResponse } from "../utils/sendResponse.js";
import { Vehicle } from "../models/vehicle.model.js";
import { notifyBookingEmails } from "../utils/notifyBooking.js";

export const createBooking = catchAsync(async (req, res) => {
  const {
    vehicle,
    name,
    email,
    phone,
    message,
    pickupLocation,
    pickupDate,
    pickupTime,
    dropoffLocation,
    dropoffDate,
    dropoffTime,
  } = req.body;

  if (
    !vehicle ||
    !name ||
    !email ||
    !phone ||
    !pickupLocation ||
    !pickupDate ||
    !pickupTime ||
    !dropoffLocation ||
    !dropoffDate ||
    !dropoffTime
  )
    throw new AppError("All fields are required", 400);

  if (!mongoose.Types.ObjectId.isValid(vehicle))
    throw new AppError("Invalid category ID", 400);

  const booking = new Booking({
    vehicle,
    name,
    email,
    phone,
    message,
    pickupLocation,
    pickupDate,
    pickupTime,
    dropoffLocation,
    dropoffDate,
    dropoffTime,
    status: "pending",
  });

  await booking.save();
  const populatedBooking = await booking.populate(
    "vehicle",
    "name brand vehicleModel numberPlate"
  );

  notifyBookingEmails(populatedBooking);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Booking enquiry sent successfully",
    data: {
      booking: populatedBooking,
    },
  });
});

export const getBookings = catchAsync(async (req, res) => {
  const bookings =
    (await Booking.find()
      .sort({ createdAt: -1 })
      .populate("vehicle", "name brand vehicleModel numberPlate")
      .lean()) || [];

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: bookings.length
      ? "Bookings fetched Successfully"
      : "No Booking data found",
    data: {
      bookings,
    },
  });
});

export const getBookingById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const booking = await Booking.findById(id)
    .populate("vehicle", "name brand vehicleModel numberPlate")
    .lean();

  if (!booking) throw new AppError("Booking data not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Booking Data fetched successfully",
    data: {
      booking,
    },
  });
});

export const updateBooking = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) throw new AppError("Status is required", 400);

  const booking = await Booking.findById(id);
  if (!booking) throw new AppError("Booking not found", 404);

  booking.status = status;
  await booking.save();

  if (status === "confirmed") {
    await Vehicle.findByIdAndUpdate(booking.vehicle, {
      availabilityStatus: false,
    });
  } else {
    await Vehicle.findByIdAndUpdate(booking.vehicle, {
      availabilityStatus: true,
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: `Booking status updated to '${status}' successfully`,
    data: { booking },
  });
});
