import React from 'react'
import HeroSection from './Components/HeroSection'
import HowItWorks from './Components/HowItWorks'
import ExploreService from './Components/ExploreService'
import CustomerOpinion from './Components/CustomerOpinion'
import VehicleType from './Components/VehicleType'
import VehicleMarquee from './Components/VehicleMarquee'
import RentandDrive from './Components/RentandDrive'
import LatestBlogs from './Components/LatestBlogs'

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <HowItWorks />
            <ExploreService />
            <CustomerOpinion />
            <VehicleType />
            <VehicleMarquee />
            <RentandDrive />
            <LatestBlogs />
        </div>
    )
}

export default HomePage
