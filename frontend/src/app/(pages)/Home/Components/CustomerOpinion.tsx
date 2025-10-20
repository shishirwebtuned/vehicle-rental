"use client";
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaStar, FaRegStar, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { testimonialsData } from "@/data/data";
import { paddingX } from "@/constant/constant";

const CustomerOpinion = () => {
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free-snap",
        renderMode: "performance",
        slides: {
            perView: 3,
            spacing: 20,
        },
        breakpoints: {
            "(max-width: 900px)": {
                slides: { perView: 2, spacing: 15 },
            },
            "(max-width: 640px)": {
                slides: { perView: 1, spacing: 10 },
            },
        },
    });

    // autoplay
    useEffect(() => {
        if (!slider) return;
        let timer: any;
        const autoPlay = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                slider.current?.next();
                autoPlay();
            }, 2500);
        };
        autoPlay();
        return () => clearTimeout(timer);
    }, [slider]);

    return (
        <section
            className={`bg-background py-16 flex flex-col gap-8 items-center justify-center ${paddingX}`}
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
            >
                <h2 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                    What Our <span className="text-primary">Customers</span> Say
                </h2>
            </motion.div>

            {/* Keen slider wrapper */}
            <div ref={sliderRef} className="keen-slider w-full mt-6">
                {testimonialsData.map((t) => (
                    <div key={t.id} className="keen-slider__slide flex justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-md w-[95%] sm:w-[95%] md:w-[95%] lg:w-[95%]">
                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) =>
                                    i < t.rating ? (
                                        <FaStar key={i} className="text-yellow-400 lg:text-base md:text-sm text-xs" />
                                    ) : (
                                        <FaRegStar key={i} className="text-yellow-400 lg:text-base md:text-sm text-xs" />
                                    )
                                )}
                            </div>
                            <p className="text-gray-700 mb-5 font-nunito text-xs md:text-sm lg:text-base leading-relaxed">
                                {t.review}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="font-semibold font-nunito text-sm md:text-base lg:text-lg text-black">
                                    {t.name}
                                </span>
                                <FaQuoteRight className="text-blue-200 text-xl md:text-2xl lg:text-3xl" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomerOpinion;
