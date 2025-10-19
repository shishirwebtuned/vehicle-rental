import {
  FaClock,
  FaFacebook,
  FaInstagram,
  FaShieldAlt,
  FaViber,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { MdOutlineAddIcCall } from "react-icons/md";
import { FaExpand, FaUserCheck } from "react-icons/fa";

export const socialLinks = [
  {
    id: 1,
    src: "/icons/social.png",
    alt: "WhatsApp",
    href: "https://wa.me/9779801170674",
    hover: "hover:opacity-80",
  },
  {
    id: 2,
    src: "/icons/viber.png",
    alt: "Viber",
    href: "viber://chat?number=%2B9779801170674",
    hover: "hover:opacity-80",
  },
  {
    id: 3,
    src: "/icons/facebook.png",
    alt: "Facebook",
    href: "https://www.facebook.com/gratefultours/",
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
  { label: "Overview", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Cars", href: "/our-cars" },
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

export const categoriesStaticData = [
  {
    _id: "68eb90cfa373b13794266561",
    name: "Sedan",
    description: "Sedan",
    createdAt: "2025-10-12T11:28:15.858Z",
    updatedAt: "2025-10-19T09:54:26.381Z",
    __v: 0,
    image: {
      url: "https://res.cloudinary.com/dz82kaxjs/image/upload/v1760867666/category/tsot8l9q5rdckfso3xbe.png",
      public_id: "category/tsot8l9q5rdckfso3xbe",
    },
  },
  {
    _id: "68eb8da9a373b13794266559",
    name: "Jeep",
    description: "Jeep",
    createdAt: "2025-10-12T11:14:49.041Z",
    updatedAt: "2025-10-19T09:54:39.015Z",
    __v: 0,
    image: {
      url: "https://res.cloudinary.com/dz82kaxjs/image/upload/v1760867678/category/ej3xqoip9ufmm0vuqyf4.png",
      public_id: "category/ej3xqoip9ufmm0vuqyf4",
    },
  },
  {
    _id: "68eb7eefa373b13794266544",
    name: "SUV",
    description: "a suv",
    createdAt: "2025-10-12T10:11:59.442Z",
    updatedAt: "2025-10-19T09:58:45.594Z",
    __v: 0,
    image: {
      url: "https://res.cloudinary.com/dz82kaxjs/image/upload/v1760867925/category/jzbdbwdj78d4kzdujkog.png",
      public_id: "category/jzbdbwdj78d4kzdujkog",
    },
  },
  {
    _id: "68eb7ecba373b13794266541",
    name: "Hiace",
    description: "Hiace",
    createdAt: "2025-10-12T10:11:23.559Z",
    updatedAt: "2025-10-19T09:59:01.056Z",
    __v: 0,
    image: {
      url: "https://res.cloudinary.com/dz82kaxjs/image/upload/v1760867940/category/dszdmqxij7ouaynvpnj1.png",
      public_id: "category/dszdmqxij7ouaynvpnj1",
    },
  },
  {
    _id: "68d678147662369ce92d9bf7",
    name: "Bus",
    description: "Bus",
    createdAt: "2025-09-26T11:25:08.629Z",
    updatedAt: "2025-10-19T09:59:11.441Z",
    __v: 0,
    image: {
      url: "https://res.cloudinary.com/dz82kaxjs/image/upload/v1760867951/category/hmazgbtwboetkbwn5zjn.png",
      public_id: "category/hmazgbtwboetkbwn5zjn",
    },
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

export const vehiclesStaticData = [
  {
    _id: "68ede879c881ebbb89601caf",
    name: "Jumbo Hiace",
    brand: "Toyota",
    vehicleModel: "2016",
    category: {
      _id: "68eb7ecba373b13794266541",
      name: "Hiace",
      description: "Hiace",
    },
    numberPlate: "BA1PA 1453",
    seats: 14,
    fuelType: "Diesel",
    availabilityStatus: true,
    image: {
      url: "https://res.cloudinary.com/dz82kaxjs/image/upload/v1760422009/vehicles/ja2ql0v9x1o2afihufix.png",
      public_id: "vehicles/ja2ql0v9x1o2afihufix",
    },
    description:
      "BYD offers a range of vehicles, including electric SUVs like the ATTO 3, plug-in hybrid SUVs like the Song Plus, and other models such as the Dolphin hatchback and the Seal electric sedan. Key features often include modern tech, safety systems, and eco-friendly materials, with model-specific characteristics such as the ATTO 3's battery capacity and the Song Plus's long hybrid range.  ",
    createdAt: "2025-10-14T06:06:49.522Z",
    updatedAt: "2025-10-16T04:53:51.875Z",
    __v: 0,
  },
  {
    _id: "68ede780c881ebbb89601ca5",
    name: "Skoda Rapid",
    brand: "Skoda",
    vehicleModel: "2017",
    category: {
      _id: "68eb90cfa373b13794266561",
      name: "Sedan",
      description: "Sedan",
    },
    numberPlate: "BA 16CHA 2244",
    seats: 4,
    fuelType: "Hybrid",
    availabilityStatus: false,
    image: {
      url: "https://res.cloudinary.com/dz82kaxjs/image/upload/v1760421760/vehicles/voqkajjufdhxg6z3uoos.png",
      public_id: "vehicles/voqkajjufdhxg6z3uoos",
    },
    description:
      "BYD offers a range of vehicles, including electric SUVs like the ATTO 3, plug-in hybrid SUVs like the Song Plus, and other models such as the Dolphin hatchback and the Seal electric sedan. Key features often include modern tech, safety systems, and eco-friendly materials, with model-specific characteristics such as the ATTO 3's battery capacity and the Song Plus's long hybrid range.  ",
    createdAt: "2025-10-14T06:02:40.547Z",
    updatedAt: "2025-10-15T12:12:05.497Z",
    __v: 0,
  },
  {
    _id: "68ede640c881ebbb89601c9f",
    name: "Creta",
    brand: "Hyundai",
    vehicleModel: "2014",
    category: {
      _id: "68eb7eefa373b13794266544",
      name: "SUV",
      description: "a suv",
    },
    numberPlate: "CAR 914",
    seats: 4,
    fuelType: "Petrol",
    availabilityStatus: true,
    image: {
      url: "https://res.cloudinary.com/dz82kaxjs/image/upload/v1760421440/vehicles/odyjk9hvhdaeqfngb73w.png",
      public_id: "vehicles/odyjk9hvhdaeqfngb73w",
    },
    description:
      "BYD offers a range of vehicles, including electric SUVs like the ATTO 3, plug-in hybrid SUVs like the Song Plus, and other models such as the Dolphin hatchback and the Seal electric sedan. Key features often include modern tech, safety systems, and eco-friendly materials, with model-specific characteristics such as the ATTO 3's battery capacity and the Song Plus's long hybrid range.  ",
    createdAt: "2025-10-14T05:57:20.886Z",
    updatedAt: "2025-10-16T05:30:35.480Z",
    __v: 0,
  },
  {
    _id: "68ede50fc881ebbb89601c93",
    name: "BYD",
    brand: "BYD",
    vehicleModel: "2024",
    category: {
      _id: "68eb7eefa373b13794266544",
      name: "SUV",
      description: "a suv",
    },
    numberPlate: "BA 30CHA 4686",
    seats: 4,
    fuelType: "Electric",
    image: {
      url: "https://res.cloudinary.com/dz82kaxjs/image/upload/v1760421135/vehicles/uk5vm4nsk0zunicuqmje.png",
      public_id: "vehicles/uk5vm4nsk0zunicuqmje",
    },
    description:
      "BYD offers a range of vehicles, including electric SUVs like the ATTO 3, plug-in hybrid SUVs like the Song Plus, and other models such as the Dolphin hatchback and the Seal electric sedan. Key features often include modern tech, safety systems, and eco-friendly materials, with model-specific characteristics such as the ATTO 3's battery capacity and the Song Plus's long hybrid range. ",
    createdAt: "2025-10-14T05:52:15.244Z",
    updatedAt: "2025-10-15T07:30:28.111Z",
    __v: 0,
    availabilityStatus: false,
  },
  {
    _id: "68ede40fc881ebbb89601c8d",
    name: "MG SUV",
    brand: "MG",
    vehicleModel: "2024",
    category: {
      _id: "68eb7eefa373b13794266544",
      name: "SUV",
      description: "a suv",
    },
    numberPlate: "BA1YA 1810",
    seats: 4,
    fuelType: "Electric",
    image: {
      url: "https://res.cloudinary.com/dz82kaxjs/image/upload/v1760441928/vehicles/d5k3u7n0urseyo1kmaro.png",
      public_id: "vehicles/d5k3u7n0urseyo1kmaro",
    },
    description:
      "Yes, MG offers a range of electric cars, including models like the MG4 EV, MGS5 EV, and ZS EV, and they also produce hybrid and petrol vehicles. Examples of MG's electric models include the MG4 EV, a fully electric hatchback, and the MGS5 EV, a sophisticated and technologically advanced electric car available in different battery capacities.  ",
    createdAt: "2025-10-14T05:47:59.990Z",
    updatedAt: "2025-10-15T07:28:27.596Z",
    __v: 0,
    availabilityStatus: true,
  },
  {
    _id: "68ede223c881ebbb89601c81",
    name: "MG SUV",
    brand: "MG",
    vehicleModel: "2024",
    category: {
      _id: "68eb7eefa373b13794266544",
      name: "SUV",
      description: "a suv",
    },
    numberPlate: "BA1YA 1809",
    seats: 4,
    fuelType: "Electric",
    availabilityStatus: true,
    image: {
      url: "https://res.cloudinary.com/dz82kaxjs/image/upload/v1760420387/vehicles/y0mq6q4kapn7gkv6ohvg.png",
      public_id: "vehicles/y0mq6q4kapn7gkv6ohvg",
    },
    description:
      "Yes, MG offers a range of electric cars, including models like the MG4 EV, MGS5 EV, and ZS EV, and they also produce hybrid and petrol vehicles. Examples of MG's electric models include the MG4 EV, a fully electric hatchback, and the MGS5 EV, a sophisticated and technologically advanced electric car available in different battery capacities.  ",
    createdAt: "2025-10-14T05:39:47.339Z",
    updatedAt: "2025-10-14T05:39:47.339Z",
    __v: 0,
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
  // {
  //   id: 4,
  //   title: "The Future of Autonomous Vehicles",
  //   description:
  //     "Learn how self-driving cars are transforming transportation, safety, and the way we think about mobility.",
  //   image: "/images/mgWhite.webp",
  // },
  // {
  //   id: 5,
  //   title: "Top Car Accessories for 2025",
  //   description:
  //     "Upgrade your ride with the latest car accessories that combine functionality, style, and innovation.",
  //   image: "/images/mgBlack.png",
  // },
];

export const makesDifferentData = [
  {
    icon: FaExpand,
    title: "Comfortable Journey",
    description:
      "We care for your comfort so we offer you with comfortable and luxury vehicles. All of our vehicles are new and in very good condition.",
  },
  {
    icon: FaShieldAlt,
    title: "Assured Safety",
    description:
      "Your safety is our concern. We do not just take you to your destination; but also make sure you have a safe journey. We assure you a stress-free and relaxing travel as much as possible.",
  },
  {
    icon: FaClock,
    title: "Timely Service",
    description:
      "We value your time and are always ready at your service. Our drivers are ready to go as per your need.",
  },
  {
    icon: FaUserCheck,
    title: "Professional Drivers",
    description:
      "Our well-trained and experienced drivers and staff are friendly and are eager to assist you as per your requirement.",
  },
];

export const footerData = {
  about: {
    title: "About Us",
    description:
      "Est. in 2010, we have been providing great services. Your trusted partner for safe, reliable, and comfortable journeys across Nepal, bringing you closer to the beauty and culture of every destination.",
    socials: [
      { icon: FaFacebook, link: "https://www.facebook.com/gratefultours/" },
      { icon: FaInstagram, link: "#" },
      { icon: FaWhatsapp, link: "https://wa.me/9779801170674" },
      { icon: FaViber, link: "viber://chat?number=%2B9779801170674" },
    ],
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Our Cars", href: "/our-cars" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  explore: {
    title: "Explore More",
    links: [
      { label: "Blogs", href: "/blogs" },
      { label: "Careers", href: "/careers" },
      { label: "Partner With Us", href: "/partner" },
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

export const careersData = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    description:
      "We are looking for a creative and passionate Frontend Developer with experience in React and Tailwind CSS.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Part-time",
    description:
      "Join our design team to craft user-friendly and visually stunning interfaces for our products.",
  },
  {
    id: 3,
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Pokhara, Nepal",
    type: "Full-time",
    description:
      "We’re seeking a data-driven marketer to plan and execute online campaigns that drive engagement and growth.",
  },
];
