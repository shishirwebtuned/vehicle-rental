"use client";

import { paddingX } from "@/constant/constant";
import React from "react";

const page = () => {
    const termsData = [
        {
            title: "Insurance",
            content:
                "All our vehicles are covered with up to date insurance by well-established and licensed insurance companies of Nepal, covering vehicle and travelling passengers.",
        },
        {
            title: "Vehicle Rental Period",
            content:
                "We provide long term and short term rental services according to the need and request of our customers. Usually, we have daily, weekly, quarterly and yearly vehicle rental services.",
        },
        {
            title: "Cost",
            content:
                "We guarantee our best and unbeatable prices. Our cost varies with the type of vehicle and hiring time period. We also have different costs with or without driver and fuel. We can provide you a detailed quotation as per the need of your organization or company.",
        },
        {
            title: "Maintenance",
            content:
                "We arrange regular servicing and maintenance of our vehicles. In case a service vehicle needs urgent maintenance, we will manage to provide a substitute vehicle for your convenience.",
        },
    ];

    return (
        <div className="bg-white">
            <div
                className={`flex flex-col min-h-screen items-center pt-12 md:pt-20 justify-start font-nunito bg-white gap-8 md:gap-10 pb-20 ${paddingX}`}
            >
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                        <span className="text-primary">Terms & </span> Conditions
                    </h1>
                    <p className="max-w-3xl lg:text-lg md:text-base font-nunito text-center text-sm">
                        Please read our terms and conditions carefully before using our
                        services.
                    </p>
                </div>

                {/* Terms List */}
                <div className="w-full max-w-3xl space-y-8">
                    {termsData.map((term, index) => (
                        <div key={index} className="space-y-2">
                            <h2 className="text-lg font-semibold md:text-xl underline text-gray-800">
                                {term.title}
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                {term.content}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default page;
