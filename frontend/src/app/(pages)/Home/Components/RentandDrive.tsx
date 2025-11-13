"use client";
import { paddingX } from '@/constant/constant'
import { useRouter } from 'next/navigation';
import React from 'react'
import { motion } from "framer-motion";

const RentandDrive = () => {
    const router = useRouter();
    return (
        <div className='flex flex-col'>
            <div className='bg-background md:h-16'></div>
            <div className={`bg-primary pt-3 md:pt-5 lg:pb-0 md:pb-6 pb-8 flex flex-col md:flex-row w-full h-auto relative ${paddingX}`}>

                <motion.div
                    className='relative flex items-center w-full md:w-1/2 justify-center'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    <img src="/images/landcruiser1.png" alt='' className='lg:-translate-y-20 md:w-[80%] sm:w-[60%] w-[70%] object-contain' />
                </motion.div>

                <motion.div
                    className='flex flex-col justify-center w-full md:w-1/2 text-center lg:gap-7 h-auto md:gap-6 gap-4 mt-10 md:mt-0'
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    <h3 className="w-full text-background font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold leading-snug">
                        Drive the <span className="text-black font-bold">Luxury You Deserve</span>
                    </h3>

                    <p className="max-w-3xl text-center mx-auto lg:text-lg md:text-base font-nunito text-sm text-white">
                        Choose from an exclusive fleet ranging from SUVs to luxury cars like Mercedes, BMW, and Audi. We can arrange any vehicle upon request — for travel that matches your style.
                    </p>


                    <div className='flex flex-row gap-4 font-nunito md:text-base text-sm lg:text-lg w-full items-center justify-center'>
                        <button onClick={() => router.push("/our-cars")} className='bg-background text-primary border-2 rounded-md shadow-sm border-background hover:text-white hover:bg-primary px-6 py-3 transition-all ease-in-out duration-300 cursor-pointer'>
                            Browse Cars
                        </button>
                        <button onClick={() => router.push("/contact-us")} className='bg-primary px-6 py-3 rounded-md shadow-sm text-background border-2 border-background hover:text-white hover:border-white transition-all ease-in-out cursor-pointer duration-300'>
                            Contact Us
                        </button>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default RentandDrive
