export const customerBookingEnquiryEmail = (booking: any) => {
  return `
    <h1>We have received your booking enquiry, ${booking.name}!</h1>

    <p>Our team will review your request and get back to you shortly.</p>

    <h3>Vehicle Details:</h3>
    <ul>
      <li>Name: ${booking.vehicle.name}</li>
      <li>Brand: ${booking.vehicle.brand}</li>
      <li>Model: ${booking.vehicle.vehicleModel}</li>
      <li>Number Plate: ${booking.vehicle.numberPlate}</li>
    </ul>

    <h3>Pickup Details:</h3>
    <p>
      Location: ${booking.pickupLocation}<br />
      Date: ${new Date(booking.pickupDate).toLocaleDateString()}<br />
      Time: ${booking.pickupTime}
    </p>

    <h3>Dropoff Details:</h3>
    <p>
      Location: ${booking.dropoffLocation}<br />
      Date: ${new Date(booking.dropoffDate).toLocaleDateString()}<br />
      Time: ${booking.dropoffTime}
    </p>

    <h3>Your Message:</h3>
    <p>${booking.message}</p>

    <p>Thank you for reaching out to us!</p>
  `;
};

export const adminBookingEnquiryEmail = (booking: any) => {
  return `
    <h1>New Booking Enquiry Received!</h1>
    <p>Customer: ${booking.name}</p>
    <p>Email: ${booking.email}</p>
    <p>Phone: ${booking.phone}</p>

    <h3>Vehicle Details:</h3>
    <ul>
      <li>Name: ${booking.vehicle.name}</li>
      <li>Brand: ${booking.vehicle.brand}</li>
      <li>Model: ${booking.vehicle.vehicleModel}</li>
      <li>Number Plate: ${booking.vehicle.numberPlate}</li>
    </ul>

    <h3>Pickup Details:</h3>
    <p>
      Location: ${booking.pickupLocation}<br />
      Date: ${new Date(booking.pickupDate).toLocaleDateString()}<br />
      Time: ${booking.pickupTime}
    </p>

    <h3>Dropoff Details:</h3>
    <p>
      Location: ${booking.dropoffLocation}<br />
      Date: ${new Date(booking.dropoffDate).toLocaleDateString()}<br />
      Time: ${booking.dropoffTime}
    </p>

    <h3>Customer Message:</h3>
    <p>${booking.message}</p>

    <p>Please contact the customer to confirm the booking.</p>
  `;
};
