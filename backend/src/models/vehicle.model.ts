import mongoose, { Schema } from "mongoose";
import type { IVehicle } from "../types/type.js";

const vehicleSchema = new Schema<IVehicle>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    numberPlate: { type: String, required: true },
    seats: { type: Number, required: true },
    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
      required: true,
    },
    // pricePerDay: { type: Number, required: true },
    availabilityStatus: { type: Boolean, default: true },
    image: {
      url: { type: String, required: true },
      public_id: { type: String, required: true },
    },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export type VehicleDocument = mongoose.InferSchemaType<typeof vehicleSchema>;
