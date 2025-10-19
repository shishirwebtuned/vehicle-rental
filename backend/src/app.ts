import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import userRoutes from "./routes/user.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import vehicleRoutes from "./routes/vehicle.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import contactRoutes from "./routes/contact.routes.js";
// import paymentRoutes from "./routes/payment.routes";
// import orderRoutes from "./routes/order.routes";
// import shippingRoutes from "./routes/shipping.routes";
// import contactRoutes from "./routes/contact.routes";

import { errorHandler } from "./middleware/error.middleware.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Routes
const baseApi = "/api/v1/en";

app.use(`${baseApi}/users`, userRoutes);
app.use(`${baseApi}/categories`, categoryRoutes);
app.use(`${baseApi}/vehicles`, vehicleRoutes);
app.use(`${baseApi}/booking`, bookingRoutes);
app.use(`${baseApi}/contact`, contactRoutes);

// app.use(`${baseApi}/payments`, paymentRoutes);
// app.use(`${baseApi}/order`, orderRoutes);
// app.use(`${baseApi}/shipping`, shippingRoutes);
// app.use(`${baseApi}/contact`, contactRoutes);

// Error handler
app.use(errorHandler);

export default app;
