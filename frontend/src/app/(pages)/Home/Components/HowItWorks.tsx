import { CustomButton } from '@/components/shared/CustomButton'
import { paddingX } from '@/constant/constant'
import { howitworksData, whyChooseUsData } from '@/data/data'
import React from 'react'

const HowItWorks = () => {
    return (
        <div
            className="relative bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/images/mgCar.jpg')" }}
        >
            {/* First Section*/}
            <section className={`bg-background ${paddingX} py-14 sm:py-16 md:py-20`}>
                <div className='flex flex-col gap-14'>
                    <div className='w-full flex items-center justify-center text-black font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold'>
                        How It <span className='text-primary font-bold ml-2'> Works</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 md:gap-7 gap-6">
                        {howitworksData.map((item, index) => (
                            <div key={item.id || index} className="flex flex-col">
                                <div className='flex flex-row justify-start items-center md:mb-3 mb-2 lg:mb-4 md:gap-7 sm:gap-6 gap-5 lg:gap-8'>
                                    <div className='w-1 md:w-[5px] bg-gradient-to-b from-[rgb(46,112,233)] to-[#000000] h-5 md:h-6 lg:h-7'></div>
                                    <h3 className="lg:text-lg md:text-base text-sm font-bold text-primary font-merriweather">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="lg:text-base md:text-sm text-xs font-nunito text-gray-800 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Second/Transparent Section */}
            <section className={`flex items-center justify-center bg-black/60 py-20 sm:py-24 md:py-28`}>
                <div className="text-white text-center px-6 space-y-8">
                    <h2 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                        <span className="text-primary">Drive </span> in Comfort. <span className="text-primary">Rent</span> Today, Ride Away!
                    </h2>
                    <p className="max-w-3xl mx-auto lg:text-lg md:text-base font-nunito text-sm">
                        Fast, easy, and reliable car rentals at great rates. Clean, well-maintained vehicles ready when you are — perfect for trips, errands, or getaways.
                    </p>
                    <div>
                        <CustomButton text='Book Now' />
                    </div>
                </div>
            </section>

            {/*Third Section */}
            <section className={`bg-background h-full py-14 sm:py-16 md:py-20 flex flex-col gap-8 items-center justify-center ${paddingX}`}>
                <div className="text-center">
                    <h2 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                        Why <span className="text-primary">Choose</span> Us?
                    </h2>
                </div>
                <div className='grid grid-cols-1  md:grid-cols-3 w-full h-full gap-8'>

                    <div className="flex sm:flex-row flex-col md:flex-col w-full h-full lg:gap-12 md:gap-10 sm:gap-8 gap-6">
                        {whyChooseUsData.slice(0, 2).map((item) => (
                            <div key={item.id} className="flex flex-col font-nunito items-center text-center">
                                <img src={item.icon} alt={item.title} className="lg:w-16 lg:h-16 md:w-14 md:h-14 w-12 h-12 mb-0 md:mb-2" />
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-0  md:mb-2">{item.title}</h3>
                                <p className="text-gray-800 mt-1 md:mt-2 md:text-sm text-xs lg:text-base">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center w-full h-full items-center">
                        <img
                            src="/images/mgBlack.png"
                            alt="Car"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
                        />
                    </div>

                    <div className="flex sm:flex-row flex-col md:flex-col w-full h-full lg:gap-12 md:gap-10 sm:gap-8 gap-6">
                        {whyChooseUsData.slice(2).map((item) => (
                            <div key={item.id} className="flex flex-col font-nunito items-center text-center">
                                <img src={item.icon} alt={item.title} className="lg:w-16 lg:h-16 md:w-14 md:h-14 w-12 h-12 mb-0 md:mb-2" />
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-0  md:mb-2">{item.title}</h3>
                                <p className="text-gray-800 mt-1 md:mt-2 md:text-sm text-xs lg:text-base">{item.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>

    )
}

export default HowItWorks
