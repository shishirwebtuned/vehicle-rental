"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
    const pathname = usePathname();

    const segments = pathname
        .split("/")
        .filter((seg) => seg !== "" && seg !== "(pages)");

    const title =
        segments.length > 0
            ? segments[segments.length - 1].replace(/-/g, " ")
            : "Home";

    const capitalize = (text: string) =>
        text
            .split(" ")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");

    // from-primary/90 to-blue-400/80
    // from-primary/70 to-blue-400/60

    return (
        <section className="relative w- bg-gradient-to-r from-primary/90 to-blue-400/80 flex items-center justify-center text-white pt-28 sm:pt-28 md:pt-28 md:pb-8 pb-8">
            <div className="absolute inset-0 bg-black/20"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center space-y-2 px-4"
            >
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-merriweather font-semibold">
                    {capitalize(title)}
                </h1>

                <div className="flex justify-center items-center flex-wrap gap-2 text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-100 font-nunito">
                    <Link href="/" className="hover:text-white/90 transition">
                        Home
                    </Link>
                    {segments.map((seg, index) => {
                        const path = "/" + segments.slice(0, index + 1).join("/");
                        return (
                            <React.Fragment key={path}>
                                <span className="text-white/60">/</span>
                                {index === segments.length - 1 ? (
                                    <span className="text-white font-semibold">
                                        {capitalize(seg.replace(/-/g, " "))}
                                    </span>
                                ) : (
                                    <Link href={path} className="hover:text-white/90 transition">
                                        {capitalize(seg.replace(/-/g, " "))}
                                    </Link>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Banner;
