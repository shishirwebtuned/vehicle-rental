import Image from "next/image";
import React from "react";
import { paddingX } from "@/constant/constant";

const page = () => {
    // Generate image paths dynamically
    const images = Array.from({ length: 23 }, (_, i) => `/images/gallery/gallery${i + 1}.jpg`);

    return (
        <div className="bg-white">
            <div
                className={`flex flex-col min-h-screen items-center pt-40 md:pt-44 justify-center pb-20 sm:pb-24 md:pb-28 ${paddingX}`}
            >
                <h1 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold mb-12">
                    <span className="text-primary">Our </span> Gallery
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                width={500}
                                height={400}
                                className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;
