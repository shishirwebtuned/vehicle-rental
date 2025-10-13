import { paddingX } from '@/constant/constant';
import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { GiWorld } from "react-icons/gi";

const page = () => {
    return (
        <div className='bg-white'>
            <div className={`flex flex-col min-h-screen items-center pt-40 md:pt-44 justify-center bg-background  pb-20 sm:pb-24 md:pb-28 ${paddingX}`}>
                <div className='flex md:flex-row flex-col w-full items-center justify-center'>
                    <div className='md:w-1/2 w-full flex justify-center items-center'>
                        <img src="/images/skoda.png" alt='About Us'
                            className="max-w-[85%] md:max-w-[80%] h-auto object-contain drop-shadow-lg" />
                    </div>
                    <div className="text-black pt-16 pb-8 text-left justify-start px-6 space-y-8 md:w-1/2 w-full flex flex-col items-start">
                        <h1 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                            <span className="text-primary">About </span> Us
                        </h1>
                        <p className="max-w-3xl lg:text-lg md:text-base font-nunito text-sm">
                            Service excellence for more than a decade!

                        </p>

                        <p className='max-w-4xl mx-auto lg:text-lg md:text-base font-nunito text-sm'>
                            <strong>Grateful Tours and Transportation Services</strong> offers
                            all kinds of vehicle rental, tours and transportation
                            services. We are a well trained and equipped
                            company to provide required services of vehicle
                            rental. We are dedicated in satisfying and
                            establishing good business relationship with our
                            clients providing them quality services.
                            Our mission/vission is to provide excellent vehicle
                            rental, tours and transportation services that
                            meets the expectation of our clients and, serving
                            companies and organizations of all sizes in Nepal.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`py-16 ${paddingX} bg-primary/60`}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 font-nunito">
                    {/* Location */}
                    <div className="flex items-center gap-3 text-center md:text-left">
                        <FaMapMarkerAlt className="text-[#0D1C44] lg:text-5xl md:text-4xl text-3xl" />
                        <div>
                            <p className="text-[#0D1C44] font-bold lg:text-xl md:text-lg text-base tracking-wide">
                                GAIRIDHARA,
                            </p>
                            <p className="text-gray-700 font-medium lg:text-xl md:text-lg text-base">
                                KATHMANDU, NEPAL
                            </p>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="flex items-center gap-3 text-center md:text-left">
                        <GiWorld className="text-[#0D1C44] lg:text-5xl md:text-4xl text-3xl" />
                        <div>
                            <p className="text-[#0D1C44] font-bold lg:text-xl md:text-lg text-base">
                                SERVICES ALL
                            </p>
                            <p className="text-gray-700 font-medium lg:text-xl md:text-lg text-base">
                                OVER NEPAL
                            </p>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center gap-3 text-center md:text-left">
                        <div className="flex items-start">
                            <span className="text-[#0D1C44] font-extrabold lg:text-6xl md:text-5xl text-4xl">10</span>
                            <BsPlus className="text-[#0D1C44] text-xl md:text-2xl font-bold" />
                        </div>
                        <div>
                            <p className="text-[#0D1C44] font-bold lg:text-xl md:text-lg text-base">
                                YEARS OF
                            </p>
                            <p className="text-gray-700 font-medium lg:text-xl md:text-lg text-base">
                                EXPERIENCE
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
