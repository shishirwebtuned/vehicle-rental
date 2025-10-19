"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

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
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg z-50 hover:bg-green-500 transition cursor-pointer"
                >
                    <FaWhatsapp className="w-10 h-10 text-white" />
                </button>
            )}

            {/* Chat Box */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-72 h-96 z-50 flex flex-col border rounded-xl shadow-lg overflow-hidden bg-white">
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
                </div>
            )}
        </>
    );
};
