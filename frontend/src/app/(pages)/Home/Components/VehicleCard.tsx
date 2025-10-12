import { Vehicle } from '@/types/type';
import React from 'react';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { FaCar, FaUsers } from "react-icons/fa";


interface VehicleCardProps {
    vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
    return (
        <div className="bg-[#E1E49E] rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Vehicle Image */}
            <div className="flex justify-center items-center md:h-52 h-40 sm:h-44 lg:h-60 p-4">
                <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="object-contain w-full h-full"
                />
            </div>

            <div className="bg-primary text-white text-center font-nunito lg:px-5 lg:py-5 md:px-4 md:py-4 px-3 py-3 flex flex-col justify-between flex-1">
                <h3 className="md:text-lg text-base lg:text-xl font-bold mb-3 md:mb-4">
                    {vehicle.name} - {vehicle.licensePlate}
                </h3>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 text-xs md:text-sm lg:text-base text-left mb-4  md:mb-5 lg:mb-6">
                    <div className="flex items-center gap-2">
                        <FaCar />
                        <span>Type: {vehicle.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaUsers />

                        <span>Passengers: {vehicle.passengers}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                        <BsFillFuelPumpFill />

                        <span>Fuel: {vehicle.fuel}</span>
                    </div>
                </div>

                <button className="bg-background cursor-pointer text-primary sm:text-base text-sm font-semibold py-1 md:py-2 px-6 rounded-md shadow hover:bg-yellow-200 transition">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default VehicleCard;
