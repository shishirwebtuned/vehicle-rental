"use client";

import { paddingX } from '@/constant/constant'
import { blogData } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const LatestBlogs = () => {
    return (
        <div className={`flex flex-col gap-8 md:gap-10 lg:gap-12 items-center justify-center bg-background ${paddingX} py-12 overflow-hidden`}>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='w-full text-center'>
                <h3 className="w-full text-black font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold leading-snug">
                    Our Latest{" "}
                    <span className="text-primary font-bold">Blogs</span>
                </h3>
            </motion.div>
            <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:gap-8 sm:gap-6 gap-4'>
                {blogData.map((item, index) => (
                    <motion.div initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }} key={item.id || index} className="w-full rounded-xl border border-gray-200 bg-white pb-5 blogCard-shadow hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between transition-all duration-300 ease-in-out text-start">
                        <div className={`rounded-t-xl flex justify-center h-32 sm:h-52 md:h-60 lg:h-64 overflow-hidden ${item.image.toLowerCase().endsWith('.png')
                            ? 'p-5 bg-linear-to-br from-gray-100 to-gray-200'
                            : 'p-0'
                            }`}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={1000}
                                height={1000}
                                className={`w-full h-full ${item.image.toLowerCase().endsWith('.png')
                                    ? 'object-contain bg-white bg-linear-to-br from-gray-100 to-gray-200'
                                    : 'object-cover'
                                    }`}
                            />
                        </div>

                        <div className='px-5 pt-5'>
                            <h2 className="mt-4 text-base md:text-lg lg:text-xl font-merriweather font-bold text-primary line-clamp-2">{item.title}</h2>

                            <p className="mt-2 font-nunito text-black md:text-sm text-xs lg:text-base line-clamp-4">{item.description}</p>
                        </div>
                        <div className='w-full text-center mb-1'>
                            <Link href={`/blogs/${item.slug}`}>
                                <button className="mt-3 cursor-pointer rounded-lg border-2 border-primary px-5 py-2 md:text-base text-sm lg:text-lg font-nunito font-medium text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}

            </div>

        </div>
    )
}

export default LatestBlogs
