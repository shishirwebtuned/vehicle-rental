"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
    { question: "How to book a car?", answer: "Go to 'Our Cars' and select your vehicle. Fill out the booking form." },
    { question: "What are your operating hours?", answer: "We operate from 8 AM to 8 PM, Monday to Sunday." },
    { question: "Do you provide airport transfers?", answer: "Yes! We provide airport pick-up and drop services." },
];

export const WhatsappChat = () => {
    const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([
        { from: "bot", text: "Hi! I'm Grateful Tours Assistant. How can I help you today?" },
    ]);
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const handleUserMessage = (msg: string) => {
        setMessages((prev) => [...prev, { from: "user", text: msg }]);

        const found = faqData.find((item) =>
            item.question.toLowerCase().includes(msg.toLowerCase())
        );

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { from: "bot", text: found ? found.answer : "Sorry, I can't answer that." },
            ]);
        }, 700);
    };

    useEffect(() => {
        if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    // WhatsApp URL
    const whatsappNumber = "+9779801170674"; // replace with your number
    const whatsappURL = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

    return (
        <>
            {/* Floating WhatsApp Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center shadow-lg z-50 cursor-pointer"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, y: [0, -10, 0] }}
                        transition={{ y: { duration: 0.6, repeat: Infinity }, scale: { duration: 0.3 } }}
                        exit={{ scale: 0 }}
                        whileHover={{ scale: 1.2 }}
                    >
                        <FaWhatsapp className="lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8 text-white" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Box */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-6 right-6 w-72 h-96 z-50 flex flex-col border rounded-xl shadow-lg overflow-hidden bg-white"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-green-500 text-white p-3 font-bold flex justify-between items-center">
                            <span>Grateful Tours</span>
                            <button onClick={() => setIsOpen(false)} className="font-bold text-white cursor-pointer">✕</button>
                        </div>

                        <div className="flex-1 p-3 overflow-y-auto space-y-2">
                            {messages.map((m, i) => (
                                <div
                                    key={i}
                                    className={`p-2 rounded-lg max-w-[80%] ${m.from === "bot" ? "bg-gray-100 text-black self-start" : "bg-green-100 text-black self-end"
                                        }`}
                                >
                                    {m.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* FAQ buttons */}
                        <div className="p-2 border-t flex flex-col gap-2">
                            {faqData.map((item, i) => (
                                <button
                                    key={i}
                                    className="bg-green-500 text-white px-2 py-1 rounded-md text-xs hover:bg-green-600 transition cursor-pointer"
                                    onClick={() => handleUserMessage(item.question)}
                                >
                                    {item.question}
                                </button>
                            ))}

                            {/* WhatsApp Button */}
                            <a
                                href={whatsappURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-700 text-white px-2 py-2 rounded-md text-sm text-center hover:bg-green-800 transition mt-2 cursor-pointer"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
