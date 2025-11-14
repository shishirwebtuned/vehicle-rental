"use client";

import { paddingX } from '@/constant/constant'
import { servicesData } from '@/data/data'
import React from 'react'
import { motion } from "framer-motion";

const ExploreService = () => {
    return (
        <div
            className="relative"
        // style={{ backgroundImage: "url('/images/mgbg.avif')" }}
        // style={{ backgroundImage: "url('/images/toyota1.jpg')" }}
        >
            <div
                className="fixed inset-0 -z-10 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/toyota1.jpg')" }}
            ></div>

            {/* Dark transparent overlay */}
            <div className="fixed inset-0 -z-10 bg-black/40"></div>

            {/* Foreground Content */}
            <section className="flex items-center justify-center h-[100dvh] md:h-[70dvh] py-20 sm:py-24 md:py-28">
            </section>


            <section className={`bg-background h-full py-14 sm:py-16 md:py-20 flex flex-col md:gap-14 gap-12 lg:gap-16 items-center justify-center ${paddingX}`}>
                <motion.div
                    className="text-center"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                        Explore Our <span className="text-primary">Services</span>
                    </h2>
                </motion.div>
                <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-8'>
                    <motion.div
                        className="flex justify-center w-full h-full items-center"
                        initial={{ opacity: 0 }}      // fade from own position
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img
                            src="/images/scorpio.png"
                            alt="Car"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-lg "
                        />
                    </motion.div>

                    <div className=" grid grid-cols-1 sm:grid-cols-2 w-full h-full gap-4 ">
                        {servicesData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="flex border border-[#5C9CBC24] rounded-md serviceCard-shadow flex-col font-nunito items-center text-center py-5 px-4"
                                initial={{ y: 30, opacity: 0 }}   // optional slide from bottom
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="lg:w-16 lg:h-16 md:w-14 md:h-14 w-12 h-12 mb-0 md:mb-2"
                                />
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-0 md:mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-800 mt-1 md:mt-2 md:text-sm text-xs lg:text-base">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </div>

    )
}

export default ExploreService;
