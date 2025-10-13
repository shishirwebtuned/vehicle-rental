"use client"

import * as Yup from "yup";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useVerifyOtpMutation } from "@/redux/api/rest/mutation/authApi";
import toast from "react-hot-toast";
import DotSpinner from "@/components/shared/Spinner/DotSpinner";
import { RiArrowRightLine } from "react-icons/ri";



const EmailVerification = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [getVerifyOtp] = useVerifyOtpMutation();
    // const [isOtpRequestAllowed, setIsOtpRequestAllowed] = useState(true);
    // const [timeRemaining, setTimeRemaining] = useState(0);
    const router = useRouter();
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem("emailForOtp");
        setEmail(storedEmail);
    }, []);


    const fields = [
        { name: "otp1", label: "OTP Digit 1" },
        { name: "otp2", label: "OTP Digit 2" },
        { name: "otp3", label: "OTP Digit 3" },
        { name: "otp4", label: "OTP Digit 4" },
        { name: "otp5", label: "OTP Digit 5" },
        { name: "otp6", label: "OTP Digit 6" },
    ];

    const OtpSchema = Yup.object().shape(
        fields.reduce((schema: Record<string, Yup.AnySchema>, field) => {
            schema[field.name] = Yup.string()
                .required("Required")
                .matches(/^[0-9]$/, "Must be a digit");
            return schema;
        }, {})
    );


    const handleSubmit = async (values: Record<string, string>) => {
        if (!email) {
            toast.error("Email not found. Please register again.");
            return;
        }
        setIsSubmitting(true);
        try {
            const otp = Object.values(values).join("");
            const res = await getVerifyOtp({ email, otp }).unwrap();

            console.log("resz", res)
            if (res?.success) {
                toast.success("Email Verified Successfully!");
                // dispatch(setToken(res?.data))
                router.push("/login");
            }
        } catch (err: any) {
            console.log(err);
            toast.error(err?.data?.message || "OTP Verification Failed!");
        } finally {
            setIsSubmitting(false);
        }
    };
    const formik = useFormik({
        initialValues: fields.reduce((values: Record<string, string>, field) => {
            values[field.name] = "";
            return values;
        }, {}),
        validationSchema: OtpSchema,
        onSubmit: handleSubmit,
    });

    const handleOtpRequest = () => {
        router.push('/signup')
    }


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        const maxLength = 1;

        if (value.match(/^\d{0,1}$/)) {
            formik.setFieldValue(fields[index].name, value);

            if (value.length === maxLength && index < fields.length - 1) {
                document.getElementsByName(fields[index + 1].name)[0].focus();
            }
        }
    };

    return (
        <div className='w-full relative min-h-screen md:h-full bg-white flex items-center justify-center md:pb-16 pb-10 pt-24 md:pt-30'>
            <div className='lg:w-[65%] md:w-[70%] w-[80%] flex md:flex-row flex-col justify-center items-center rounded-md h-auto md:h-full shadow-xl bg-white'>
                <div className='md:flex flex-col hidden w-[45%] overflow-hidden md:h-[33.5rem] lg:h-[35.5rem] rounded-l-md justify-center items-center relative bg-primary text-white px-6 text-center'>

                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="hidden md:flex items-center gap-2 text-white cursor-pointer transition-all ease-in-out duration-300 absolute top-4 left-4 hover:text-gray-300 text-base lg:text-lg font-medium mb-4"
                    >
                        ← Go Back
                    </button>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-merriweather tracking-wide">
                        Verify Your Email
                    </h2>
                    <p className="text-base lg:text-lg font-medium leading-relaxed max-w-md opacity-90 font-nunito">
                        We have sent a One-Time Password (OTP) to your email.

                    </p>
                </div>
                <div className='md:w-[55%] w-full flex flex-col items-center md:py-5 py-10 lg:px-12 md:px-8 px-6 gap-6 bg-white h-full'>
                    <h2 className=' font-medium md:text-3xl text-2xl lg:text-4xl font-nunito'>Email Verification</h2>
                    <p className='font-proximaAlt lg:text-xl md:text-lg text-base'>Please enter the OTP sent to your email here</p>
                    <div className='flex flex-col gap-2'>

                        <form onSubmit={formik.handleSubmit} autoComplete="off">
                            <div className="flex justify-center gap-[6px] mb-5 md:gap-2">
                                {fields.map((field, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <input
                                            name={field.name}
                                            type="text"
                                            maxLength={1}
                                            className={`lg:w-12 lg:h-12 md:w-11 md:h-11 w-9 h-9 text-center border rounded-md focus:outline-none focus:ring-1 ${formik.errors[field.name] && formik.touched[field.name]
                                                ? "border-red-500 focus:ring-red-500"
                                                : "focus:ring-btnHover focus:border-btnHover"
                                                }`}
                                            value={formik.values[field.name]}
                                            onChange={(e) => handleInputChange(e, index)}
                                            onBlur={formik.handleBlur}
                                            onKeyDown={(e) => {
                                                if (e.key === "Backspace" && !formik.values[field.name] && index > 0) {
                                                    document.getElementsByName(fields[index - 1].name)[0].focus();
                                                }
                                            }}
                                        />
                                        {formik.errors[field.name] &&
                                            formik.touched[field.name] &&
                                            (
                                                <span className="mt-1 md:text-xs sm:text-[10px] text-[9px] text-red-500">
                                                    {formik.errors[field.name] as string}
                                                </span>
                                            )}
                                    </div>
                                ))}
                            </div>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-4 bg-primary hover:bg-[#48aee0] hover:bg-btnHover text-white font-medium md:text-base text-base sm:text-base lg:text-[17px] font-marcellus py-3 rounded-xs mb-4 transition-all ease-in-out duration-300 cursor-pointer"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <DotSpinner customClassName="w-10" /> : "Verify"}
                                <div className="flex bg-white rounded-full p-1"
                                >
                                    <RiArrowRightLine size={20} className="relative z-10 text-black lg:scale-100 md:scale-95 scale-90" />
                                </div>
                            </button>
                        </form>

                        {/* <p className="mt-4 text-sm text-left text-gray-600">
                            <button onClick={handleOtpRequest} disabled={!isOtpRequestAllowed} className="text-[#1E7486] flex flex-row hover:underline focus:outline-none gap-2 items-center"
                            >
                                {isOtpRequestAllowed ? "Request a new one" : `Request new OTP in ${timeRemaining}s`}
                                <Icon
                                    icon="humbleicons:arrow-right"
                                    width="18"
                                    height="18"
                                    style={{ color: "#1E7486" }}
                                />
                            </button>
                        </p> */}
                        <h2 className='w-full flex gap-2 items-center justify-center'>Didn't receive code ? <Link href='/sign-up' className='text-btnHover font-semibold'>Register Again</Link></h2>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default EmailVerification;
