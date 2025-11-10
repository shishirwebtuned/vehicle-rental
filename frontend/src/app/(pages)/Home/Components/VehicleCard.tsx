"use client";

import { VehicleCardProps } from '@/types/type';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { FaCar, FaUsers } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import { SiGoogleearthengine } from "react-icons/si";
import Image from 'next/image';


const VehicleCard: React.FC<VehicleCardProps> = ({
    vehicle }) => {
    const router = useRouter();

    const vehicleSlug = `${vehicle.brand}-${vehicle.name}-${vehicle.vehicleModel}`
        .replace(/\s+/g, '-')
        .toLowerCase();

    const handleBookClick = () => {
        router.push(`/our-cars/${vehicleSlug}-${vehicle._id}`);
    };

    return (
        <div className="bg-[#E1E49E] rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className={`flex justify-center items-center w-full overflow-hidden md:h-52 h-40 sm:h-44 lg:h-60 ${vehicle?.image?.url.toLowerCase().endsWith('.png') ? "p-4" : "p-0"}`}>
                <img
                    src={vehicle.image?.url}
                    alt={vehicle.name}
                    width={1000}
                    height={1000}
                    className={` w-full h-full ${vehicle?.image?.url.toLowerCase().endsWith('.png') ? "object-contain" : "object-cover"}`}
                />
            </div>

            <div className="bg-primary text-white text-center font-nunito lg:px-5 lg:py-5 md:px-4 md:py-4 px-3 py-3 flex flex-col justify-between flex-1">
                <h3 className="md:text-lg text-base lg:text-xl font-bold mb-2 md:mb-2">
                    {vehicle.name} - {vehicle.numberPlate}
                </h3>

                <div className='mb-4 flex flex-row items-center justify-center text-base md:text-lg text-yellow-200 font-semibold'>
                    <span className="">
                        Brand: {vehicle.brand}
                    </span>
                    {/* <span className="">
                        Model: {vehicle.vehicleModel}
                    </span> */}
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 text-xs md:text-sm lg:text-base text-left mb-4  md:mb-5 lg:mb-6">
                    <div className="flex items-center gap-2">
                        <FaCar />
                        <span>Type: {vehicle.category.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaUsers />

                        <span>Passengers: {vehicle.seats}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsFillFuelPumpFill />

                        <span>Fuel: {vehicle.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <SiGoogleearthengine className='text-xl' />

                        <span>Model: {vehicle.vehicleModel}</span>
                    </div>
                </div>

                <button className="bg-background cursor-pointer text-primary sm:text-base text-sm font-semibold py-1 md:py-2 px-6 rounded-md shadow hover:bg-yellow-200 transition"
                    onClick={handleBookClick}>
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default VehicleCard;
