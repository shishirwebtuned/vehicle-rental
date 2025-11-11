"use client";
import React, { useState } from "react";
import type { FormikProps } from "formik";
import { FormValues } from "@/app/(pages)/Home/Components/HeroSection";

interface LocationInputProps {
    label: string;
    name: keyof FormValues;
    formik: FormikProps<FormValues>;
    className?: string;
    labeltextSize?: string;// optional custom class
}

const LocationInput: React.FC<LocationInputProps> = ({ label, name, formik, className, labeltextSize }) => {
    const [suggestions, setSuggestions] = useState<any[]>([]);

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        formik.setFieldValue(name, value);

        if (value.length > 2) {
            try {
                const res = await fetch(
                    `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
                        value
                    )}&filter=countrycode:np&format=json&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_KEY}`
                );
                const data = await res.json();
                setSuggestions(data.results || []);
            } catch (err) {
                console.error("Geoapify API error:", err);
                setSuggestions([]);
            }
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div className="relative w-full">
            <label className={`block ${labeltextSize || "text-sm"} font-medium mb-1`}>{label}</label>
            <input
                type="text"
                name={name}
                value={formik.values[name] as string}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                className={`${className || "w-full px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-primary lg:text-base md:text-sm text-xs"}`}
                placeholder="Enter location, street, landmark..."
            />
            {suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border rounded-md mt-1 z-10 max-h-40 overflow-y-auto w-full">
                    {suggestions.map((s: any, i: number) => (
                        <div
                            key={i}
                            onClick={() => {
                                formik.setFieldValue(name, s.formatted);
                                setSuggestions([]);
                            }}
                            className="px-3 py-1 cursor-pointer hover:bg-gray-100 text-sm"
                        >
                            {s.formatted}
                        </div>
                    ))}
                </div>
            )}

            {formik.touched[name] && formik.errors[name] && (
                <p className="text-red-500 text-sm mt-1">{formik.errors[name] as string}</p>
            )}
        </div>
    );
};

export default LocationInput;
