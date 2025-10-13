"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const PageHeader = () => {
    const pathname = usePathname();
    const pageName = pathname
        ?.split("/")
        .filter(Boolean)
        .pop()
        ?.replace(/-/g, " ")
        ?.replace(/\b\w/g, (l) => l.toUpperCase()) || "Home";

    return (
        <div className="relative w-full bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] text-white py-16 md:py-20 flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="absolute left-0 top-0 w-1/3 h-full bg-[url('/images/pattern-left.png')] bg-no-repeat bg-left opacity-10" />
            <div className="absolute right-0 bottom-0 w-1/3 h-full bg-[url('/images/pattern-right.png')] bg-no-repeat bg-right opacity-10" />

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-wide">
                {pageName}
            </h1>

            <div className="flex items-center justify-center space-x-2 text-sm md:text-base">
                <Link
                    href="/"
                    className="text-gray-300 hover:text-[#f4a025] transition-colors duration-300"
                >
                    Home
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#f4a025] font-medium">{pageName}</span>
            </div>
        </div>
    );
};

export default PageHeader;
