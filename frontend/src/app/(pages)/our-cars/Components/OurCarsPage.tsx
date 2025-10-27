"use client";

import React from 'react'
import { paddingX } from '@/constant/constant'
import { useGetAllVehiclesQuery } from '@/redux/api/rest/query/queryApi'
import VehicleCard from '../../Home/Components/VehicleCard';
import { vehiclesStaticData } from '@/data/data';

const OurCarsPage = () => {

    const { data: vehicles, isLoading, isError, isSuccess } = useGetAllVehiclesQuery();

    const vehiclesData = vehicles?.data?.vehicles || [];

    // const vehiclesData = isError || !isSuccess ? vehiclesStaticData : vehicles?.data?.vehicles || [];

    if (isLoading) {
        return (
            <div className={`flex flex-col min-h-screen items-center font-mono pt-40 md:pt-44 justify-center bg-background gap-8 md:gap-12 pb-12 sm:pb-20 md:pb-28 ${paddingX}`}>
                <p>Loading vehicles...</p>
            </div>);
    }

    if (isError) {
        return (
            <div className={`flex flex-col min-h-screen items-center font-mono pt-40 md:pt-44 justify-center bg-background gap-8 md:gap-12 pb-12 sm:pb-20 md:pb-28 ${paddingX}`}>
                <p>Failed to load vehicles. Please try again later.</p>
            </div>);
    }

    return (
        <div className='bg-white'>
            <div className={`flex flex-col min-h-screen items-center pt-16 md:pt-20 justify-center bg-background gap-8 md:gap-12 pb-12 sm:pb-20 md:pb-28 ${paddingX}`}>
                <div className="text-center">
                    <h2 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                        Our <span className="text-primary">Cars</span>
                    </h2>
                </div>
                <div className='w-full h-full'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-full gap-5'>
                        {vehiclesData.map((vehicle: any, index: number) => (
                            <VehicleCard key={vehicle._id || index} vehicle={vehicle} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}


export default OurCarsPage
