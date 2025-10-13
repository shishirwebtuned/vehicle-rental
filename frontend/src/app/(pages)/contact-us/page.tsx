import { CustomButton } from '@/components/shared/CustomButton'
import React from 'react'

const Page = () => {
    return (
        <div className='bg-background '>
            <section className={`flex items-center pt-40 md:pt-40 justify-center bg-black/50 pb-20 sm:pb-24 md:pb-28`}>
                <div className="text-white pt-30 pb-8 text-center px-6 space-y-8">
                    <h1 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                        <span className="text-primary">Contact </span> Us.
                    </h1>
                    <p className="max-w-3xl mx-auto lg:text-lg md:text-base font-nunito text-sm">
                        Whether you’re ready to book or just looking for more information, our friendly team is always happy to assist. Reach out — we’ll respond promptly.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Page
