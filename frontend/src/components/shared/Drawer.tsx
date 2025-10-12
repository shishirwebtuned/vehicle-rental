"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    width?: string;
    children: ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({
    isOpen,
    onClose,
    width = "w-3/5",
    children,
}) => {


    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);


    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-40"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />

                    <motion.div
                        className={`fixed top-0 right-0 h-full min-h-screen ${width} bg-white z-50 shadow-xl flex flex-col`}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                    >
                        <div className="flex justify-start p-3 sm:p-4">
                            <button onClick={onClose}>
                                <HiOutlineX className="sm:w-7 sm:h-7 w-6 h-6 text-gray-700 cursor-pointer" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto pl-3 pr-4">{children}</div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>

    );
};

export default Drawer;
