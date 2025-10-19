import { CustomButton } from '@/components/shared/CustomButton';
import { paddingX } from '@/constant/constant';
import { makesDifferentData } from '@/data/data';
import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { GiWorld } from "react-icons/gi";

const page = () => {
    return (
        <div className='bg-white'>
            <div className={`flex flex-col min-h-screen items-center pt-20 md:pt-44 justify-center bg-background pb-10 sm:pb-20 md:pb-28 ${paddingX}`}>
                <div className='flex md:flex-row flex-col-reverse w-full items-center justify-center'>
                    <div className="md:w-1/2 w-full flex relative  justify-center items-center mt-6 md:mt-0">
                        <div className="absolute w-[75%] h-[75%] bg-gradient-to-tr from-orange-400/60 via-yellow-300/40 to-transparent blur-3xl rounded-full -z-0"></div>

                        <div className="absolute inset-0 flex justify-center items-center -z-0">
                            <div className="w-[85%] md:w-[80%] h-[90%] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl" />
                        </div>

                        <img
                            src="/images/hyundaicreta.jpg"
                            alt="About Us"
                            className="relative z-10 max-w-[85%] md:max-w-[80%] h-auto object-cover rounded-2xl drop-shadow-2xl transform transition-all duration-500 ease-out hover:scale-105"
                        />

                        {/* 🔸 Floating stats overlay */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-xl md:px-6 px-6 lg:px-8 md:py-4 py-2 rounded-2xl shadow-xl flex items-center justify-center gap-5 md:gap-8 border border-white/40 z-20 transition-all duration-500 hover:scale-105 hover:shadow-2xl font-merriweather">
                            {/* Experience */}
                            <div className="flex flex-col items-center group ">
                                <p className="md:text-xl text-lg lg:text-2xl font-extrabold text-primary group-hover:text-blue-600 transition-colors duration-300">
                                    10+
                                </p>
                                <p className="lg:text-sm md:text-xs text-[10px] font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    Years Experience
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="w-[1.5px] h-10 bg-gradient-to-b from-gray-300 to-gray-200"></div>

                            {/* Happy Clients */}
                            <div className="flex flex-col items-center group">
                                <p className="md:text-xl text-lg lg:text-2xl font-extrabold text-primary group-hover:text-blue-600 transition-colors duration-300">
                                    10000+
                                </p>
                                <p className="lg:text-sm md:text-xs text-[10px] font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    Happy Clients
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="text-black pt-20 md:pt-12 text-left justify-start px-6 md:space-y-5 space-y-4 lg:space-y-6 md:w-1/2 w-full flex flex-col items-start">
                        {/* Small Subtitle */}
                        {/* <p className="uppercase tracking-wider text-sm text-primary font-semibold">
                            Who We Are
                        </p> */}

                        {/* Main Title */}
                        <h1 className="font-merriweather md:text-3xl text-2xl lg:text-4xl font-bold">
                            <span className="text-primary">About</span> Us
                        </h1>

                        {/* Intro Tagline */}
                        <p className="max-w-3xl text-gray-700 lg:text-lg md:text-base font-nunito italic">
                            Service excellence and trust — building memorable journeys for over a decade.
                        </p>

                        {/* Main Description */}
                        <p className="max-w-4xl lg:text-lg md:text-base font-nunito text-gray-800 leading-relaxed">
                            <strong className="text-primary">Grateful Tours and Transportation Services</strong>
                            &nbsp;offers premium vehicle rental, tour, and transportation services across Nepal.
                            With a decade of proven experience, we pride ourselves on delivering
                            <span className="font-semibold"> comfort</span>,
                            <span className="font-semibold"> safety</span>, and
                            <span className="font-semibold"> reliability</span> to every customer.
                            Our team of well-trained professionals ensures your travel experience is smooth,
                            convenient, and unforgettable.
                        </p>

                        <p className="max-w-4xl lg:text-lg md:text-base font-nunito text-gray-800 leading-relaxed">
                            Whether you’re an individual traveler, a family, or an organization,
                            we provide personalized solutions that meet your needs.
                            Our mission is to set new benchmarks in the
                            <span className="text-primary font-semibold"> vehicle rental </span>
                            and <span className="text-primary font-semibold"> transportation industry </span>
                            by maintaining high service standards, punctuality, and professionalism.
                        </p>

                        {/* Call to Action Button */}
                        {/* <button className="mt-2 bg-primary text-white px-6 py-[10px] rounded-md font-semibold hover:bg-transparent cursor-pointer hover:text-primary font-nunito transition duration-300 border-2 border-primary">
                            Learn More
                        </button> */}

                    </div>

                </div>
            </div>
            <div className={`bg-white py-16 ${paddingX}`}>
                <div className="text-center">
                    <h2 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">What Makes Us
                        <span className="text-primary ml-2">Different </span>
                    </h2>
                    <p className="text-gray-600 mb-16 mt-5 font-nunito lg:text-lg md:text-base text-sm">
                        We ensure you with the best services to meet your satisfaction in
                        all of our services.
                    </p>

                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 font-nunito md:gap-6 sm:gap-5 gap-4 lg:gap-7">
                        {makesDifferentData.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#f4f4f4] lg:p-6 md:p-5 p-4 rounded-xl shadow-md hover:shadow-xl transition-all ease-linear group duration-300 cursor-pointer hover:bg-primary"
                            >
                                <div className="group-hover:bg-white bg-primary lg:w-16 lg:h-16 md:w-14 md:h-14 w-12 h-12 flex items-center justify-center rounded-lg mb-4 md:mb-6 mx-auto text-white group-hover:text-primary transition duration-300 ease-in-out">
                                    <feature.icon className='lg:text-3xl md:text-2xl text-xl' />
                                </div>
                                <h3 className="lg:text-xl md:text-lg text-base font-semibold mb-2 text-center group-hover:text-white transition duration-300 ease-in-out" >{feature.title}</h3>
                                <p className="text-gray-600 text-center group-hover:text-white transition duration-300 ease-in-out lg:text-base md:text-sm text-xs">{feature.description}</p>
                            </div>
                        ))}
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
