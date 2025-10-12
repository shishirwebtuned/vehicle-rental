import { CustomButton } from "@/components/shared/CustomButton";
import React from "react";

const HeroSection = () => {
    const formFields = [
        {
            id: "pickupLocation",
            label: "Pickup Location",
            type: "select",
            options: ["London Airport", "Manchester", "Birmingham"],
        },
        {
            id: "dropoffLocation",
            label: "Drop Off Location",
            type: "select",
            options: ["London Airport", "Manchester", "Birmingham"],
        },
        {
            id: "pickupDate",
            label: "Pickup Date",
            type: "date",
        },
        {
            id: "pickupTime",
            label: "Pickup Time",
            type: "time",
        },
        {
            id: "dropoffDate",
            label: "Drop Off Date",
            type: "date",
        },
        {
            id: "dropoffTime",
            label: "Drop Off Time",
            type: "time",
        },
    ];
    return (
        <div
            className="text-white pt-40 md:pt-32 h-full pb-12 md:pb-4 md:h-[90dvh] bg-cover bg-center"
            style={{ backgroundImage: "url(/images/background.jpg)" }}
        >
            <div className="w-full h-full flex flex-col items-center justify-center px-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-merriweather text-center mb-8">
                    Need a <span className="text-primary font-bold">Car</span> Fast? Rent
                    with Ease, <span className="text-primary font-bold">Drive</span> with
                    Confidence!
                </h1>

                <div className="bg-white/75 rounded-md shadow-md w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-5xl flex flex-col p-4 gap-5  font-nunito text-blue-600">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-3">
                        {formFields.map((field) => (
                            <div key={field.id} className="flex flex-col w-full">
                                <label
                                    htmlFor={field.id}
                                    className="lg:text-sm md:text-xs text-[10px] font-medium mb-1"
                                >
                                    {field.label}
                                </label>

                                {field.type === "select" ? (
                                    <select
                                        id={field.id}
                                        className="w-full bg-white px-3 py-2 focus:outline-none focus:ring focus:ring-primary lg:text-base md:text-sm text-xs"
                                    >
                                        {field.options?.map((option, i) => (
                                            <option key={i} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        id={field.id}
                                        type={field.type}
                                        className="w-full px-3 bg-white py-2 focus:outline-none focus:ring focus:ring-primary lg:text-base md:text-sm text-xs"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex w-full items-center justify-center">
                        <CustomButton text="Find Cars" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
