"use client";

import { CustomButton } from "@/components/shared/CustomButton";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import LocationInput from "@/components/shared/LocationInput";

export interface FormValues {
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: string;
    pickupTime: string;
    dropoffDate: string;
    dropoffTime: string;
}

const HeroSection = () => {

    const router = useRouter();
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
            .min(Yup.ref("pickupDate"), "Drop-off date cannot be before pickup date"),

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
        }
    );


    const formFields: { id: keyof FormValues; label: string; type: string }[] = [
        {
            id: "pickupLocation",
            label: "Pickup Location",
            type: "location",
        },
        {
            id: "dropoffLocation",
            label: "Drop Off Location",
            type: "location",
        },
        {
            id: "pickupDate",
            label: "Pickup Date",
            type: "date",
        },
        {
            id: "pickupTime",
            label: "Pickup Time",
            type: "time",
        },
        {
            id: "dropoffDate",
            label: "Drop Off Date",
            type: "date",
        },
        {
            id: "dropoffTime",
            label: "Drop Off Time",
            type: "time",
        },
    ];


    const formik = useFormik<FormValues>({
        initialValues: {
            pickupLocation: "",
            dropoffLocation: "",
            pickupDate: "",
            pickupTime: "",
            dropoffDate: "",
            dropoffTime: "",
        },
        validationSchema,
        onSubmit: (values) => {
            localStorage.setItem("carSearchData", JSON.stringify(values));
            router.push("/our-cars");
        },
    });

    return (
        <div
            className="text-white pt-40 md:pt-32 h-full pb-12 md:pb-4 md:h-[90dvh] bg-cover bg-center"
            style={{ backgroundImage: "url(/images/background.jpg)" }}
        >
            <div className="w-full h-full flex flex-col items-center justify-center px-4">
                <motion.h1
                    className="text-xl md:text-2xl lg:text-3xl font-merriweather text-center mb-8"
                    initial={{ y: 50, opacity: 0 }}    // start 50px below and invisible
                    animate={{ y: 0, opacity: 1 }}     // slide up to normal position
                    transition={{ duration: 0.8, ease: "easeOut" }} // smooth animation
                >
                    Need a <span className="text-primary font-bold">Car</span> Fast? Rent
                    with Ease, <span className="text-primary font-bold">Drive</span> with
                    Confidence!
                </motion.h1>

                <form onSubmit={formik.handleSubmit} className="bg-white/75 rounded-md shadow-md w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-5xl flex flex-col p-4 gap-5  font-nunito text-blue-600">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-start gap-3">
                        {formFields.map((field) => (
                            <div key={field.id} className="flex flex-col w-full">
                                {field.type === "location" ? (
                                    <LocationInput
                                        label={field.label}
                                        name={field.id}
                                        formik={formik}
                                    />
                                ) : (
                                    <>
                                        <label
                                            htmlFor={field.id}
                                            className="lg:text-sm md:text-xs text-[10px] font-medium mb-1"
                                        >
                                            {field.label}
                                        </label>


                                        <input
                                            id={field.id}
                                            name={field.id}
                                            type={field.type}
                                            value={formik.values[field.id as keyof typeof formik.values]}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            min={new Date().toISOString().split("T")[0]}

                                            className="w-full px-3 bg-white py-2 focus:outline-none focus:ring focus:ring-primary lg:text-base md:text-sm text-xs"
                                        />

                                        {formik.touched[field.id as keyof typeof formik.touched] && formik.errors[field.id as keyof typeof formik.errors] && (
                                            <p className="text-red-500 text-[10px] mt-1">
                                                {formik.errors[field.id as keyof typeof formik.errors] as string}
                                            </p>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex w-full items-center justify-center">
                        <CustomButton text="Find Cars" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HeroSection;
