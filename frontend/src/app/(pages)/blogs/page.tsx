import { paddingX } from '@/constant/constant'
import { blogData } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='bg-white'>
            <div className={`flex flex-col h-full items-center pt-14 md:pt-20 justify-center bg-background pb-10 sm:pb-20 md:pb-28 ${paddingX}`}>
                <div className='w-full text-center'>
                    <h1 className="w-full text-black font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold leading-snug">
                        Our Latest{" "}
                        <span className="text-primary font-bold">Blogs</span>
                    </h1>
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:gap-8 sm:gap-6 gap-4 mt-10'>
                    {blogData.map((item, index) => (
                        <div key={item.id || index} className="w-full rounded-xl border border-gray-200 bg-white  blogCard-shadow hover:-translate-y-1 pb-5 hover:shadow-xl flex flex-col justify-between transition-all duration-300 ease-in-out text-start">
                            <div className={`rounded-t-xl flex justify-center h-32 sm:h-52 md:h-60 lg:h-64 overflow-hidden  ${item.image.toLowerCase().endsWith('.png')
                                ? 'p-5 bg-linear-to-br from-gray-50 to-gray-100'
                                : 'p-0'
                                }`}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={1000}
                                    height={1000}
                                    className={`w-full h-full ${item.image.toLowerCase().endsWith('.png')
                                        ? 'object-contain bg-white bg-linear-to-br from-gray-50 to-gray-100'
                                        : 'object-cover'
                                        }`}
                                />
                            </div>

                            <div className='px-5 pt-5'>
                                <h2 className="mt-4 text-base md:text-lg lg:text-xl font-merriweather font-bold text-primary line-clamp-2">{item.title}</h2>

                                <p className="mt-2 font-nunito text-black md:text-sm text-xs lg:text-base line-clamp-4">{item.description}</p>
                            </div>
                            <div className='w-full text-center mb-1'>
                                <Link href={`/blogs/${item.slug}`}>
                                    <button className="mt-3 cursor-pointer rounded-lg border-2 border-primary px-5 py-2 md:text-base text-sm lg:text-lg font-nunito font-medium text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default page
