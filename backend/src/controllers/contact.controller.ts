import dotenv from "dotenv";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { sendEmail } from "../utils/sendEmail.js";
import { sendResponse } from "../utils/sendResponse.js";

dotenv.config();

export const createContact = catchAsync(async (req, res) => {
  const { name, email, phone, message } = req.body;

  // ✅ Validation
  if (!name || !email || !phone || !message) {
    throw new AppError("All fields are required", 400);
  }

  // ✅ Email details for admin
  const subject = "New Contact Form Submission";
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> +${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr/>
      <p>This message was sent from the Contact Us form on your website.</p>
    </div>
  `;

  // ✅ Send email to admin (the SMTP user or any configured admin email)
  await sendEmail({
    to: process.env.SMTP_USER as string,
    subject,
    html,
  });

  // ✅ Send response back to frontend
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message:
      "Your message has been sent successfully. We’ll get back to you soon!",
  });
});
