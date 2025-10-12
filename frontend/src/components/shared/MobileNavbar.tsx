"use client";
import Link from "next/link";
import { navItems } from "@/data/data";
import { useState } from "react";

interface MobileNavProps {
    onClose: () => void;
}

const MobileNavbar: React.FC<MobileNavProps> = ({ onClose }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);



    return (
        <div className="flex flex-col h-full text-black">
            <nav className="flex flex-col justify-start h-full items-center text-base font-nunito pt-2 pb-3">
                <div className="flex flex-col items-start justify-start space-y-1 w-full">
                    {navItems.map((link, index) => (

                        <Link
                            key={index}
                            href={link.href ?? "#"}
                            onClick={onClose}
                            className="w-full px-2 py-2 text-left font-semibold text-[#1b1b1b] hover:bg-primary/15 hover:text-primary rounded-md cursor-pointer transition-all ease-in-out duration-300"
                        >
                            {link.label}
                        </Link>
                    )
                    )}
                </div>
                <Link
                    href="/login"
                    onClick={onClose}
                    className="bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:text-primary hover:bg-white border-2 border-primary transition-all ease-in-out duration-300 mt-8"
                >
                    Sign in
                </Link>

            </nav>
        </div>
    );
};

export default MobileNavbar;
