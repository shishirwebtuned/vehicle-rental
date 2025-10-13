import { Vehicle } from "@/types/type";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaViber,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { MdOutlineAddIcCall } from "react-icons/md";

export const socialLinks = [
  {
    id: 1,
    src: "/icons/social.png",
    alt: "WhatsApp",
    href: "https://wa.me/977014004541",
    hover: "hover:opacity-80",
  },
  {
    id: 2,
    src: "/icons/viber.png",
    alt: "Viber",
    href: "viber://chat?number=%2B977014004541",
    hover: "hover:opacity-80",
  },
  {
    id: 3,
    src: "/icons/facebook.png",
    alt: "Facebook",
    href: "https://facebook.com/yourpage",
    hover: "hover:opacity-80",
  },
  {
    id: 4,
    src: "/icons/instagram.png",
    alt: "Instagram",
    href: "https://instagram.com/yourprofile",
    hover: "hover:opacity-80",
  },
];

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Cars", href: "/cars" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
];

export const howitworksData = [
  {
    id: 1,
    title: "Choose Your Vehicle",
    description:
      "Pick a vehicle that suits your trip—customized to your preferences.",
  },
  {
    id: 2,
    title: "Booking Your Vehicle",
    description:
      "Enjoy hassle-free bookings using our website or by calling us directly.",
  },
  {
    id: 3,
    title: "Pick-Up Location & Date",
    description: "Set your pickup location, date, and time to begin your trip.",
  },
  {
    id: 4,
    title: "Sit, Relax and Start Your Trip",
    description:
      "Start your trip the right way—comfortable, safe, and on time with us.",
  },
];

export const whyChooseUsData = [
  {
    id: 1,
    icon: "/icons/car.png",
    title: "Unmatched Comfort",
    description:
      "Sink into plush seats and enjoy the ride in our fleet of luxury vehicles, designed to provide the utmost comfort throughout your journey.",
    position: "left",
  },
  {
    id: 2,
    icon: "/icons/safetyCar.png",
    title: "Safety First",
    description:
      "Your well-being is our top priority. Our vehicles are equipped with advanced safety features, and our drivers are trained to ensure a secure trip every time.",
    position: "left",
  },
  {
    id: 3,
    icon: "/icons/time.png",
    title: "Always on Time",
    description:
      "We respect your schedule. Count on us to be ready & waiting, ensuring you reach your destination on time, every time.",
    position: "right",
  },
  {
    id: 4,
    icon: "/icons/handshake.png",
    title: "Friendly Service",
    description:
      "Our professional drivers and staff are not only experienced but also approachable and eager to assist, making your travel experience pleasant and stress-free.",
    position: "right",
  },
];

export const servicesData = [
  {
    id: 1,
    icon: "/icons/destination.png",
    title: "Comprehensive Nepal Tour",
    description:
      "Embark on a stunning journey across Nepal—from the majestic Himalayas to the peaceful Terai plains—with tours tailored to showcase the country's diversity.",
    position: "left",
  },
  {
    id: 2,
    icon: "/icons/taxi.png",
    title: "Seamless Airport Transport",
    description:
      "Begin or end your journey with ease using our reliable airport transfer service, featuring professional drivers and timely pickups and drop-offs for a stress-free experience.",
    position: "left",
  },
  {
    id: 3,
    icon: "/icons/pin.png",
    title: "Valley Sightseeing Tour",
    description:
      "Discover iconic landmarks and hidden gems with our expertly curated valley sightseeing tours, showcasing rich culture and stunning landscapes.",
    position: "right",
  },
  {
    id: 4,
    icon: "/icons/key.png",
    title: "Vehicle Rentals Service",
    description:
      "From hours to months, our flexible car rentals fit your needs—ideal for errands, business, family trips, or long-term use, all at competitive rates.",
    position: "right",
  },
];

