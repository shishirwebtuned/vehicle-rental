"use client";
import Image from "next/image";
import React from "react";

const images = [
    "/images/mgBlack.png",
    "/images/mgBlack.png",
    "/images/mgBlack.png",
    "/images/mgBlack.png",
    "/images/mgBlack.png",
];

const VehicleMarquee = () => {
    return (
        <div className="overflow-hidden w-full pb-10 pt-6 bg-background">
            <div className="marquee">
                {images.map((src, i) => (
                    <div key={`first-${i}`} className="flex-shrink-0 px-4">
                        <Image
                            src={src}
                            alt={`car-${i}`}
                            width={200}
                            height={100}
                            className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto"
                        />
                    </div>
                ))}

                {images.map((src, i) => (
                    <div key={`second-${i}`} className="flex-shrink-0 px-4">
                        <Image
                            src={src}
                            alt={`car-duplicate-${i}`}
                            width={200}
                            height={100}
                            className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VehicleMarquee;
