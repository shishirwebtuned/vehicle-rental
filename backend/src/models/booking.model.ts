import mongoose, { Schema } from "mongoose";
import type { IBooking } from "../types/type.js";

const bookingSchema = new Schema<IBooking>(
  {
    vehicle: { type: Schema.Types.ObjectId, ref: "Vehicle", required: true },

    // Customer info
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String },

    pickupLocation: { type: String, required: true },
    pickupDate: { type: Date, required: true },
    pickupTime: { type: String, required: true },

    dropoffLocation: { type: String, required: true },
    dropoffDate: { type: Date, required: true },
    dropoffTime: { type: String, required: true },

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    // paymentStatus: {
    //   type: String,
    //   enum: ["pending", "paid", "failed", "refunded"],
    //   default: "pending",
    // },
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
export type BookingDocument = mongoose.InferSchemaType<typeof bookingSchema>;
