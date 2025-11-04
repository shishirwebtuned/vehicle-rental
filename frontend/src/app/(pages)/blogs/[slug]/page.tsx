"use client";

import { paddingX } from '@/constant/constant';
import { blogData } from '@/data/data';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from "yup";
import { motion } from "framer-motion";

const BlogDetailPage = () => {
    const params = useParams();
    const slug = params.slug;

    const blog = blogData.find((item) => item.slug === slug);

    if (!blog) {
        return (
            <div className="bg-white">
                <div className={`flex flex-col h-full items-center pt-14 ${paddingX}`}>
                    <h2 className="text-xl md:text-2xl font-semibold text-red-600">
                        Blog not found.
                    </h2>
                </div>
            </div>
        );
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            website: '',
            comment: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            website: Yup.string(),
            comment: Yup.string().required("Message is required"),
        }),
        onSubmit: async (values, { resetForm }) => {

            try {
                console.log("Comment data", values);
                resetForm();
                toast.success("Your comment has been sent");
            } catch (error) {
                console.error("Comment failed:", error);
            }
        },
    });

    return (
        <div className="bg-white">
            <div className={`flex flex-col items-center bg-background justify-center pt-16 md:pt-24 pb-10 sm:pb-20 md:pb-28 ${paddingX}`}>

                <div
                    className={`flex flex-col md:flex-row items-start md:items-center gap-12 justify-center `}
                >
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full md:w-[45%] flex justify-center">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={600}
                            height={400}
                            className="object-contain w-full md:h-auto rounded-xl sm:max-h-60 max-h-52 md:max-h-full"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full md:w-[55%] flex flex-col justify-start">
                        {/* Title */}
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-merriweather font-bold text-primary md:mb-6 mb-5">
                            {blog.title}
                        </h1>

                        {/* Description */}
                        <p className="text-gray-800 whitespace-pre-line lg:text-lg md:text-base text-sm mb-2 md:mb-4 font-nunito italic">
                            {blog.description}
                        </p>

                        <p className="text-gray-800 lg:text-base md:text-sm text-end text-xs mb-2 md:mb-4 font-nunito italic mt-1">
                            By {blog.author}
                        </p>

                        {/* Content */}

                    </motion.div>
                </div>
                <div className="space-y-10 lg:space-y-12">
                    {/* Blog Content */}
                    <div className="prose max-w-none text-gray-800 text-justify font-nunito leading-relaxed lg:text-lg md:text-base whitespace-pre-line mt-10 bg-transparent p-4 text-sm">
                        <h2 className='md:text-xl text-lg lg:text-2xl font-bold font-nunito text-primary tracking-wide'>{blog.content.title}</h2>
                        <div>
                            {blog.content.data}
                        </div>
                    </div>

                    {/* Why Choose Section */}
                    <div className="bg-primary rounded-2xl p-6 md:p-8 shadow-sm text-white">
                        <h2 className="text-base md:text-lg lg:text-xl font-bold font-merriweather">
                            {blog.whyChooseQuestion}
                        </h2>
                        <p className=" font-nunito leading-relaxed lg:text-base md:text-sm text-xs whitespace-pre-line">
                            {blog.whyChooseAnswer}
                        </p>
                    </div>

                    {/* Final Thoughts */}
                    <div className="rounded-2xl p-6 md:p-8 shadow-sm bg-primary text-white">
                        <h3 className="md:text-lg text-base lg:text-xl font-merriweather font-bold mb-1">
                            Final Thoughts
                        </h3>
                        <p className="font-nunito leading-relaxed lg:text-base md:text-sm text-xs whitespace-pre-line">
                            {blog.finalThoughts}
                        </p>
                    </div>
                </div>

            </div>

            <div
                className={`flex flex-col md:flex-row items-start md:items-center gap-12 pt-14 md:pt-20 justify-center bg-white pb-10 sm:pb-20 md:pb-28 ${paddingX}`}
            >
                <div className="w-full max-w-3xl">
                    {/* Form Heading */}
                    <h2 className="md:text-xl text-lg lg:text-2xl font-merriweather font-bold text-gray-800 mb-2">
                        Leave a Reply
                    </h2>
                    <p className="text-gray-500 md:text-[13px] text-xs font-nunito lg:text-sm mb-6">
                        Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
                    </p>

                    {/* Form */}
                    <form onSubmit={formik.handleSubmit} className="flex flex-col font-nunito gap-4">
                        {/* Name, Email, Website */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="flex w-full flex-col">
                                <label htmlFor='name' className="text-gray-700 lg:text-base md:text-[15px] text-sm mb-1">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring lg:text-base md:text-[15px] text-sm focus:ring-primary"
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                                )}
                            </div>

                            <div className="flex w-full flex-col">
                                <label htmlFor='email' className="text-gray-700 lg:text-base md:text-[15px] text-sm mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring lg:text-base md:text-[15px] text-sm  focus:ring-primary"
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                                )}
                            </div>

                            <div className="flex col-span-1 sm:col-span-2 lg:col-span-1 flex-col">
                                <label htmlFor='website' className="text-gray-700 lg:text-base md:text-[15px] text-sm mb-1">Website</label>
                                <input
                                    id="website"
                                    name="website"
                                    type="text"
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring lg:text-base md:text-[15px] text-sm focus:ring-primary"
                                />
                                {formik.touched.website && formik.errors.website && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.website}</p>
                                )}
                            </div>
                        </div>

                        {/* Comment */}
                        <div className="flex flex-col">
                            <label htmlFor='comment' className="text-gray-700 lg:text-base md:text-[15px] text-sm mb-1">
                                Add Comment <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="comment"
                                name="comment"
                                rows={6}
                                value={formik.values.comment}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring lg:text-base md:text-[15px] text-sm focus:ring-primary"
                            ></textarea>
                            {formik.touched.comment && formik.errors.comment && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.comment}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className='w-full flex items-center justify-end'>
                            <button
                                type="submit"
                                className="mt-2 bg-primary text-white px-6 py-2 rounded-sm font-medium hover:bg-primary/90 cursor-pointer transition-all lg:text-base md:text-[15px] text-sm"
                            >
                                Post Comment
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default BlogDetailPage;
