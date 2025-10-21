"use client";

import { paddingX } from '@/constant/constant';
import React from 'react';
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
    TbTrekking: require('react-icons/tb').TbTrekking,
    IoIosBoat: require('react-icons/io').IoIosBoat,
    IoFastFood: require('react-icons/io5').IoFastFood,
    FaCarSide: require('react-icons/fa6').FaCarSide,
};

type ServiceClientProps = {
    service: {
        title: string;
        description: string;
        content: string;
        icon: string;
    };
};

const ServiceDetail = ({ service }: ServiceClientProps) => {

    const Icon = iconMap[service.icon];


    return (
        <div className='bg-white'>
            <div className={`flex flex-col h-full items-center pt-14 md:pt-16 justify-center bg-background pb-12 sm:pb-20 md:pb-28 ${paddingX}`}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    {Icon && <Icon className="text-primary text-5xl sm:text-5xl md:text-6xl lg:text-7xl mb-4" />}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="font-nunito">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-4">{service.title}</h1>
                    <p className="text-gray-800 text-base lg:text-xl md:text-lg mb-6 text-center">{service.description}</p>
                    <div className="text-gray-700 text-sm lg:text-lg md:text-base text-justify leading-relaxed whitespace-pre-line">
                        {service.content}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ServiceDetail;
