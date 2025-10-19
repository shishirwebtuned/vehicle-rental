"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CustomButton } from "@/components/shared/CustomButton";
import { useCreateBookingMutation } from "@/redux/api/rest/mutation/otherApi";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";

interface EnquiryFormProps {
    vehicleId: string | number;
    onSubmitSuccess?: () => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ vehicleId, onSubmitSuccess }) => {

    const [createBooking] = useCreateBookingMutation();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            phone: Yup.string().required("Phone number is required"),
            message: Yup.string(),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const carSearchData = localStorage.getItem("carSearchData");
                const searchData = carSearchData ? JSON.parse(carSearchData) : {};

                const bookingData = {
                    vehicle: vehicleId,
                    ...searchData,
                    ...values,
                };

                console.log("Combined Booking Data:", bookingData);

                await createBooking(bookingData).unwrap();

                resetForm();
                toast.success("Booking enquiry sent successfully.");
                if (onSubmitSuccess) onSubmitSuccess();
            } catch (error) {
                console.error("Booking failed:", error);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 font-medium text-gray-700">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                />
                {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                />
                {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                )}
            </div>

            {/* Phone */}
            <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 font-medium text-gray-700">Phone Number</label>
                <PhoneInput
                    country={"np"} // Default to Nepal 🇳🇵
                    value={formik.values.phone}
                    onChange={(value) => formik.setFieldValue("phone", value)}
                    inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: false,
                        onBlur: formik.handleBlur,
                    }}
                    containerClass="w-full"
                    inputClass="!w-full !bg-gray-100 !rounded-lg !py-2 !pl-14 !pr-3 !text-gray-900 !focus:ring-2 !focus:ring-yellow-400 !border-none"
                    buttonClass="!bg-transparent !border-none !focus:outline-none"
                    dropdownClass="!bg-white !text-black"
                />
                {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                )}
            </div>

            {/* Message */}
            <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 font-medium text-gray-700">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                />
                {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                )}
            </div>

            <CustomButton type="submit" text="Submit Enquiry" />
        </form>
    );
};

export default EnquiryForm;
