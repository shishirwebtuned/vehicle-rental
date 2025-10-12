import type { Request, Response, NextFunction } from "express";
import { sendResponse } from "../utils/sendResponse.js";
import { AppError } from "../utils/AppError.js";

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = (err as AppError).statusCode || 500;
  const message = err.message || "Internal Server Error";

  sendResponse(res, {
    success: false,
    statusCode,
    message,
    error: process.env.NODE_ENV === "development" ? err : undefined,
  });
};
