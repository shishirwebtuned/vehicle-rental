"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import { useRegisterMutation } from '@/redux/api/rest/mutation/authApi';
import MasterForm from '@/components/shared/MasterForm';
import { address } from 'framer-motion/client';

const Page = () => {
    const [getRegister] = useRegisterMutation();
    const router = useRouter();
    const fields = [
        {
            name: "name",
            type: "text",
            placeholder: "Name",

        },
        {
            name: "email",
            // label: "Email Address",
            type: "email",
            placeholder: "Email address",
            // icon: "mdi-light:email",
        },
        {
            name: "phoneNumber",
            // label: "Email Address",
            type: "text",
            placeholder: "Phone Number",
            // icon: "mdi-light:email",
        },
        {
            name: "address",
            // label: "Email Address",
            type: "text",
            placeholder: "Address",
            // icon: "mdi-light:email",
        },
        {
            name: "password",
            // label: "Password",
            type: "password",
            placeholder: "Password",
            // icon: "material-symbols-light:lock-outline",
        },
    ]


    const RegisterSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Email must be a valid email address").required("Email is required"),
        phoneNumber: Yup.string().required("Phone Number is required").matches(/^9\d{9}$/, "Phone number must start with 9 and be 10 digits"),
        address: Yup.string().required("Address is required"),
        password: Yup.string().required("Password is required"),

    });

    const handleSubmit = async (values: any) => {
        console.log("Form Values:", values);
        try {
            const res = await getRegister(values).unwrap();
            console.log('resss', res)
            if (res?.success) {
                toast.success(res.message);
                router.push("/email-verification");

            }
        } catch (err: any) {
            console.log(err);
            toast.error(err?.data?.message || "Signup failed, Try Again");

        }


    }

    return (
        <div className='w-full relative h-full flex items-center justify-center md:pb-16 pb-10 pt-24 md:pt-32'>
            <div className='lg:w-[65%] relative md:w-[70%] w-[88%] flex md:flex-row flex-col justify-center items-center rounded-md h-full shadow-xl bg-white'>
                <div className='md:flex flex-col hidden w-[45%] overflow-hidden md:h-[33.5rem] lg:h-[35.5rem] rounded-l-md justify-center items-center relative bg-primary text-white px-6 text-center'>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="hidden md:flex items-center gap-2 text-white cursor-pointer transition-all ease-in-out duration-300 absolute top-4 left-4 hover:text-gray-300 text-base lg:text-lg font-medium mb-4"
                    >
                        ← Go Back
                    </button>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-merriweather tracking-wide">
                        Join Us Today
                    </h2>
                    <p className="text-base lg:text-lg font-medium leading-relaxed max-w-md opacity-90 font-nunito">
                        Create a new account to get started and enjoy all features.
                    </p>

                    {/* style={{
                        backgroundImage: `url('/images/extras/LoginBanner.png')`,
                        backgroundSize: 'cover', // Ensures full coverage
                        backgroundPosition: 'center', // Centers the image
                        backgroundRepeat: 'no-repeat' // Prevents tiling
                    }}                 */}
                    {/* <img src='/images/extras/LoginBanner.png' alt='Login Img' className='w-full h-full object-cover' /> */}

                </div>
                <div className='md:w-[55%] w-full flex flex-col md:py-5 py-10 lg:px-12 md:px-8 px-4 gap-4 bg-white h-full'>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="flex md:hidden items-center gap-2 text-primary cursor-pointer transition-all ease-in-out duration-300 hover:text-gray-800 text-base font-medium mb-4"
                    >
                        ← Go Back
                    </button>
                    <h2 className='font-nunito flex md:hidden font-medium md:text-3xl text-2xl lg:text-4xl'>Create an account</h2>
                    <p className='font-nunito lg:text-xl md:text-lg text-base'>Enter your details below</p>
                    <div className='flex flex-col gap-2'>
                        <MasterForm
                            fields={fields}
                            validationSchema={RegisterSchema}
                            onSubmit={handleSubmit}
                            buttonLabel='Create Account'
                            fieldStyle='border-b-2 border-gray-300 ring-0 focus:outline-0'
                            selectStyle="border-none ring-0 focus:ring-0 focus:outline-none"

                        />

                    </div>
                    <h2 className='w-full flex gap-2 items-center justify-center'>Already have an Account ? <Link href='/login' className='text-btnHover font-semibold'>Login</Link></h2>

                </div>
            </div>

        </div>
    )
}

export default Page;