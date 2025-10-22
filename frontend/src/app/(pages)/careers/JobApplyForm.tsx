"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CustomButton } from "@/components/shared/CustomButton";
import { useApplytoJobMutation, useCreateBookingMutation } from "@/redux/api/rest/mutation/otherApi";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";

interface JobApplyFormProps {
    jobName: string | null;
    onSubmitSuccess?: () => void;
}

const JobApplyForm: React.FC<JobApplyFormProps> = ({ jobName, onSubmitSuccess }) => {

    const [applyToJob, { isLoading }] = useApplytoJobMutation();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
            resume: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            phone: Yup.string().required("Phone number is required"),
            message: Yup.string(),
            resume: Yup.mixed().required("Resume or CV is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("email", values.email);
                formData.append("phone", values.phone);
                if (values.message) {
                    formData.append("message", values.message);
                } formData.append("appliedPosition", jobName || "");
                if (values.resume) {
                    formData.append("resume", values.resume);
                }


                console.log("Job Application Data:", formData);

                // await applyToJob(formData).unwrap();

                resetForm();
                toast.success("Job application sent successfully.");
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

            <div className="flex flex-col">
                <label htmlFor="resume" className="mb-1 font-medium text-gray-700">Resume or CV</label>
                <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(event) => {
                        const file = event.currentTarget.files?.[0];
                        formik.setFieldValue("resume", file);
                    }}
                    onBlur={formik.handleBlur}
                    className="
    bg-gray-100 
    px-3 py-2 
    rounded-lg 
    border border-transparent
    focus:outline-none 
    focus:ring-2 focus:ring-yellow-400 
    hover:border-yellow-400 
    hover:bg-gray-50
    transition-all duration-200 ease-in-out
    cursor-pointer
    text-sm font-nunito text-gray-700
    file:mr-4 file:py-2 file:px-4 
    file:rounded-md file:border-0 
    file:text-sm file:font-semibold 
    file:bg-yellow-400 file:text-white 
    file:hover:bg-yellow-500
  "

                />
                {formik.touched.resume && formik.errors.resume && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.resume}</p>
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

            <CustomButton type="submit" text={` ${isLoading ? "Submitting..." : "Submit Enquiry"}`} disabled={isLoading} />
        </form>
    );
};

export default JobApplyForm;
