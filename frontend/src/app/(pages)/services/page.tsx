import { paddingX } from '@/constant/constant'
import React from 'react'
import { FaMapMarkedAlt, FaPlaneDeparture, FaRegBuilding } from 'react-icons/fa';
import { GiJungle, GiPathDistance } from 'react-icons/gi';
import { MdEventAvailable, MdLuggage, MdTour } from 'react-icons/md';
import { LiaMountainSolid } from "react-icons/lia";
import { TbBus, TbTrekking } from "react-icons/tb";
import { IoIosBoat } from "react-icons/io";
import { IoFastFood } from 'react-icons/io5';
import { FaCarSide } from "react-icons/fa6";


const page = () => {
    const services = [
        {
            id: 1,
            title: "Airport Transfer",
            description:
                "Fast and reliable airport pickup and drop services with professional drivers ensuring a smooth journey.",
            icon: FaPlaneDeparture,
        },
        {
            id: 2,
            title: "Valley Sightseeing Tour (Half/Full Day)",
            description:
                "Explore the cultural and historical landmarks around the valley with customizable half or full-day tours.",
            icon: MdTour,
        },
        {
            id: 3,
            title: "All Over Nepal Tours",
            description:
                "Experience the beauty of Nepal with our countrywide tours covering major destinations and hidden gems.",
            icon: FaMapMarkedAlt,
        },
        {
            id: 4,
            title: "Disposal (Office) Use (Short-term)",
            description:
                "Convenient short-term vehicle rentals for corporate and personal use within the city.",
            icon: FaRegBuilding,
        },
        {
            id: 5,
            title: "Monthly/Quarterly/Yearly Use (Long-term)",
            description:
                "Flexible long-term vehicle rental options for companies, embassies, and individuals.",
            icon: GiPathDistance,
        },
        {
            id: 6,
            title: "India/Bhutan Tours",
            description:
                "Enjoy cross-border travel packages to India and Bhutan with complete logistics and travel support.",
            icon: MdTour,
        },
        {
            id: 7,
            title: "Jungle Safari Drive",
            description:
                "Embark on an exciting jungle safari in Chitwan or Bardiya with our experienced drivers and guides.",
            icon: GiJungle,
        },
        {
            id: 8,
            title: "Mountain Flight Transfer",
            description:
                "Comfortable transport to and from the airport for scenic mountain flights around Everest and Annapurna.",
            icon: LiaMountainSolid,
        },
        {
            id: 9,
            title: "Rafting Point Drive",
            description:
                "Safe and timely transfers to popular rafting spots like Trishuli and Bhotekoshi rivers.",
            icon: IoIosBoat,
        },
        {
            id: 10,
            title: "Trekking Point Drive",
            description:
                "Reliable vehicle service to and from trekking trailheads such as Pokhara, Lukla, or Syabrubesi.",
            icon: TbTrekking,
        },
        {
            id: 11,
            title: "Cultural Program Drive",
            description:
                "Transport service to cultural events, dance shows, and evening programs around the valley.",
            icon: MdEventAvailable,
        },
        {
            id: 12,
            title: "Luggage Transfer",
            description:
                "Secure and timely luggage transfer between hotels, airports, and other destinations.",
            icon: MdLuggage,
        },
        {
            id: 13,
            title: "Dinner Transfer",
            description:
                "Convenient evening transfers to and from restaurants and dining events in and around the valley.",
            icon: IoFastFood,
        },
        {
            id: 14,
            title: "Tourist Bus Ticketing",
            description:
                "Book tourist bus tickets for major routes such as Kathmandu–Pokhara, Chitwan, or Lumbini with ease.",
            icon: TbBus,
        },
        {
            id: 15,
            title: "Vehicle Rental at Pokhara",
            description:
                "Rent cars, jeeps, or vans for sightseeing, tours, and airport transfers in Pokhara.",
            icon: FaCarSide,
        },
    ];
    return (
        <div className='bg-white'>
            <div className={`flex flex-col min-h-screen items-center pt-40 md:pt-44 justify-center bg-background pb-20 sm:pb-24 md:pb-28 ${paddingX}`}>

                <div className="text-black pt-12 pb-8 justify-center space-y-8 w-full flex flex-col items-center">
                    <h1 className="font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold">
                        <span className="text-primary">Our </span> Services
                    </h1>
                    <p className="max-w-3xl lg:text-lg md:text-base font-nunito text-center text-sm">
                        Revolves around rental, tours and transportation
                        in Nepal

                    </p>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full h-full md:gap-6 gap-4 lg:gap-8 mt-8">
                        {services.map((item) => (
                            <div key={item.id} className="flex border border-[#5C9CBC24] rounded-md serviceCard-shadow flex-col font-nunito items-center text-center py-5 px-4">
                                <item.icon className='md:text-3xl text-2xl lg:text-4xl text-primary mb-4' />
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-0 md:mb-2">{item.title}</h3>
                                <p className="text-gray-800 mt-1 md:mt-2 md:text-sm text-xs lg:text-base">{item.description}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

        </div>
    )
}

export default page
