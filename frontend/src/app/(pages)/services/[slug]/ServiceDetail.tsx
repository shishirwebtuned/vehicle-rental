"use client";

import { paddingX } from '@/constant/constant';
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/shared/CustomButton';
import { useRouter } from 'next/navigation';

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
    TbTrekking: require('react-icons/tb').TbTrekking,
    IoIosBoat: require('react-icons/io').IoIosBoat,
    IoFastFood: require('react-icons/io5').IoFastFood,
    FaCarSide: require('react-icons/fa6').FaCarSide,
};

type ServiceClientProps = {
    service: {
        id: number;
        title: string;
        description: string;
        content: string;
        icon: string;
        answer: string;
    };
};

const ServiceDetail = ({ service }: ServiceClientProps) => {

    const router = useRouter();
    const Icon = iconMap[service.icon];


    return (
        <div className="bg-white">
            <div
                className={`relative flex flex-col md:flex-row ${service.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                    } h-full items-center gap-8 md:gap-14 pt-14 md:pt-20 justify-center bg-background pb-16 sm:pb-24 md:pb-32 ${paddingX}`}
            >
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: service.id % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-1/2"
                >
                    <div className="bg-gray-50 rounded-2xl shadow-md p-2 md:p-3">
                        {service.id % 2 === 0 ? (
                            <img
                                src="/images/services2.jpg"
                                alt={service.title}
                                className="rounded-xl shadow-lg object-cover w-full h-auto md:h-[380px]"
                            />
                        ) : (
                            <img
                                src="/images/services.jpg"
                                alt={service.title}
                                className="rounded-xl shadow-lg object-cover w-full h-auto md:h-[380px]"
                            />
                        )}

                    </div>
                </motion.div>

                {/* Text Content */}
                <div className={`flex flex-col h-full items-center ${service.id % 2 === 0 ? "md:items-end" : "md:items-start"} justify-center text-center md:text-left w-full md:w-1/2 space-y-6`}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="font-nunito max-w-[650px]"
                    >
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-5">
                            {service.title}
                        </h1>
                        <p className="text-gray-800 text-sm md:text-base lg:text-lg mb-6 md:mb-7 mt-1">
                            {service.description}
                        </p>

                        <div className="text-gray-700 text-xs md:text-sm lg:text-base text-justify whitespace-pre-line mb-6 md:mb-7 max-w-[650px]">
                            {service.content}
                        </div>

                        {/* Why Choose Us */}
                        <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-lg text-gray-800 shadow-sm">
                            <h3 className="font-semibold text-primary mb-2 text-lg">Why Choose Grateful Tours?</h3>
                            <p className="text-sm md:text-base leading-relaxed">{service.answer}</p>
                        </div>

                        <CustomButton type='button' text="Book Now" className='mt-4 md:mt-6' onClick={() => router.push('/our-cars')} />
                    </motion.div>
                </div>
            </div>

        </div>

    );
};

export default ServiceDetail;
