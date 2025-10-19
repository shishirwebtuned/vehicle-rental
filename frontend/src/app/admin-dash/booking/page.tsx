"use client";
import MasterDialog from '@/components/shared/MasterDialog';
import { Column, MasterTable } from '@/components/shared/MasterTable'
import { useGetBookingsQuery } from '@/redux/api/rest/query/queryApi';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ViewBooking from './Components/ViewBooking';
import { useUpdateBookingMutation } from '@/redux/api/rest/mutation/otherApi';
import DotSpinner from '@/components/shared/Spinner/DotSpinner';
import StatusBadge from './Components/StatusBadge';


const page = () => {

    const [viewBooking, setViewBooking] = useState<boolean>(false);
    const [editBooking, setEditBooking] = useState<boolean>(false);
    const [selectedBooking, setSelectedBooking] = useState<any>(null);
    const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);
    const [status, setStatus] = useState("pending");


    const { data: bookings, isLoading, isError } = useGetBookingsQuery();

    const [updateBooking, { isLoading: isUpdateLoading }] = useUpdateBookingMutation();

    console.log("bookings", bookings);
    const bookingsData = bookings?.data?.bookings || [];

    useEffect(() => {
        if (selectedBooking) setStatus(selectedBooking.status);
    }, [selectedBooking]);

    const columns: Column<{ id: string, name: string, description: string }>[] = [{ key: "id", label: "id" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "vehicle", label: "Vehicle" },
    { key: "pickupLocation", label: "Pick Up Location" },
    { key: "dropoffLocation", label: "Drop-off Location" },
    { key: "status", label: "Status" },


    ]

    const rows = bookingsData?.map((b: any, index: number) => ({
        id: index + 1,
        _id: b?._id ?? "N/A",
        name: b?.name ?? "N/A",
        email: b?.email ?? "N/A",
        phone: b?.phone ?? "N/A",
        vehicle: b?.vehicle?.name ?? "N/A",
        pickupLocation: b?.pickupLocation ?? "N/A",
        dropoffLocation: b?.dropoffLocation ?? "N/A",
        status: <StatusBadge status={b?.status ?? "N/A"} />


    })) || [];


    const handleUpdateStatus = async () => {
        if (!selectedBooking?._id) return;

        try {
            await updateBooking({ id: selectedBooking._id, status }).unwrap();
            toast.success(`Booking status updated to '${status}'`);
            setEditBooking(false);
            setSelectedBooking(null);
        } catch (error) {
            console.error("Failed to update status:", error);
            toast.error("Failed to update booking status");
        }
    };

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-row items-center justify-between'>
                <h2 className='font-nunito lg:text-xl md:text-lg text-base font-semibold'>
                    Bookings List
                </h2>
            </div>
            <MasterTable
                columns={columns}
                rows={rows}
                onView={(row) => {
                    setViewBooking(true);
                    setSelectedBookingId(row._id);

                }}
                onEdit={(row) => {
                    setEditBooking(true);
                    setSelectedBooking(row);
                }}

            />

            <MasterDialog
                open={viewBooking}
                onClose={() => {
                    setViewBooking(false);
                    setSelectedBookingId(null);
                }}
                title="Booking Details"
                description="View the Booking details"
            >
                <ViewBooking bookingId={selectedBookingId} />
            </MasterDialog>

            <MasterDialog
                open={editBooking}
                onClose={() => {
                    setEditBooking(false);
                    setSelectedBooking(null);
                }}
                title="Edit booking status"
            >
                <div className="flex flex-col gap-4 p-4">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Select Status
                    </label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                    >
                        <option value="">Select status</option>

                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="completed">Completed</option>
                    </select>

                    {/* <button
                        onClick={handleUpdateStatus}
                        disabled={isUpdateLoading}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isUpdateLoading ? "Updating..." : "Update Status"}
                    </button> */}

                    <div className="flex justify-center items-center gap-4 mt-8 md:mt-10">
                        <button
                            type="button"
                            onClick={() => setEditBooking(false)}
                            className="w-auto px-8 py-[10px] flex cursor-pointer items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-md font-marcellus md:text-base text-base sm:text-base lg:text-[17px]"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleUpdateStatus}
                            className="w-auto flex items-center justify-center px-8 py-[10px] gap-4 bg-primary hover:bg-[#48aee0] cursor-pointer text-white md:text-base text-base sm:text-base lg:text-[17px] font-marcellus rounded-md transition-all ease-in-out duration-300"
                            disabled={isUpdateLoading}
                        >
                            {isUpdateLoading ?
                                <DotSpinner customClassName="w-10" /> : "Update Status"}
                        </button>
                    </div>

                </div>
            </MasterDialog>

        </div>
    )
}

export default page
