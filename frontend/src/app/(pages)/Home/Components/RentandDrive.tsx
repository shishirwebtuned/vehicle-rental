import { paddingX } from '@/constant/constant'
import React from 'react'

const RentandDrive = () => {
    return (
        <div className='flex flex-col'>
            <div className='bg-background md:h-16'></div>
            <div className={`bg-primary pt-3 md:pt-5 lg:pb-0 md:pb-6 pb-8 flex flex-col md:flex-row w-full h-auto relative ${paddingX}`}>

                <div className='relative flex items-center w-full md:w-1/2 justify-center'>
                    <img src="/images/mgRent.png" alt='' className='lg:-translate-y-36 md:w-full w-[90%] object-contain' />
                </div>
                <div className='flex flex-col justify-center w-full md:w-1/2 text-center lg:gap-7 h-auto md:gap-6 gap-4'>
                    <h3 className="w-full text-background font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold leading-snug">
                        Rent{" "}
                        <span className="text-black font-bold">and</span>{" "}
                        Drive{" "}
                        <span className="text-black font-bold">a Car Today!</span>
                    </h3>

                    <p className="max-w-3xl text-center mx-auto lg:text-lg md:text-base font-nunito text-sm text-white">
                        If you are looking to rent, we have perfect car waiting for you. Browse our extensive collection and get behind the wheel with ease.
                    </p>
                    <div className='flex flex-row gap-4 font-nunito md:text-base text-sm lg:text-lg w-full items-center justify-center'>
                        <button className='bg-background text-primary border-2 rounded-md shadow-sm border-background hover:text-white hover:bg-primary px-6 py-3 transition-all ease-in-out duration-300 cursor-pointer'>Browse Cars</button>
                        <button className='bg-primary px-6 py-3 rounded-md shadow-sm text-background border-2 border-background hover:text-white hover:border-white transition-all ease-in-out cursor-pointer duration-300'>Contact Us</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RentandDrive
