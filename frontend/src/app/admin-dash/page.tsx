"use client";

import {
    useGetAllCareersQuery,
    useGetAllCategoriesQuery,
    useGetAllVehiclesQuery,
    useGetBookingsQuery,
    useGetUserByIdQuery,
} from "@/redux/api/rest/query/queryApi";
import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from "chart.js";
import VehicleCategoryChart from "./Components/VehicleCategoryChart";
import DashboardBarChart from "./Components/DashboardBarChart";
import BookingsLineChart from "./Components/BookingsLineChart";
import BookingStatusChart from "./Components/BookingStatusChart";

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
);

const page = () => {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem("user");
        if (storedUserData) {
            const parsed = JSON.parse(storedUserData);
            setUserId(parsed.id);
        }
    }, []);

    const { data: user, isLoading, isError } = useGetUserByIdQuery(
        { id: userId! },
        { skip: !userId }
    );

    const { data: vehicles } = useGetAllVehiclesQuery();
    const { data: categories } = useGetAllCategoriesQuery();
    const { data: careers } = useGetAllCareersQuery();
    const { data: bookings } = useGetBookingsQuery();

    const vehiclesData = vehicles?.data?.vehicles || [];
    const careersData = careers?.data?.careers || [];
    const categoriesData = categories?.data?.categories || [];
    const bookingsData = bookings?.data?.bookings || [];

    const userData = user?.data?.user;
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching user data</p>;

    return (
        <div className="p-3 md:p-4 bg-gray-50 min-h-screen font-nunito">
            {/* Welcome Header */}
            <div className="mb-5 text-center">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                    Welcome to Admin Dashboard
                </h1>
                <p className="text-gray-600 mt-1 md:mt-2 md:text-sm text-xs lg:text-base">
                    Manage your vehicles, categories, and bookings efficiently.
                </p>
            </div>

            {/* User Info Card */}
            {/* <div className="w-full max-w-5xl p-6 border border-gray-200 rounded-md shadow-sm bg-white mb-6 mx-auto">
                <h2 className="text-xl font-semibold mb-3 text-center text-gray-800">
                    Your Profile
                </h2>
                <div className="flex flex-col gap-2 text-gray-700">
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-900">Name:</span>
                        <span>{userData?.name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-900">Email:</span>
                        <span>{userData?.email}</span>
                    </div>
                </div>
            </div> */}

            {/* Charts Grid */}
            <div className="w-full max-w-5xl grid-cols-1 grid md:grid-cols-2 gap-5 mx-auto">
                {/* Left Column */}
                <div className="flex flex-col gap-5">
                    <DashboardBarChart
                        vehiclesData={vehiclesData}
                        categoriesData={categoriesData}
                        careersData={careersData}
                        bookingsData={bookingsData}
                    />
                    <VehicleCategoryChart vehiclesData={vehiclesData} />

                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-5">
                    <BookingsLineChart bookingsData={bookingsData} />
                    <BookingStatusChart bookingsData={bookingsData} />

                </div>
            </div>
        </div>
    );
};

export default page;
