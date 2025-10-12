import { paddingX } from '@/constant/constant'
import { vehicleTypeData } from '@/data/data'
import React from 'react'

const VehicleType = () => {
    return (
        <section className={`bg-background ${paddingX} py-14 sm:py-16 md:py-20`}>
            <div className='flex flex-col gap-14'>
                <div className='w-full text-black font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold'>
                    Type of <span className='text-primary font-bold ml-2'> Rent Vehicles</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-3 gap-3 px-4 md:px-0">
                    {vehicleTypeData.map((item, index) => (
                        <div key={item.id || index} className="flex border relative border-[#5C9CBC24] group rounded-md serviceCard-shadow flex-col font-nunito items-center cursor-pointer text-center py-5 px-5 overflow-hidden">
                            <img src={item.image} className='w-full h-full object-contain' />
                            <div className="absolute bottom-0 left-0 w-full text-center
                  translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-4">
                                <div className='bg-[#EEEFBC8C] shadow-xs rounded-md backdrop-blur-[10px] px-2 py-6 font-bold font-merriweather lg:text-xl md:text-lg text-base'>
                                    Sedan
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default VehicleType
