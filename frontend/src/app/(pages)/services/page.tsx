"use client";

import { paddingX } from '@/constant/constant'
import React from 'react'
import { services } from '@/data/data';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const iconMap: any = {
    FaMapMarkedAlt: require('react-icons/fa').FaMapMarkedAlt,
    FaPlaneDeparture: require('react-icons/fa').FaPlaneDeparture,
    FaRegBuilding: require('react-icons/fa').FaRegBuilding,
    GiJungle: require('react-icons/gi').GiJungle,
    GiPathDistance: require('react-icons/gi').GiPathDistance,
    MdEventAvailable: require('react-icons/md').MdEventAvailable,
    MdLuggage: require('react-icons/md').MdLuggage,
    MdTour: require('react-icons/md').MdTour,
    LiaMountainSolid: require('react-icons/lia').LiaMountainSolid,
    TbBus: require('react-icons/tb').TbBus,
    FaCar: require('react-icons/fa').FaCar,
    IoIosBoat: require('react-icons/io').IoIosBoat,
    IoFastFood: require('react-icons/io5').IoFastFood,
    FaCarSide: require('react-icons/fa6').FaCarSide,
};

const page = () => {

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const router = useRouter();
    const handleCardClick = (slug: any) => {
        router.push(`/services/${slug}`);
    }

    return (
        <div className='bg-white'>
            <div className={`flex flex-col min-h-screen items-center pt-10 md:pt-16 justify-center bg-background pb-12 sm:pb-20 md:pb-28 ${paddingX}`}>
                <div className="text-black pb-8 justify-center space-y-4 md:space-y-6 w-full flex flex-col items-center">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                        <span className="text-primary">Our </span> Services
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="max-w-3xl lg:text-lg md:text-base font-nunito text-center text-sm">
                        Revolves around rental, tours and transportation
                        in Nepal

                    </motion.p>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full h-full md:gap-6 gap-4 lg:gap-8 mt-4 md:mt-8">
                        {services.map((item, index) => {
                            const Icon = iconMap[item.icon];
                            return (
                                <motion.div key={item.id}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.3 + index * 0.10,
                                        ease: "easeOut",
                                    }}
                                    viewport={{ once: true }}
                                    className="flex border border-[#5C9CBC24] rounded-md serviceCard-shadow flex-col font-nunito items-center text-center py-5 px-4 hover:scale-105 transition-transform cursor-pointer"
                                    onClick={() => handleCardClick(item.slug)}>
                                    {Icon && <Icon className='md:text-3xl text-2xl lg:text-4xl text-primary mb-4' />}
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-0 md:mb-2">{item.title}</h3>
                                    <p className="text-gray-800 mt-1 md:mt-2 md:text-sm text-xs lg:text-base">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>


                </div>
            </div>

        </div>
    )
}

export default page
