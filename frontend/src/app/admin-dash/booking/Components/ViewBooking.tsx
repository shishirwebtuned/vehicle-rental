"use client";

import { useGetBookingByIdQuery } from "@/redux/api/rest/query/queryApi";
import React from "react";

interface ViewBookingProps {
    bookingId: string | null;
}

const ViewBooking: React.FC<ViewBookingProps> = ({ bookingId }) => {
    const { data, isLoading, isError } = useGetBookingByIdQuery(
        { id: bookingId! },
        { skip: !bookingId }
    );

    const booking = data?.data?.booking;

    if (!bookingId) return <p>No booking selected</p>;
    if (isLoading) return <p>Loading booking details...</p>;
    if (isError) return <p>Failed to load booking details.</p>;

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
            <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-200 text-xs md:text-sm lg:text-base">
                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Customer Name:</span>
                    <span className="text-gray-600 dark:text-gray-300">{booking.name}</span>
                </p>

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Email:</span>
                    <span className="text-gray-600 dark:text-gray-300">{booking.email}</span>
                </p>

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Phone:</span>
                    <span className="text-gray-600 dark:text-gray-300">{booking.phone}</span>
                </p>

                <p className="flex flex-col bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Message:</span>
                    <span className="text-gray-600 dark:text-gray-300 mt-1">{booking.message}</span>
                </p>

                <hr className="border-gray-300 dark:border-gray-600 my-2" />

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Vehicle:</span>
                    <span className="text-gray-600 dark:text-gray-300">{booking.vehicle?.name}</span>
                </p>

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Brand:</span>
                    <span className="text-gray-600 dark:text-gray-300">{booking.vehicle?.brand}</span>
                </p>

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Model:</span>
                    <span className="text-gray-600 dark:text-gray-300">{booking.vehicle?.vehicleModel}</span>
                </p>

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Number Plate:</span>
                    <span className="text-gray-600 dark:text-gray-300">{booking.vehicle?.numberPlate}</span>
                </p>

                <hr className="border-gray-300 dark:border-gray-600 my-2" />

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Pickup Location:</span>
                    <span className="text-gray-600 dark:text-gray-300">{booking.pickupLocation}</span>
                </p>

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Pickup Date and Time:</span>
                    <span className="text-gray-600 dark:text-gray-300">
                        {new Date(booking.pickupDate).toLocaleDateString()} at {booking.pickupTime}
                    </span>
                </p>

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Dropoff Location:</span>
                    <span className="text-gray-600 dark:text-gray-300">{booking.dropoffLocation}</span>
                </p>

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Dropoff Date and Time:</span>
                    <span className="text-gray-600 dark:text-gray-300">
                        {new Date(booking.dropoffDate).toLocaleDateString()} at {booking.dropoffTime}
                    </span>
                </p>

                <hr className="border-gray-300 dark:border-gray-600 my-2" />

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Status:</span>
                    <span className="text-gray-600 dark:text-gray-300 capitalize">{booking.status}</span>
                </p>


            </div>
        </div>
    );
};

export default ViewBooking;
