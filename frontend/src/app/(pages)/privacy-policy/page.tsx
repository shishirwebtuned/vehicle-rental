"use client";

import { paddingX } from "@/constant/constant";
import React from "react";

const page = () => {
    const privacyData = [
        {
            title: "Information We Collect",
            content:
                "We collect personal information such as your name, contact number, email address, and booking details when you use our services or communicate with us. Additionally, we may collect limited technical data like browser type and IP address for security and analytics purposes.",
        },
        {
            title: "How We Use Your Information",
            content:
                "Your information is used to confirm bookings, provide customer support, process payments, and enhance our services. We may also use your data to send relevant updates or promotional offers, but you can opt out anytime.",
        },
        {
            title: "Data Security",
            content:
                "We take reasonable precautions to protect your personal data against unauthorized access, disclosure, or misuse. All sensitive information, including payment details, is transmitted using secure encryption protocols.",
        },
        {
            title: "Sharing of Information",
            content:
                "We do not sell or rent your personal information. However, we may share it with trusted partners or service providers who help us operate our business—such as payment processors or drivers—under strict confidentiality agreements.",
        },
        {
            title: "Cookies and Tracking",
            content:
                "Our website uses cookies to improve user experience and analyze website traffic. You can choose to disable cookies through your browser settings, though this may affect some features of our website.",
        },
        {
            title: "Your Rights",
            content:
                "You have the right to access, correct, or request deletion of your personal data at any time. Please contact us if you wish to exercise these rights or have any concerns about your data privacy.",
        },
        {
            title: "Changes to This Policy",
            content:
                "We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date. Continued use of our services after such changes indicates your acceptance of the revised policy.",
        },
    ];

    return (
        <div className="bg-white">
            <div
                className={`flex flex-col min-h-screen items-center pt-32 md:pt-40 justify-start font-nunito bg-white gap-8 md:gap-10 pb-20 ${paddingX}`}
            >
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                        <span className="text-primary">Privacy</span> Policy
                    </h1>
                    <p className="max-w-3xl lg:text-lg md:text-base font-nunito text-center text-sm text-gray-700">
                        This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
                    </p>
                </div>

                {/* Privacy Policy List */}
                <div className="w-full max-w-3xl space-y-8">
                    {privacyData.map((item, index) => (
                        <div key={index} className="space-y-2">
                            <h2 className="text-lg font-semibold md:text-xl underline text-gray-800">
                                {item.title}
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;
