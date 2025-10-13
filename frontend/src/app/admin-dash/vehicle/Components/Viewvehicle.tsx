"use client";

import { useGetVehicleByIdQuery } from "@/redux/api/rest/query/queryApi";
import React from "react";

interface ViewVehicleProps {
    vehicleId: string | null;
}

const Viewvehicle: React.FC<ViewVehicleProps> = ({ vehicleId }) => {
    const { data, isLoading, isError } = useGetVehicleByIdQuery({ vehicleId: vehicleId! }, {
        skip: !vehicleId,
    });

    const vehicle = data?.data?.vehicle;

    if (!vehicleId) return <p>No vehicle selected</p>;
    if (isLoading) return <p>Loading vehicle details...</p>;
    if (isError) return <p>Failed to load vehicle details.</p>;

    return (
        <div className="bg-white dark:bg-gray-800">

            <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-200 text-sm md:text-base">
                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Name:</span>
                    <span className="text-gray-600 dark:text-gray-300">{vehicle.name}</span>
                </p>
                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Brand:</span>
                    <span className="text-gray-600 dark:text-gray-300">{vehicle.brand}</span>
                </p>
                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Model:</span>
                    <span className="text-gray-600 dark:text-gray-300">{vehicle.vehicleModel}</span>
                </p>
                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Category:</span>
                    <span className="text-gray-600 dark:text-gray-300">{vehicle.category?.name}</span>
                </p>
                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Number Plate:</span>
                    <span className="text-gray-600 dark:text-gray-300">{vehicle.numberPlate}</span>
                </p>
                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Seats:</span>
                    <span className="text-gray-600 dark:text-gray-300">{vehicle.seats}</span>
                </p>
                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Fuel Type:</span>
                    <span className="text-gray-600 dark:text-gray-300">{vehicle.fuelType}</span>
                </p>
                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Price per Day:</span>
                    <span className="text-gray-600 dark:text-gray-300">NPR {vehicle.pricePerDay}</span>
                </p>

                <p className="flex flex-col bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Description:</span>
                    <span className="text-gray-600 dark:text-gray-300 mt-1">{vehicle.description}</span>
                </p>
            </div>


            {vehicle.image?.url && (
                <div className="mt-5 flex flex-col w-full justify-center">
                    <span className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Image:</span>
                    <img
                        src={vehicle.image.url}
                        alt={vehicle.name}
                        className="rounded-lg object-cover max-h-64 w-full md:w-auto shadow-md border border-gray-200 dark:border-gray-700"
                    />
                </div>
            )}
        </div>

    );
};

export default Viewvehicle;
