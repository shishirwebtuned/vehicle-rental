"use client";
import React, { useState } from "react";
import { Field, FormikProvider, useFormik } from "formik";
import { RiArrowRightLine } from "react-icons/ri";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import DotSpinner from "./Spinner/DotSpinner";

interface FieldProps {
    name: string;
    label?: string;
    type: string;
    placeholder?: string;
    icon?: React.ReactNode; // Change icon to ReactNode
    options?: { value: string; label: string }[];
}

interface MasterFormProps {
    fields: FieldProps[];
    validationSchema: any;
    onSubmit: (values: Record<string, string>) => void;
    buttonLabel?: string;
    additionalContent?: React.ReactNode;
    fieldStyle?: string;
    selectStyle?: string;
    buttonStyle?: string;
    buttonMargin?: string;
}

const MasterForm: React.FC<MasterFormProps> = ({
    fields,
    validationSchema,
    onSubmit,
    buttonLabel,
    additionalContent,
    fieldStyle,
    selectStyle,
    buttonStyle,
    buttonMargin,
}) => {

    const [passwordVisibility, setPasswordVisibility] = useState<Record<string, boolean>>({});

    const togglePasswordVisibility = (fieldName: string) => {
        setPasswordVisibility((prev) => ({
            ...prev,
            [fieldName]: !prev[fieldName],
        }));
    };

    const formik = useFormik({
        initialValues: fields.reduce((acc, field) => {
            acc[field.name] = "";
            return acc;
        }, {} as Record<string, string>),
        validationSchema,
        onSubmit,
    });

    const { errors, touched, getFieldProps, isSubmitting, handleSubmit } = formik;

    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit} autoComplete="off">
                {fields.map(({ name, label, type, placeholder, icon, options }, index) => (
                    <div className="mb-3" key={index}>
                        <label htmlFor={name} className="block mb-1 text-sm text-gray-600 font-nunito">
                            {label}
                        </label>
                        <div className="relative flex flex-col gap-0">
                            {icon && (
                                <div className="absolute inset-y-0 flex items-center left-3">
                                    {icon}
                                </div>
                            )}

                            {type === 'select' ? (
                                <Field
                                    as="select"
                                    id={name}
                                    {...getFieldProps(name)}
                                    className={`w-full ${selectStyle} py-2 ${icon ? "pl-12" : "pl-1"} text-sm font-nunito`}
                                >
                                    <option value="" disabled>
                                        {placeholder || "Select an option"}
                                    </option>
                                    {options?.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </Field>
                            ) : (
                                <div className="">
                                    <Field
                                        id={name}
                                        type={type === "password" && passwordVisibility[name] ? "text" : type}
                                        placeholder={placeholder}
                                        {...getFieldProps(name)}
                                        className={`w-full ${fieldStyle} py-3 ${icon ? "pl-12" : "pl-1"} text-sm font-nunito`}
                                    />
                                    {type === "password" && (
                                        <button
                                            type="button"
                                            onClick={() => togglePasswordVisibility(name)}
                                            className="absolute cursor-pointer inset-y-0 flex items-center right-3"
                                        >
                                            {passwordVisibility[name] ? (
                                                <MdVisibilityOff size={20} color="#024756" />
                                            ) : (
                                                <MdVisibility size={20} color="#024756" />
                                            )}
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                        {errors[name] && touched[name] && (
                            <span className="block mt-2 text-sm font-semibold text-red-500 font-nunito">{errors[name]}</span>
                        )}
                    </div>
                ))}

                {additionalContent}

                <div className={`flex justify-center items-center ${buttonMargin || "mt-8 md:mt-10"}`}>
                    <button
                        type="submit"
                        className={`${buttonStyle} w-full flex items-center justify-center gap-4 bg-primary hover:bg-[#48aee0] cursor-pointer text-white md:text-base text-base sm:text-base lg:text-[17px] font-marcellus py-3 rounded-xs mb-4 transition-all ease-in-out duration-300`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <DotSpinner customClassName="w-10" /> : buttonLabel}
                        <div className="flex bg-white rounded-full p-1">
                            <RiArrowRightLine size={20} className="relative z-10 text-black lg:scale-100 md:scale-95 scale-90" />
                        </div>
                    </button>
                </div>
            </form>
        </FormikProvider>
    );
};

export default MasterForm;
