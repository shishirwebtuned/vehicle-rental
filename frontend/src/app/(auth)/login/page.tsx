"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Cookies from "js-cookie";
import toast from 'react-hot-toast';
import { useLoginMutation } from '@/redux/api/rest/mutation/authApi';
import { setToken, setUser } from '@/redux/slices/configUser';
import MasterForm from '@/components/shared/MasterForm';

const Page = () => {
    const [getLogin] = useLoginMutation();
    const dispatch = useDispatch();
    const router = useRouter();
    const fields = [
        {
            name: "email",
            // label: "Email Address",
            type: "email",
            placeholder: "Email address",
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


    const LoginSchema = Yup.object().shape({
        email: Yup.string().email("Email must be a valid email address").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const handleSubmit = async (values: any) => {
        try {
            console.log("Form Values:", values);
            const res = await getLogin(values).unwrap();
            console.log('resss', res)
            if (res?.success) {

                if (res?.data?.user?.role !== "admin") {
                    toast.error("Access denied. Only admin can log in.");
                    return;
                }

                dispatch(setToken(res?.data?.token));
                dispatch(setUser(res?.data?.user))
                Cookies.set("userToken", res?.data?.token);
                Cookies.set("userRole", res?.data?.user?.role, { expires: 1 });
                localStorage.setItem("user", JSON.stringify(res?.data?.user));

                toast.success(res.message);
                router.push("/admin-dash");

                // if (res?.data?.user?.role === "admin") {
                //     router.push("/admin-dash");

                // } else if (res?.data?.user?.role === "customer") {
                //     router.push("/dashboard");

                // }
            }
        } catch (err: any) {
            console.log(err);
            toast.error(err?.data?.message || "Login failed, Try Again");
        }
    }

    return (
        <div className='w-full relative min-h-screen bg-white md:h-full flex items-center justify-center md:pb-16 pb-8 pt-20 md:pt-32'>
            <div className='lg:w-[65%] relative md:w-[70%] w-[88%] flex md:flex-row flex-col justify-center items-center rounded-md md:h-full h-auto shadow-xl bg-white'>
                <div className="md:flex hidden w-[45%] overflow-hidden flex-col md:h-[32rem] lg:h-[35rem] rounded-l-md justify-center items-center bg-primary text-white px-6 text-center">
                    <button
                        type="button"
                        onClick={() => {
                            if (window.history.length > 1) router.back();
                            else router.push("/");
                        }}
                        className="hidden md:flex items-center gap-2 text-white cursor-pointer transition-all ease-in-out duration-300 absolute top-4 left-4 hover:text-gray-300 text-base lg:text-lg font-medium mb-4"
                    >
                        ← Go Back
                    </button>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-merriweather tracking-wide">
                        Welcome Back
                    </h2>
                    <p className="text-base lg:text-lg font-medium leading-relaxed max-w-md opacity-90 font-nunito">
                        You can Sign-In to access with your current account.
                    </p>
                    {/* style={{
                        backgroundImage: `url('/images/mgBlack.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }} */}
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
                    <h2 className='font-nunito flex md:hidden font-medium md:text-3xl text-2xl lg:text-4xl'>Log in</h2>
                    <p className='font-nunito lg:text-xl md:text-lg text-base'>Enter your details below</p>
                    <MasterForm
                        fields={fields}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}
                        buttonLabel='Login'
                        fieldStyle='border-b-2 border-gray-300 ring-0 focus:outline-0'
                        additionalContent={
                            <>
                                {/* <div className="flex items-center justify-end mb-4">

                                    <Link
                                        href="/reset-password"
                                        className="text-sm text-btnHover hover:underline focus:outline-none"
                                    >
                                        Forgot password?
                                    </Link>
                                </div> */}
                                <p className="mb-4 text-xs text-center text-gray-500">
                                    By continuing you agree to our{" "}
                                    <Link
                                        href="/terms-and-conditions"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Terms of Services
                                    </Link>
                                    <span> &</span>
                                    <Link
                                        href="/privacy-policy"
                                        className="pl-1 text-blue-500 hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .
                                </p>
                            </>
                        }
                    />
                    {/* <h2 className='w-full flex gap-2 items-center justify-center'>Don't have an Account ? <Link href='/sign-up' className='text-btnHover font-semibold'>Sign Up</Link></h2> */}

                </div>
            </div>

        </div >
    )
}

export default Page;