"use client";

import { paddingX } from '@/constant/constant'
import React from 'react'
import VehicleCard from './VehicleCard'
import { useGetAllVehiclesQuery } from '@/redux/api/rest/query/queryApi'
import Link from 'next/link';
import { vehiclesStaticData } from '@/data/data';

const OurCars = () => {
    const { data: vehicles, isLoading, isError, isSuccess } = useGetAllVehiclesQuery();

    // const vehiclesData = isError || !isSuccess ? vehiclesStaticData : vehicles?.data?.vehicles || [];

    const vehiclesData = vehicles?.data?.vehicles || [];


    if (isLoading) {
        return <p className='font-mono'>Loading vehicles...</p>;
    }

    if (isError) {
        return <p className='font-mono'>Failed to load vehicles. Please try again later.</p>;
    }

    return (
        <section className={`bg-background h-full py-14 sm:py-16 md:py-20 flex flex-col md:gap-14 gap-12 lg:gap-16 items-center justify-center ${paddingX}`}>
            <div className="text-center">
                <h2 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                    Our <span className="text-primary">Cars</span>
                </h2>
            </div>
            <div className='flex flex-col gap-9 text-center items-center w-full h-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-full gap-5'>
                    {vehiclesData.slice(0, 6).map((vehicle: any, index: number) => (
                        <VehicleCard key={vehicle._id || index} vehicle={vehicle} />
                    ))}
                </div>
                <div className='w-full h-full flex items-center justify-center'>
                    <Link href="/our-cars"
                        className="px-7 flex py-3 font rounded-sm border-2 font-semibold cursor-pointer transition-all ease-in-out duration-400 bg-primary text-white hover:bg-transparent hover:text-primary border-primary"
                    >
                        View More
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default OurCars
