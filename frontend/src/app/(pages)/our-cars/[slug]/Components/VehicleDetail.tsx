"use client";

import { paddingX } from '@/constant/constant';
import { useGetVehicleByIdQuery } from '@/redux/api/rest/query/queryApi';
import { VehiclePageProps, VehicleType } from '@/types/type'
import React, { use, useEffect, useState } from 'react'
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { FaCar, FaUsers } from 'react-icons/fa';
import { BiSolidDollarCircle } from "react-icons/bi";
import MasterDialog from '@/components/shared/MasterDialog';
import { useFormik } from "formik";
import * as Yup from "yup";
import EnquiryForm from './EnquiryForm';
import { Metadata } from 'next';
import LocationInput from '@/components/shared/LocationInput';


export default function VehicleDetail({ slug }: { slug: string }) {

    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const id = slug.split('-').pop();

    const [initialData, setInitialData] = useState({
        pickupLocation: "",
        dropoffLocation: "",
        pickupDate: "",
        pickupTime: "",
        dropoffDate: "",
        dropoffTime: "",
    });

    // Load data from localStorage if present
    useEffect(() => {
        const storedData = localStorage.getItem("carSearchData");
        if (storedData) {
            setInitialData(JSON.parse(storedData));
        }
    }, []);

    const validationSchema = Yup.object({
        pickupLocation: Yup.string().required("Pickup location is required"),
        dropoffLocation: Yup.string().required("Drop off location is required"),

        pickupDate: Yup.date()
            .transform((value, originalValue) => (originalValue === "" ? null : value))
            .required("Pickup date is required"),

        pickupTime: Yup.string().required("Pickup time is required"),
        dropoffDate: Yup.date()
            .transform((value, originalValue) => (originalValue === "" ? null : value))
            .required("Drop-off date is required")
            .min(
                Yup.ref("pickupDate"),
                "Drop-off date cannot be before pickup date"
            ),

        dropoffTime: Yup.string().required("Drop-off time is required"),
    }).test(
        "dropoff-after-pickup",
        "If pickup and drop-off are on the same day, drop-off time must be after pickup time",
        function (values) {
            const { pickupDate, dropoffDate, pickupTime, dropoffTime } = values;

            if (!pickupDate || !dropoffDate || !pickupTime || !dropoffTime) return true;

            if (
                new Date(pickupDate).toDateString() === new Date(dropoffDate).toDateString()
            ) {
                const [pickupHour, pickupMinute] = pickupTime.split(":").map(Number);
                const [dropoffHour, dropoffMinute] = dropoffTime.split(":").map(Number);

                const pickupTotal = pickupHour * 60 + pickupMinute;
                const dropoffTotal = dropoffHour * 60 + dropoffMinute;

                if (dropoffTotal <= pickupTotal) {
                    return this.createError({
                        path: "dropoffTime",
                        message:
                            "If pickup and drop-off are the same day, drop-off time must be after pickup time",
                    });
                }
            }

            return true;
        });

    const formik = useFormik({
        enableReinitialize: true, // important to update initialValues from localStorage
        initialValues: initialData,
        validationSchema,
        onSubmit: (values) => {
            localStorage.setItem("carSearchData", JSON.stringify(values));
            setDialogOpen(true);

        },
    });

    const locations = ["London Airport", "Manchester", "Birmingham"];
    const { data, isLoading, isError } = useGetVehicleByIdQuery({ vehicleId: id as string });


    const vehicleData: VehicleType = data?.data?.vehicle || [];

    // if (isLoading) {
    //     return (
    //         <div className={`flex flex-col min-h-screen items-center pt-40 md:pt-44 justify-center bg-white gap-8 md:gap-12 pb-12 sm:pb-20 md:pb-28 ${paddingX}`}>
    //             <p>Loading vehicle Data...</p>
    //         </div>);
    // }

    // if (isError) {
    //     return (
    //         <div className={`flex flex-col min-h-screen items-center pt-40 md:pt-44 justify-center bg-white gap-8 md:gap-12 pb-12 sm:pb-20 md:pb-28 ${paddingX}`}>
    //             <p>Failed to load vehicle Data. Please try again later.</p>
    //         </div>);
    // }

    return (
        <div className='bg-[#FCFBFB]'>
            <div className={`flex md:flex-row flex-col min-h-screen items-center md:items-start pt-36 md:pt-40 justify-center bg-[#f7f7f7] gap-5 md:gap-5 lg:gap-6 pb-12 sm:pb-20 md:pb-28 ${paddingX}`}>

                <div className='md:w-2/3 w-full flex flex-col gap-2'>
                    <div className="w-full h-[40vh] md:h-[60vh] flex justify-center items-center shadow-xs border border-gray-100 bg-white p-4 rounded-md">
                        <img
                            src={vehicleData?.image?.url}
                            alt={vehicleData?.name}
                            className="object-contain w-full h-full rounded-lg"
                        />
                    </div>
                    <div className="bg-white rounded-md shadow-xs border border-gray-100 p-3 w-full font-nunito mt-1 md:hidden block">

                        <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{vehicleData?.brand} - {vehicleData?.name}</h1>
                        <div className="relative w-full h-[1px] bg-gray-300 rounded-full flex items-center justify-start mb-4">
                            <div className="h-1 bg-yellow-400 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                        <div className="bg-[#F2F7F6] flex items-start flex-col px-4 py-2 rounded-lg mb-1">

                            <p className="text-sm lg:text-base font-semibold">Model: {vehicleData?.vehicleModel}</p>
                            <p className="text-sm lg:text-base font-semibold">Number Plate: {vehicleData?.numberPlate}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-xs border border-gray-100 p-4 w-full font-nunito mt-2">
                        <h2 className="md:text-lg text-base font-semibold text-gray-800 mb-2">
                            Description
                        </h2>
                        <div className="relative w-full h-[1px] bg-gray-300 rounded-full flex items-center justify-start mb-4">
                            <div className="h-1 bg-yellow-400 rounded-full" style={{ width: "10%" }}>
                            </div>
                        </div>
                        <div>
                            <p className='md:text-base text-sm'>{vehicleData?.description}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-xs border border-gray-100 p-3 w-full font-nunito mt-2">
                        <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                            Specifications
                        </h2>
                        <div className="relative w-full h-[1px] bg-gray-300 rounded-full flex items-center justify-start mb-4">
                            <div className="h-1 bg-yellow-400 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                        <div className="bg-[#F2F7F6] md:grid lg:grid-cols-2 md:grid-cols-1 flex flex-wrap items-center justify-center md:gap-x-0 gap-x-3 gap-y-3 md:text-base text-xs sm:text-sm px-4 py-2 rounded-lg mb-1">
                            <div className="flex items-center gap-2">
                                <FaCar />
                                <span>Type: {vehicleData?.category?.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaUsers />

                                <span>Seats: {vehicleData?.seats}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BsFillFuelPumpFill />

                                <span>Fuel: {vehicleData?.fuelType}</span>
                            </div>
                            {/* <div className="flex items-center gap-2">
                                <BiSolidDollarCircle className='text-lg' />

                                <span>Price: Rs. {vehicleData?.pricePerDay} / Day</span>
                            </div> */}
                        </div>
                    </div>

                </div>




                {/* Right: Details */}
                <div className="md:w-1/3 w-full flex flex-col gap-4 text-gray-800">

                    <div className="bg-white rounded-md shadow-xs border border-gray-100 p-4 w-full font-nunito hidden md:block">

                        <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{vehicleData?.brand} - {vehicleData?.name}</h1>
                        <div className="relative w-full h-[1px] bg-gray-300 rounded-full flex items-center justify-start mb-4">
                            <div className="h-1 bg-yellow-400 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                        <div className="bg-[#F2F7F6] flex items-start flex-col px-4 py-2 rounded-lg mb-1">

                            <p className="text-sm lg:text-base font-semibold">Model: {vehicleData?.vehicleModel}</p>
                            <p className="text-sm lg:text-base font-semibold">Number Plate: {vehicleData?.numberPlate}</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-md shadow-xs border border-gray-100 p-3 w-full font-nunito">
                        <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                            Status
                        </h2>
                        <div className="relative w-full h-[1px] bg-gray-300 rounded-full flex items-center justify-start mb-4">
                            <div className="h-1 bg-yellow-400 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                        {vehicleData?.availabilityStatus ? (
                            <div className="bg-green-100 gap-y-3 px-4 text-[green] py-2 rounded-lg mb-1 flex items-center justify-center">
                                <p className="md:text-lg sm:text-base text-sm font-semibold">
                                    Available
                                </p>
                            </div>
                        ) : (
                            <div className="bg-red-100 gap-y-3 text-[red] px-4 py-2 rounded-lg mb-1 flex items-center justify-center">
                                <p className="md:text-lg sm:text-base text-sm font-semibold">
                                    Unavailable
                                </p>
                            </div>
                        )}

                    </div>

                    {/* <div className="bg-white rounded-md shadow-xs border border-gray-100 p-5 w-full font-nunito">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Pricing Details
                        </h2>
                        <div className="relative w-full h-[1px] bg-gray-300 rounded-full flex items-center justify-start mb-5">
                            <div className="h-1 bg-yellow-400 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                        <div className="bg-[#F2F7F6] flex items-center justify-between px-4 py-3 rounded-lg mb-3">
                            <p className="text-gray-700 text-sm">
                                Per day <span className="text-gray-500">(24 Hours)</span>
                            </p>
                            <p className="font-semibold text-gray-800">Rs. {vehicleData?.pricePerDay}</p>
                        </div>
                    </div> */}
                    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5'>
                        <div className="bg-white rounded-md shadow-xs border border-gray-100 p-3 w-full font-nunito">

                            <h2 className="sm:text-lg text-base md:text-xl font-bold text-gray-800 mb-2">Booking Details</h2>
                            <div className="relative w-full h-[1px] bg-gray-300 rounded-full flex items-center justify-start mb-4">
                                <div className="h-1 bg-yellow-400 rounded-full" style={{ width: "10%" }}></div>
                            </div>

                            <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4">

                                {/* Pickup Location */}
                                <LocationInput
                                    label="Pickup Location"
                                    name="pickupLocation"
                                    formik={formik}
                                    labeltextSize='text-sm md:text-base'
                                    className="w-full bg-[#F2F7F6] px-3 py-2 rounded-lg focus:outline-none text-sm md:text-base focus:ring focus:ring-yellow-400"
                                />
                                {formik.touched.pickupLocation && formik.errors.pickupLocation && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.pickupLocation}</p>
                                )}

                                {/* Pickup Date */}
                                <div className="flex flex-col">
                                    <label htmlFor="pickupDate" className="mb-1 text-gray-700 font-medium text-sm md:text-base">Pickup Date</label>
                                    <input
                                        type="date"
                                        id="pickupDate"
                                        name="pickupDate"
                                        value={formik.values.pickupDate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        min={new Date().toISOString().split("T")[0]}
                                        className="bg-[#F2F7F6] px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400 text-sm md:text-base"
                                    />
                                    {formik.touched.pickupDate && formik.errors.pickupDate && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.pickupDate}</p>
                                    )}
                                </div>

                                {/* Pickup Time */}
                                <div className="flex flex-col">
                                    <label htmlFor="pickupTime" className="mb-1 text-gray-700 font-medium text-sm md:text-base">Pickup Time</label>
                                    <input
                                        type="time"
                                        id="pickupTime"
                                        name="pickupTime"
                                        value={formik.values.pickupTime}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="bg-[#F2F7F6] text-sm md:text-base px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                                    />
                                    {formik.touched.pickupTime && formik.errors.pickupTime && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.pickupTime}</p>
                                    )}
                                </div>

                                {/* Dropoff Location */}
                                <LocationInput
                                    label="Dropoff Location"
                                    name="dropoffLocation"
                                    formik={formik}
                                    labeltextSize='text-sm md:text-base'
                                    className="w-full bg-[#F2F7F6] px-3 py-2 rounded-lg focus:outline-none focus:ring text-sm md:text-base focus:ring-yellow-400"
                                />
                                {formik.touched.dropoffLocation && formik.errors.dropoffLocation && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.dropoffLocation}</p>
                                )}


                                {/* Dropoff Date */}
                                <div className="flex flex-col">
                                    <label htmlFor="dropoffDate" className="mb-1 text-gray-700 font-medium text-sm md:text-base">Dropoff Date</label>
                                    <input
                                        type="date"
                                        id="dropoffDate"
                                        name="dropoffDate"
                                        value={formik.values.dropoffDate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        min={
                                            formik.values.pickupDate
                                                ? formik.values.pickupDate
                                                : new Date().toISOString().split("T")[0]
                                        }
                                        className="bg-[#F2F7F6] px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400 text-sm md:text-base"
                                    />
                                    {formik.touched.dropoffDate && formik.errors.dropoffDate && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.dropoffDate}</p>
                                    )}
                                </div>

                                {/* Dropoff Time */}
                                <div className="flex flex-col">
                                    <label htmlFor="dropoffTime" className="mb-1 text-gray-700 font-medium text-sm md:text-base">Dropoff Time</label>
                                    <input
                                        type="time"
                                        id="dropoffTime"
                                        name="dropoffTime"
                                        value={formik.values.dropoffTime}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="bg-[#F2F7F6] px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400 text-sm md:text-base"
                                    />
                                    {formik.touched.dropoffTime && formik.errors.dropoffTime && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.dropoffTime}</p>
                                    )}
                                </div>

                            </div>
                        </div>






                        {vehicleData?.availabilityStatus ? (
                            <button type='submit'
                                className="bg-primary hover:bg-white border-2 border-primary hover:text-primary transition-colors flex items-center justify-center rounded-md shadow-md text-white text-xs sm:text-base md:text-lg cursor-pointer px-4 md:py-3 py-2 w-full font-nunito"
                            >
                                Book Now
                            </button>
                        ) : (
                            <a href="tel: 01-4004541"
                                className="bg-[#127384] cursor-pointer hover:bg-white hover:text-[#127384] border-2 border-[#127384] transition-all duration-300 ease-in-out text-white flex items-center justify-center rounded-md shadow-md text-xs sm:text-base md:text-lg px-4 py-2 md:py-3 w-full font-nunito font-semibold"
                            >
                                Enquire Now
                            </a>
                        )}
                    </form>

                </div>
            </div>
            <MasterDialog open={dialogOpen} title='Enquiry Form' onClose={() => setDialogOpen(false)}
            >
                <EnquiryForm
                    vehicleId={vehicleData?._id || ""}
                    onSubmitSuccess={() => setDialogOpen(false)}
                />
            </MasterDialog>
        </div>
    );
}

