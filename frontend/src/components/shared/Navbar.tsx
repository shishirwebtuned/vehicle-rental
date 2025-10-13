"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { paddingX } from "@/constant/constant";
import { navItems } from "@/data/data";
import { IoMenu } from "react-icons/io5";
import Drawer from "./Drawer";
import MobileNavbar from "./MobileNavbar";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get("userToken");
        setIsLoggedIn(!!token);
    }, []);

    useEffect(() => {
        if (pathname === "/") {
            const handleScroll = () => {
                setScrolled(window.scrollY > 50);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            setScrolled(true);
        }
    }, [pathname]);

    const handleClick = () => {
        const userRole = Cookies.get("userRole");

        if (userRole === "customer") {
            router.push("/dashboard");
        } else if (userRole === "admin") {
            router.push("/admin-dash");
        } else {
            router.push("/login");
        }
    };


    return (
        <div
            className={`w-full z-40 transition-all ${paddingX} duration-300 ease-linear ${scrolled ? "bg-white shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="flex items-center justify-between py-1">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Grateful Logo"
                        width={500}
                        height={500}
                        className="lg:w-18 lg:h-18 md:w-16 md:h-16 sm:w-14 sm:h-14 w-10 h-10 object-contain"
                    />
                </Link>

                <nav className="hidden md:flex items-center md:gap-5 xl:gap-8 lg:gap-7">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`font-bold font-nunito md:text-xs text-xs lg:text-sm transition-colors ease-in-out duration-200 ${scrolled
                                ? "text-primary hover:text-black"
                                : "text-white hover:text-primary"
                                }`}
                        >
                            {item.label.toUpperCase()}
                        </Link>
                    ))}
                </nav>
                {isLoggedIn ?
                    <button
                        onClick={handleClick}
                        className={`px-5 hidden md:flex py-2 rounded-sm border-2 font-semibold cursor-pointer transition-all ease-in-out duration-300 ${scrolled
                            ? "border-primary text-primary hover:bg-primary hover:text-white"
                            : "border-white text-white hover:bg-primary hover:border-primary"
                            }`}
                    >
                        Profile
                    </button> :
                    <button
                        onClick={() => router.push("/login")}
                        className={`px-5 hidden md:flex py-2 rounded-sm border-2 font-semibold cursor-pointer transition-all ease-in-out duration-300 ${scrolled
                            ? "border-primary text-primary hover:bg-primary hover:text-white"
                            : "border-white text-white hover:bg-primary hover:border-primary"
                            }`}
                    >
                        Sign In
                    </button>
                }


                <div className="flex md:hidden items-center justify-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        <IoMenu
                            className={`transition-all ease-in-out duration-200 ${scrolled ? "text-black" : "text-white"
                                }`}
                        />
                    </button>
                </div>
            </div>

            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} width="w-[70%]">
                <MobileNavbar onClose={() => setIsOpen(false)} />
            </Drawer>
        </div>
    );
};

export default Navbar;
