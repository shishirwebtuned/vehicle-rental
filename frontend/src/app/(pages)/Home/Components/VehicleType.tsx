"use client";

import { paddingX } from '@/constant/constant'
import { categoriesStaticData } from '@/data/data'
import { useGetAllCategoriesQuery } from '@/redux/api/rest/query/queryApi';
import React, { useState } from 'react'
import { motion } from "framer-motion";

const VehicleType = () => {
    const { data: categories, isLoading, isError, isSuccess } = useGetAllCategoriesQuery();

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // const categoriesData =
    //     isError || !isSuccess
    //         ? categoriesStaticData
    //         : categories?.data?.categories || [];

    const categoriesData = categories?.data?.categories || [];

    return (
        <section className={`bg-background ${paddingX} py-14 sm:py-16 md:py-20`}>
            <div className='flex flex-col gap-14'>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='w-full text-black font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold'>
                    Type of <span className='text-primary font-bold ml-2'> Rent Vehicles</span>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-3 gap-3 px-4 md:px-0">
                    {categoriesData.map((item: any, index: number) => (
                        <div key={item._id || index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="flex border relative border-[#5C9CBC24] group rounded-md serviceCard-shadow flex-col font-nunito items-center cursor-pointer text-center py-5 px-5 overflow-hidden">
                            <div className="w-full h-48 md:h-56 lg:h-64 flex items-center justify-center">
                                <img
                                    src={item?.image?.url}
                                    className="w-full h-full object-contain"
                                    alt={item?.name}
                                />
                            </div>
                            <div className={`absolute bottom-0 left-0 w-full text-center
                  ${openIndex === index ? "translate-y-0" : "translate-y-full"} group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-4`}>
                                <div className='bg-[#EEEFBC8C] shadow-xs rounded-md backdrop-blur-[10px] px-2 py-6 font-bold font-merriweather lg:text-xl md:text-lg text-base'>
                                    {item?.name}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default VehicleType
