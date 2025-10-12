"use client";
import { paddingX } from '@/constant/constant'
import { testimonialsData } from '@/data/data'
import React from 'react'
import OurCars from './OurCars'
import { FaQuoteRight, FaRegStar, FaStar } from 'react-icons/fa';
import dynamic from 'next/dynamic'
const Slider = dynamic(() => import("react-slick"), { ssr: false });


const CustomerOpinion = () => {

    const numberData = [
        { text: "No. of Vehicles", number: "27" },
        { text: "Years of Experience", number: "15" },
        { text: "Happy Customers", number: "10K+", suffix: "/month" },
        { text: "No. of Staffs", number: "37" },
    ]

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div
            className="relative bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/images/mgInterior.jpg')" }}
        >
            <OurCars />


            <section className={`flex items-center justify-center w-full bg-black/60 py-12 sm:py-16 md:py-20 ${paddingX}`}>
                <div className="text-white text-center w-full space-y-20">
                    <h2 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                        <span className="text-primary">Drive </span> by Experience, <span className="text-primary">Backed</span> by a Fleet
                    </h2>
                    <div className='sm:grid-cols-2 grid-cols-1 grid lg:grid-cols-4 w-full justify-between px-16 gap-x-2 gap-y-5'>
                        {numberData.map((item, index) => (
                            <div key={index} className='flex flex-col items-center justify-center'>
                                <h2 className='text-primary font-merriweather font-bold lg:text-6xl whitespace-nowrap md:text-5xl sm:text-4xl text-3xl'>{item.number}{" "}
                                    {item.suffix && (
                                        <span className="lg:text-lg md:text-base text-sm align-baseline font-medium -ml-2 text-white">
                                            {item.suffix}
                                        </span>
                                    )}
                                </h2>
                                <span className='text-white font-nunito md:text-lg sm:text-base text-sm lg:text-xl'>{item.text}</span>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <section className={`bg-background h-full py-14 sm:py-16 md:py-20 flex flex-col gap-8 items-center justify-center ${paddingX}`}>
                <div className="text-center">
                    <h2 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                        What Our <span className="text-primary">Customers</span> Say
                    </h2>
                </div>
                <div className="w-full px-4 mt-4">
                    <Slider {...settings}>
                        {testimonialsData.map((t) => (
                            <div key={t.id} className="px-3">
                                <div className="bg-white p-6 rounded-lg shadow-[0px_0px_10px_rgba(92,156,188,0.26)] flex flex-col justify-between h-full">
                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) =>
                                            i < t.rating ? (
                                                <FaStar key={i} className="text-yellow-400" />
                                            ) : (
                                                <FaRegStar key={i} className="text-yellow-400" />
                                            )
                                        )}
                                    </div>

                                    {/* Review */}
                                    <p className="text-gray-600 mb-6 font-nunito md:text-sm text-xs lg:text-base leading-relaxed">{t.review}</p>

                                    {/* Name + Quote */}
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold font-nunito md:text-base text-sm lg:text-lg text-black">{t.name}</span>
                                        <FaQuoteRight className="text-blue-200 md:text-3xl text-2xl lg:text-4xl" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </div>

    )
}

export default CustomerOpinion;
