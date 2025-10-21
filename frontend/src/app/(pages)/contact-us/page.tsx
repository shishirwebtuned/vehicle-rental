"use client";

import { CustomButton } from '@/components/shared/CustomButton'
import DotSpinner from '@/components/shared/Spinner/DotSpinner';
import { paddingX } from '@/constant/constant';
import { footerData } from '@/data/data';
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
            message: Yup.string().required("Message is required"),
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
        <div className="bg-background">
            <section
                className={`flex flex-col md:flex-row items-start md:items-center justify-between bg-black/10 pt-12 md:pt-8 pb-20 sm:pb-24 md:pb-28 h-full w-full ${paddingX} gap-10 md:gap-16`}
            >
                {/* Left: Heading + Description */}
                <div className="md:w-1/2 text-black text-center md:text-left ">
                    <div className='space-y-5 w-full md:w-[90%]'>
                        <h1 className="font-merriweather md:text-3xl text-2xl lg:text-4xl font-bold">
                            <span className="text-primary">Contact</span> Us.
                        </h1>
                        <p className="lg:text-lg md:text-base text-sm font-nunito">
                            Whether you’re ready to book or just looking for more information, our friendly team is always happy to assist. Reach out — we’ll respond promptly.
                        </p>
                    </div>

                    <div className="flex flex-col md:items-start items-center mt-6">

                        <ul className=" bg-primary px-4 py-6 rounded-md shadow-md grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-5 items-start justify-start overflow-hidden">
                            {footerData.contact.details.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center md:justify-start justify-start space-x-2 md:text-sm sm:text-xs text-[10px] font-semibold lg:text-base text-white font-nunito"
                                >
                                    <span className="text-primary lg:text-xl md:text-base text-sm bg-white md:p-[6px] p-1 lg:p-2 rounded-full">
                                        <item.icon />
                                    </span>
                                    <a
                                        href={item.link}
                                        target={item.link.startsWith("http") ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="md:w-1/2 w-full md:pt-4">
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-full md:w-[90%]">
                        {/* Name */}
                        <div className="flex flex-col text-sm md:text-base">
                            <label htmlFor="name" className="mb-1 font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400 w-full"
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
                                className="bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400 w-full"
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col text-sm md:text-base">
                            <label htmlFor="phone" className="mb-1 font-medium text-gray-700">Phone Number</label>
                            <PhoneInput
                                country={"np"}
                                value={formik.values.phone}
                                onChange={(value) => formik.setFieldValue("phone", value)}
                                inputProps={{
                                    name: "phone",
                                    required: true,
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
                                className="bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400 w-full"
                            />
                            {formik.touched.message && formik.errors.message && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                            )}
                        </div>

                        <CustomButton
                            disabled={isLoading}
                            type="submit"
                            text={isLoading ? <DotSpinner customClassName='w-10' /> : "Submit Enquiry"}
                            className={`${isLoading ? "opacity-70 cursor-not-allowed" : ""} flex items-center justify-center mt-2`}
                        />
                    </form>
                </div>
            </section>
            <section className="bg-white w-full">
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[440px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.7682120396476!2d85.32339307550993!3d27.718002976176447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19102fe636b1%3A0x91696da50a322070!2sGrateful%20Transportation%20Service!5e1!3m2!1sen!2snp!4v1760947391986!5m2!1sen!2snp"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>

        </div>

    )
}

export default Page
