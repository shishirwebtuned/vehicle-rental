import { paddingX } from "@/constant/constant";
import { socialLinks } from "@/data/data";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { MdCall } from "react-icons/md";

const Topbar = () => {
    return (
        <div className="w-full font-sans border-b border-gray-200 bg-gray-50">
            <div
                className={`flex flex-wrap flex-row justify-between sm:justify-between items-center gap-x-4 gap-y-2 sm:gap-x-2 sm:gap-y-0 py-2 text-sm text-gray-700 ${paddingX}`}
            >
                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 md:gap-x-4 md:text-sm text-[10px] sm:text-xs lg:text-base">
                    <div className="hover:text-primary cursor-pointer transition-colors flex flex-row items-center gap-1">
                        <MdCall className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5C9CBC]" />
                        <span className="hover:text-[#5C9CBC] hover:underline transition-all duration-300 ease-in-out">
                            +977-01-4004541
                        </span>
                    </div>
                    <div className="hover:text-primary cursor-pointer transition-colors flex flex-row items-center gap-1">
                        <IoMdMail className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5C9CBC]" />
                        <span className="hover:text-[#5C9CBC] hover:underline transition-all duration-300 ease-in-out">
                            info@gratefulvehicleservices.com
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                    {socialLinks.map(({ id, src, alt, href, hover }) => (
                        <a
                            key={id}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition ${hover}`}
                        >
                            <img
                                src={src}
                                alt={alt}
                                className="md:w-6 md:h-6 sm:w-5 sm:h-5 w-4 h-4 object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Topbar;
