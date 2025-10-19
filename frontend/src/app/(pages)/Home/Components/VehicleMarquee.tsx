"use client";
import Image from "next/image";
import React from "react";

const images = [
    "/images/marquee/mglogo.png",
    "/images/marquee/bydlogo.png",
    "/images/marquee/ashoklogo.png",
    "/images/marquee/higerlogo.png",
    "/images/marquee/hyundailogo.png",
    "/images/marquee/mahindralogo.webp",
    "/images/marquee/nissanlogo.png",
    "/images/marquee/skodalogo.png",
    "/images/marquee/suzukilogo.jpg",
    "/images/marquee/tatalogo.png",
    "/images/marquee/toyotalogo.png",
];

const VehicleMarquee = () => {
    return (
        <div className="overflow-hidden w-full pb-10 pt-6 bg-background">
            <div className="marquee flex flex-row items-center">
                {images.concat(images).map((src, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 px-4 w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 flex items-center justify-center bg-transparent"
                    >
                        <Image
                            src={src}
                            alt={`car-${i}`}
                            width={200}
                            height={100}
                            className="object-contain w-full h-full"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default VehicleMarquee;
