"use client";
import React, { useState } from "react";
import { Field, FormikProvider, useFormik } from "formik";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import DotSpinner from "./Spinner/DotSpinner";

interface FieldProps {
    name: string;
    label?: string;
    type: string;
    placeholder?: string;
    icon?: React.ReactNode;
    options?: { value: string; label: string }[];
}

interface MasterFormProps {
    fields: FieldProps[];
    validationSchema: any;
    onSubmit: (values: Record<string, string>) => void;
    buttonLabel?: string;
    fieldStyle?: string;
    selectStyle?: string;
    buttonStyle?: string;
    buttonMargin?: string;
    children?: any;
    onClose: () => void;
    initialValues?: Record<string, any>
}

const MasterFormDash: React.FC<MasterFormProps> = ({
    fields,
    validationSchema,
    onSubmit,
    buttonLabel,
    fieldStyle,
    selectStyle,
    buttonStyle,
    buttonMargin,
    onClose,
    children,
    initialValues
}) => {

    const [passwordVisibility, setPasswordVisibility] = useState<Record<string, boolean>>({});

    const togglePasswordVisibility = (fieldName: string) => {
        setPasswordVisibility((prev) => ({
            ...prev,
            [fieldName]: !prev[fieldName],
        }));
    };

    const formik = useFormik({
        initialValues: initialValues || fields.reduce((acc, field) => {
            acc[field.name] = "";
            return acc;
        }, {} as Record<string, any>),
        validationSchema,
        onSubmit,
    });

    const { errors, touched, getFieldProps, setFieldValue, isSubmitting, handleSubmit } = formik;

    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit} autoComplete="off">
                {fields.map(({ name, label, type, placeholder, icon, options }, index) => (
                    <div className="mb-3" key={index}>
                        <label htmlFor={name} className="block mb-1 text-sm text-gray-900 font-nunito">
                            {label}
                        </label>
                        <div className="relative flex flex-col gap-0">
                            {icon && (
                                <div className="absolute inset-y-0 flex items-center left-3">
                                    {icon}
                                </div>
                            )}
                            {type === "file" ? (
                                <input
                                    id={name}
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) => {
                                        const file = event.currentTarget.files?.[0] || null;
                                        setFieldValue(name, file);
                                    }}
                                    className={`w-full ${fieldStyle} py-3 text-sm font-nunito`}
                                />
                            ) : type === 'select' ? (
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
                            ) : type === 'textarea-array' ? (
                                <textarea
                                    id={name}
                                    placeholder={placeholder}
                                    {...getFieldProps(name)}
                                    className={`w-full ${fieldStyle} py-2 text-sm font-nunito`}
                                    rows={3}
                                />
                            ) : type === 'textarea' ? (
                                <textarea
                                    id={name}
                                    placeholder={placeholder}
                                    {...getFieldProps(name)}
                                    className={`w-full ${fieldStyle} py-2 text-sm font-nunito`}
                                    rows={2}
                                />
                            ) : (
                                <div className="">
                                    <Field
                                        id={name}
                                        type={type === "password" && passwordVisibility[name] ? "text" : type}
                                        placeholder={placeholder}
                                        {...getFieldProps(name)}
                                        className={`w-full ${fieldStyle} py-2 ${icon ? "pl-12" : "pl-1"} text-sm font-nunito`}
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
                        {(errors as any)[name] && (touched as any)[name] && (
                            <span className="block mt-2 text-sm font-semibold text-red-500 font-nunito">
                                {(errors as any)[name]}
                            </span>
                        )}
                    </div>
                ))}
                {children ? <>{children}</> : null}
                <div className={`flex justify-center items-center gap-4 ${buttonMargin || "mt-8 md:mt-10"}`}>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-auto px-8 py-[10px] flex cursor-pointer items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-md font-marcellus md:text-base text-base sm:text-base lg:text-[17px]"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className={`${buttonStyle} w-auto flex items-center justify-center px-8 py-[10px] gap-4 bg-primary hover:bg-[#48aee0] cursor-pointer text-white md:text-base text-base sm:text-base lg:text-[17px] font-marcellus rounded-md transition-all ease-in-out duration-300`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <DotSpinner customClassName="w-10" /> : buttonLabel}
                    </button>
                </div>

            </form>
        </FormikProvider>
    );
};

export default MasterFormDash;
