import type { Document, Types } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  phoneNumber: string;
  address: string;
  status: "pending" | "verified";
  otp: string | null;
  otpExpiry: Date | null;
  bookings: Types.ObjectId[];
}

export interface ICategory extends Document {
  name: string;
  description: string;
}

export interface IVehicle extends Document {
  name: string;
  brand: string;
  vehicleModel: string;
  category: Types.ObjectId;
  numberPlate: string;
  seats: number;
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  pricePerDay: number;
  availabilityStatus: boolean;
  image: {
    url: string;
    public_id: string;
  };
  description: string;
}

export interface IBooking extends Document {
  user: Types.ObjectId;
  vehicle: Types.ObjectId;
  startDate: Date;
  endDate: Date;
  totalAmount: number;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
}