export const vehiclesData: Vehicle[] = [
  {
    name: "Skoda Rapid",
    licensePlate: "BA16CHA 2244",
    type: "Sedan",
    passengers: 5,
    fuel: "Diesel",
    image: "/images/mgWhite.png",
  },
  {
    name: "M6 SUV",
    licensePlate: "BA16CHA 2244",
    type: "SUV",
    passengers: 5,
    fuel: "EV",
    image: "/images/mgBlack.png",
  },
  {
    name: "Nissan",
    licensePlate: "BA1CHA 1214",
    type: "Sedan",
    passengers: 5,
    fuel: "Petrol",
    image: "/images/mgWhite.webp",
  },
  {
    name: "Skoda Rapid",
    licensePlate: "BA16CHA 2244",
    type: "Sedan",
    passengers: 5,
    fuel: "Diesel",
    image: "/images/mgWhite.png",
  },
  {
    name: "M6 SUV",
    licensePlate: "BA16CHA 2244",
    type: "SUV",
    passengers: 5,
    fuel: "EV",
    image: "/images/mgBlack.png",
  },
  {
    name: "Nissan",
    licensePlate: "BA1CHA 1214",
    type: "Sedan",
    passengers: 5,
    fuel: "Petrol",
    image: "/images/mgWhite.webp",
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: "Aarav Shrestha",
    review:
      "The booking process was seamless, and the car was spotless. The driver was professional and very polite. I’ll definitely book again!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    review:
      "Great experience overall. The car was comfortable and arrived on time. Would highly recommend this service to my friends.",
    rating: 4,
  },
  {
    id: 3,
    name: "Ramesh Adhikari",
    review:
      "Affordable rates and excellent service. The staff was really friendly and helpful during the entire trip.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Koirala",
    review:
      "Good service but the car could have been a bit cleaner. Still, the ride was smooth and hassle-free.",
    rating: 3,
  },
];

export const vehicleTypeData = [
  { id: 1, type: "SUV", image: "/images/mgWhite.png" },
  { id: 2, type: "SUV", image: "/images/mgBlack.png" },
  { id: 3, type: "SUV", image: "/images/mgWhite.png" },
  { id: 4, type: "SUV", image: "/images/mgWhite.png" },
  { id: 5, type: "SUV", image: "/images/mgBlack.png" },
  { id: 6, type: "SUV", image: "/images/mgWhite.png" },
];

export const blogData = [
  {
    id: 1,
    title: "Top 10 Electric Cars in 2025",
    description:
      "Discover the latest electric cars hitting the market this year, featuring cutting-edge technology and eco-friendly design.",
    image: "/images/mgBlack.png",
  },
  {
    id: 2,
    title: "How to Maintain Your Car for Longevity",
    description:
      "A complete guide to regular car maintenance tips that keep your vehicle running smoothly and efficiently.",
    image: "/images/mgWhite.png",
  },
  {
    id: 3,
    title: "Best Road Trips Across Europe",
    description:
      "Plan your next adventure with our list of must-visit European destinations and scenic routes for unforgettable road trips.",
    image: "/images/mgBlack.png",
  },
  {
    id: 4,
    title: "The Future of Autonomous Vehicles",
    description:
      "Learn how self-driving cars are transforming transportation, safety, and the way we think about mobility.",
    image: "/images/mgWhite.webp",
  },
  {
    id: 5,
    title: "Top Car Accessories for 2025",
    description:
      "Upgrade your ride with the latest car accessories that combine functionality, style, and innovation.",
    image: "/images/mgBlack.png",
  },
];

export const footerData = {
  about: {
    title: "About Us",
    description:
      "Est. in 2010, we have been providing great services. Your trusted partner for safe, reliable, and comfortable journeys across Nepal, bringing you closer to the beauty and culture of every destination.",
    socials: [
      { icon: FaFacebook, link: "#" },
      { icon: FaInstagram, link: "#" },
      { icon: FaWhatsapp, link: "#" },
      { icon: FaViber, link: "#" },
    ],
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Our Cars", href: "/cars" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  contact: {
    title: "Contact Information",
    details: [
      {
        icon: FiMapPin,
        text: "Gairidhara, Kathmandu, Nepal",
        link: "https://share.google/aOhhenrPC6nOsouVm",
      },
      {
        icon: FiPhone,
        text: "01-4004541 / 01-4004592",
        link: "tel:014004541",
      },
      {
        icon: MdOutlineAddIcCall,
        text: "9801170674 / 9851070674",
        link: "tel:9801170674",
      },
      {
        icon: FiMail,
        text: "gratefultour@gmail.com",
        link: "mailto:gratefultour@gmail.com",
      },
    ],
  },
};
