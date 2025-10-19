"use client";

import { CustomButton } from '@/components/shared/CustomButton'
import DotSpinner from '@/components/shared/Spinner/DotSpinner';
import { paddingX } from '@/constant/constant';
import { useCreateContactMutation } from '@/redux/api/rest/mutation/otherApi';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import * as Yup from "yup";


const Page = () => {

    const [createContact, { isLoading }] = useCreateContactMutation();

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

                const contactData = {
                    ...values,
                };

                await createContact(contactData).unwrap();

                resetForm();
                toast.success("Your message has been sent successfully. We’ll get back to you soon! ");
            } catch (error) {
                console.error("Contact enquiry failed:", error);
            }
        },
    });

    return (
        <div className='bg-background '>
            <section className={`flex flex-col items-center pt-40 md:pt-40 justify-center bg-black/10 pb-20 sm:pb-24 md:pb-28 h-full w-full min-h-screen ${paddingX} md:gap-4`}>
                <div className=" w-full text-black pb-8 text-center px-2 md:px-6 md:space-y-5 space-y-4">
                    <h1 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                        <span className="text-primary">Contact </span> Us.
                    </h1>
                    <p className="lg:text-lg md:text-base font-nunito text-sm">
                        Whether you’re ready to book or just looking for more information, our friendly team is always happy to assist. Reach out — we’ll respond promptly.
                    </p>
                </div>
                <div className='md:w-1/3 w-full pt-0 md:pt-0'>
                    <form onSubmit={formik.handleSubmit} className="flex w-full flex-col gap-3">
                        <div className="flex flex-col text-sm md:text-base">
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
                        <div className="flex flex-col text-sm md:text-base">
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
                        <div className="flex flex-col text-sm md:text-base">
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
                        <div className="flex flex-col text-sm md:text-base">
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

                        <CustomButton disabled={isLoading} type="submit" text={isLoading ? <DotSpinner customClassName='w-10' /> : "Submit Enquiry"}
                            className={`${isLoading ? "opacity-70 cursor-not-allowed" : ""
                                } flex items-center justify-center`}
                        />
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Page
