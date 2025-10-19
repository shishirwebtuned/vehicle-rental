import dotenv from "dotenv";
import { sendEmail } from "./sendEmail.js";
import {
  adminBookingEnquiryEmail,
  customerBookingEnquiryEmail,
} from "./emailTemplate.js";

dotenv.config();

export const notifyBookingEmails = async (booking: any) => {
  try {
    // Send to customer
    await sendEmail({
      to: booking.email,
      subject: `Booking Enquiry Received`,
      html: customerBookingEnquiryEmail(booking),
    });

    // Send to admin
    await sendEmail({
      to: process.env.SMTP_USER as string,
      subject: `New Booking Enquiry Received`,
      html: adminBookingEnquiryEmail(booking),
    });

    console.log("Both emails sent successfully.");
  } catch (error) {
    console.error("Error sending order emails:", error);
  }
};
