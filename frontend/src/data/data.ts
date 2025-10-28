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
    slug: "top-10-electric-cars-in-2025",
    description:
      "Discover the latest electric cars hitting the market this year, featuring cutting-edge technology and eco-friendly design.",
    image: "/images/mgBlack.png",
    content: `
      The electric vehicle (EV) market in 2025 is more exciting than ever. Automakers around the world are introducing advanced, high-performance EVs designed to meet the needs of both eco-conscious drivers and performance enthusiasts.

      Here are the top 10 electric cars that are leading the charge:
      1. Tesla Model 3 Refresh – Improved range, faster acceleration, and futuristic interiors.
      2. Lucid Air Sapphire – Luxury meets innovation with record-breaking range and comfort.
      3. Rivian R1S – Perfect for adventurous families who value sustainability.
      4. Hyundai Ioniq 6 – Sleek design with top-tier efficiency.
      5. BYD Seal – China’s rising EV powerhouse with great value.
      6. Porsche Taycan GTS – For drivers who crave performance and precision.
      7. BMW i4 – Blends luxury and power in a refined electric sedan.
      8. Kia EV9 – Spacious, futuristic, and family-ready.
      9. Ford Mustang Mach-E GT – American muscle reinvented for the EV era.
      10. MG4 EV – Affordable yet stylish EV making waves in the global market.

      With better battery technology, faster charging, and lower maintenance costs, 2025 marks a major step toward an all-electric future.
    `,
  },
  {
    id: 2,
    title: "How to Maintain Your Car for Longevity",
    slug: "how-to-maintain-your-car-for-longevity",
    description:
      "A complete guide to regular car maintenance tips that keep your vehicle running smoothly and efficiently.",
    image: "/images/mgWhite.png",
    content: `
      Keeping your car in top condition not only extends its lifespan but also ensures safety and better performance. Regular maintenance can save you from costly repairs in the long run.

      Here are essential tips for maintaining your vehicle: 
      - Check your oil regularly: Change it every 5,000–7,000 km or as recommended by your manufacturer.
      - Inspect tire pressure and alignment: Proper inflation improves mileage and prevents uneven wear.
      - Replace air filters: Dirty filters reduce engine efficiency.
      - Keep your battery clean: Corrosion can cause starting issues.
      - Wash and wax your car: Protects paint and prevents rusting.
      - Brake inspections: Ensure safe stopping and avoid brake failures.
      - Use quality fuel and fluids: Keeps the engine running smoothly.

      With consistent care and timely servicing, your car can easily exceed its expected lifespan and retain great resale value.
    `,
  },
  {
    id: 3,
    title: "Best Road Trips Across Europe",
    slug: "best-road-trips-across-europe",
    description:
      "Plan your next adventure with our list of must-visit European destinations and scenic routes for unforgettable road trips.",
    image: "/images/mgBlack.png",
    content: `
      Europe offers some of the most breathtaking road trip routes in the world. Whether you’re exploring mountains, coastlines, or historic towns, these routes promise unforgettable experiences.

      Here are our top picks:
      1. Amalfi Coast, Italy: Winding coastal roads with views of turquoise seas and charming cliffside villages.
      2. Ring Road, Iceland: A full-circle route that takes you past waterfalls, glaciers, and volcanic landscapes.
      3. Romantic Road, Germany: Explore medieval towns like Rothenburg and Neuschwanstein Castle.
      4. Transfăgărășan Highway, Romania: Known as one of the world’s most beautiful driving roads.
      5. North Coast 500, Scotland: Rugged coastlines, castles, and remote Highland beauty.
      6. French Riviera, France: Glamour, sunshine, and seaside towns like Nice and Cannes.
      7. Basque Country, Spain: A mix of culture, food, and stunning natural landscapes.

      Pack your essentials, set your playlist, and hit the open road — Europe is waiting for your next adventure.
    `,
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

export const faqData = [
  {
    question: "How can I book a car online through your website?",
    answer:
      "Booking a car is simple! Navigate to the 'Our Cars' section, browse through the available vehicles, and select the one that suits your needs. Fill out the booking form with your personal details, pickup and drop-off locations, dates, and times. Once submitted, you will receive a confirmation email with all the booking details.",
  },
  {
    question: "What are your operating hours and availability?",
    answer:
      "We operate every day of the week from 8 AM to 8 PM. You can place bookings online at any time, and our team is available to assist with any queries during operating hours. For special requests outside these hours, please contact our support team in advance.",
  },
  {
    question: "Do you provide airport pickup and drop-off services?",
    answer:
      "Yes, we offer both airport pickup and drop-off services. You can select this option while booking your car. Please provide your flight details and arrival time to ensure a smooth pickup experience. Our drivers are trained to assist you with luggage and ensure a comfortable journey to your destination.",
  },
  {
    question: "Can I modify or cancel my booking?",
    answer:
      "Absolutely! You can modify your booking details or cancel your reservation through our website or by contacting our support team. Please note that cancellation policies may apply depending on the timing of the cancellation relative to your pickup date.",
  },
  {
    question: "Are your vehicles insured and safe?",
    answer:
      "Yes, all our vehicles come with up-to-date insurance from licensed insurance providers. Each car undergoes regular safety checks and maintenance to ensure it is in excellent condition for your journey. We prioritize your safety above all.",
  },
  {
    question: "What documents do I need to rent a car?",
    answer:
      "To rent a car, you will need a valid government-issued ID, a valid driver's license, and a payment method for the booking. For international travelers, an additional passport or international driving permit may be required.",
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
      { label: "Our Rates", href: "/files/rates.pdf", target: "_blank" },
      { label: "Blogs", href: "/blogs" },
      { label: "Careers", href: "/careers" },
      { label: "Partner With Us", href: "/partner" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  contact: {
    title: "Contact Information",
    details: [
      {
        icon: FiMapPin,
        text: "Gairidhara, Kathmandu, Nepal",
        link: "https://maps.app.goo.gl/Yz9cWWLQSkV8RYNy9",
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

export const missionPoints = [
  "To make vehicle rentals and travel bookings seamless, affordable, and accessible for everyone.",
  "To deliver exceptional customer service with a focus on reliability, comfort, and transparency.",
  "To leverage technology and innovation for smarter booking, efficient fleet management, and real-time support.",
  "To create memorable travel experiences by connecting customers with safe and well-maintained vehicles.",
  "To promote sustainable mobility by adopting eco-friendly practices and modern fuel-efficient vehicles.",
];

export const visionPoints = [
  "To become the most trusted vehicle rental and travel service provider in the region.",
  "To redefine convenience in transportation, offering a one-stop digital platform for all travel needs.",
  "To expand our network across cities and countries, ensuring consistent quality and reliability everywhere.",
  "To empower travelers with freedom, flexibility, and confidence on every journey.",
  "To lead the industry towards a greener, smarter, and more connected future of mobility.",
];

export const services = [
  {
    id: 1,
    title: "Airport Transfer",
    slug: "airport-transfer",
    description:
      "Fast and reliable airport pickup and drop services with professional drivers ensuring a smooth journey.",
    content:
      "Our Airport Transfer service is designed to provide a completely stress-free experience for travelers arriving or departing from Nepal’s airports. We offer door-to-door pick-up and drop-off for individuals, families, and groups, ensuring that your journey starts and ends on a smooth note. Our professional drivers are experienced, punctual, and familiar with all major routes, airport traffic patterns, and local conditions. We monitor flight schedules in real-time to adjust for delays or early arrivals, ensuring you are never left waiting. Each vehicle is meticulously maintained for comfort, cleanliness, and safety, with ample space for luggage. Our service also includes assistance with baggage handling, guidance for airport procedures, and optional extras like in-vehicle refreshments. Whether you’re traveling for business, leisure, or connecting flights, our Airport Transfer ensures that your journey is seamless, reliable, and enjoyable. By choosing our service, you can focus entirely on your travel plans while we handle the logistics, providing a professional, personalized, and safe experience that enhances your overall travel experience in Nepal.",
    icon: "FaPlaneDeparture",
    answer:
      "Choose Grateful Tours for Airport Transfers because we guarantee punctuality, comfort, and professionalism. Our real-time flight monitoring, courteous drivers, and spotless vehicles ensure a seamless and stress-free start or end to your journey.",
  },
  {
    id: 2,
    title: "Valley Sightseeing Tour (Half/Full Day)",
    slug: "valley-sightseeing-tour",
    description:
      "Explore the cultural and historical landmarks around the valley with customizable half or full-day tours.",
    content:
      "Our Valley Sightseeing Tours are carefully curated to provide an immersive experience of the Kathmandu Valley’s rich cultural heritage, history, and natural beauty. These tours can be customized for either half-day or full-day experiences, depending on your schedule and interests. We cover not only the famous landmarks such as Pashupatinath Temple, Boudhanath Stupa, Patan Durbar Square, and Bhaktapur Durbar Square, but also hidden gems and lesser-known local spots that offer authentic cultural experiences. Accompanied by experienced guides, you will gain insights into local traditions, architecture, festivals, and culinary delights. Our comfortable vehicles ensure smooth travel between locations, and our flexible itinerary allows for impromptu photo stops, shopping for handicrafts, or enjoying local cuisine at traditional eateries. The tour also provides context about Nepalese culture, history, and religion, giving travelers a deeper understanding of the valley beyond mere sightseeing. This is perfect for tourists who want an enriching experience, combining sightseeing with cultural immersion, all while traveling safely and comfortably.",
    icon: "MdTour",
    answer:
      "Grateful Tours offers the best Valley Sightseeing experience with expert local guides, comfortable vehicles, and flexible itineraries — ensuring you see not just landmarks, but the heart of Nepalese culture.",
  },
  {
    id: 3,
    title: "All Over Nepal Tours",
    slug: "all-over-nepal-tours",
    description:
      "Experience the beauty of Nepal with our countrywide tours covering major destinations and hidden gems.",
    content:
      "Our All Over Nepal Tours are designed to offer a comprehensive exploration of Nepal’s diverse landscapes, rich culture, and historic landmarks. Travelers can experience everything from the towering Himalayan peaks to serene lakes, bustling city streets, wildlife sanctuaries, and remote villages. Each tour is fully customizable, allowing travelers to choose destinations, travel pace, and activities according to their preferences. We provide safe, comfortable vehicles, knowledgeable local guides, and support with accommodations and logistics, ensuring a hassle-free experience throughout the journey. These tours include cultural visits to temples, monasteries, and heritage sites, scenic drives along mountain passes, wildlife safaris in Chitwan or Bardiya, and visits to trekking trailheads. By joining our All Over Nepal Tours, travelers gain not only the opportunity to witness breathtaking landscapes but also to engage with local communities, learn about traditions, and capture memorable experiences. Our focus on safety, comfort, and personalized service ensures that each journey is enjoyable, educational, and unforgettable, offering a deep connection with the country’s natural beauty and cultural richness.",
    icon: "FaMapMarkedAlt",
    answer:
      "With Grateful Tours, explore Nepal your way. We combine expert guidance, safety, and flexible itineraries to give you a deeper, more personal connection with Nepal’s landscapes and cultures.",
  },
  {
    id: 4,
    title: "Disposal (Office) Use (Short-term)",
    slug: "disposal-use",
    description:
      "Convenient short-term vehicle rentals for corporate and personal use within the city.",
    content:
      "Our short-term vehicle rental service is tailored for businesses, offices, and personal needs requiring temporary transportation solutions. Whether it’s for corporate meetings, client visits, business errands, short-term projects, or city-based events, our service offers flexible and convenient options. Vehicles are modern, well-maintained, and equipped for comfort and safety, ensuring a professional appearance for any business engagement. We provide experienced drivers familiar with local traffic patterns and corporate etiquette, guaranteeing timely arrivals and departures. Booking is easy and adaptable to different time frames, from a few hours to several days. Our service also offers logistical support, route planning, and assistance with navigating city traffic, making it ideal for companies seeking reliable short-term transportation or individuals needing temporary, high-quality vehicle access. By choosing our service, clients benefit from convenience, reliability, and a professional approach to short-term urban transportation.",
    icon: "FaRegBuilding",
    answer:
      "Choose Grateful Tours for short-term rentals because we combine reliability, punctuality, and professionalism — ideal for businesses needing flexible, top-quality transportation on demand.",
  },
  {
    id: 5,
    title: "Monthly/Quarterly/Yearly Use (Long-term)",
    slug: "long-term-use",
    description:
      "Flexible long-term vehicle rental options for companies, embassies, and individuals.",
    content:
      "For organizations, embassies, and individuals requiring long-term transportation solutions, we offer flexible rental options on a monthly, quarterly, or yearly basis. Our vehicles are well-maintained, reliable, and suitable for corporate, diplomatic, or personal use, with the option of professional drivers for long-term convenience. These rentals are ideal for employee transportation, extended projects, or personal mobility needs, providing cost-effective and hassle-free solutions. We handle regular vehicle maintenance, provide 24/7 support, and assist with route planning and scheduling. Long-term clients benefit from predictable pricing, professional service, and consistent vehicle availability. Our approach prioritizes safety, comfort, and reliability, ensuring that every client enjoys uninterrupted, high-quality transportation over an extended period. Whether for corporate continuity, embassy operations, or personal requirements, our long-term rental service combines flexibility, professional support, and premium service standards.",
    icon: "GiPathDistance",
    answer:
      "Grateful Tours stands out for long-term rentals with its reliable fleet, transparent pricing, and dedicated support — perfect for companies and individuals seeking stability and trust.",
  },
  {
    id: 6,
    title: "India/Bhutan Tours",
    slug: "india-bhutan-tours",
    description:
      "Enjoy cross-border travel packages to India and Bhutan with complete logistics and travel support.",
    content:
      "Our India and Bhutan Tours provide comprehensive travel packages that cover transportation, accommodation, and itinerary planning. These cross-border trips allow travelers to experience cultural landmarks, heritage sites, scenic landscapes, and local traditions in neighboring countries. We assist with visa documentation, provide safe and comfortable vehicles, and offer knowledgeable guides who can enrich the travel experience with insights about local history, customs, and cuisine. Each tour is fully customizable, allowing travelers to plan the duration, destinations, and activities according to personal preferences. By using our services, travelers can explore India and Bhutan safely, efficiently, and in comfort, enjoying every moment without the stress of organizing logistics or worrying about transportation challenges.",
    icon: "MdTour",
    answer:
      "Choose Grateful Tours for India and Bhutan trips because we manage every detail — from visas to vehicles — ensuring a seamless, safe, and culturally immersive cross-border adventure.",
  },
  {
    id: 7,
    title: "Jungle Safari Drive",
    slug: "jungle-safari-drive",
    description:
      "Embark on an exciting jungle safari in Chitwan or Bardiya with our experienced drivers and guides.",
    content:
      "Our Jungle Safari Drive service ensures a thrilling yet safe adventure into Nepal’s most famous wildlife sanctuaries, including Chitwan and Bardiya National Parks. We provide reliable transportation from hotels or cities to safari starting points, where expert guides help you navigate the wilderness. Experience the thrill of spotting tigers, rhinos, elephants, deer, and exotic birds in their natural habitats. We also provide information about local flora, fauna, and conservation efforts to enrich the safari experience. Vehicles are comfortable and equipped to handle rugged terrain, and our drivers are trained to ensure a smooth and safe ride. Whether for families, solo travelers, or groups, our Jungle Safari Drives offer an unforgettable opportunity to connect with nature and witness wildlife up close while enjoying the utmost convenience and safety.",
    icon: "GiJungle",
    answer:
      "Grateful Tours makes your safari safe and memorable with expert guides, reliable vehicles, and a strong focus on wildlife conservation and traveler comfort.",
  },
  {
    id: 8,
    title: "Mountain Flight Transfer",
    slug: "mountain-flight-transfer",
    description:
      "Comfortable transport to and from the airport for scenic mountain flights around Everest and Annapurna.",
    content:
      "Our Mountain Flight Transfer service guarantees timely and comfortable transport for flights over Nepal’s majestic Himalayan ranges, including Everest, Annapurna, and other iconic peaks. We provide door-to-door pick-up and drop-off, assisting with luggage and providing guidance about flight schedules. Vehicles are well-maintained and comfortable, ensuring a relaxed start and end to your mountain flight experience. Our professional drivers understand local routes and road conditions, guaranteeing a safe journey. Travelers can enjoy stunning aerial views of snow-capped peaks and glaciers without worrying about ground transportation logistics. This service ensures a seamless combination of ground and air travel for one of the most breathtaking sightseeing experiences in the world.",
    icon: "LiaMountainSolid",
    answer:
      "Trust Grateful Tours for Mountain Flight Transfers — we ensure on-time arrivals, comfort, and total coordination with your flight schedule for a worry-free Himalayan adventure.",
  },
  {
    id: 9,
    title: "Rafting Point Drive",
    slug: "rafting-point-drive",
    description:
      "Safe and timely transfers to popular rafting spots like Trishuli and Bhotekoshi rivers.",
    content:
      "Our Rafting Point Drive ensures safe, punctual, and comfortable transportation to the most popular white-water rafting destinations in Nepal, such as the Trishuli and Bhotekoshi rivers. We provide vehicles suited for group travel and rugged roads, ensuring that adventurers arrive ready for the thrill of the rapids. Drivers are experienced, familiar with routes and seasonal conditions, and prioritize safety throughout the journey. This service is ideal for day trips, extended rafting excursions, or adventure packages. By choosing our Rafting Point Drive, travelers can focus entirely on the rafting experience, confident that their transportation is fully managed, safe, and reliable, enhancing the overall enjoyment of their adventure.",
    icon: "IoIosBoat",
    answer:
      "Grateful Tours ensures your rafting adventure starts and ends smoothly — with reliable transfers, safety-focused drivers, and complete comfort for your adrenaline-filled day.",
  },
  {
    id: 10,
    title: "Trekking Point Drive",
    slug: "trekking-point-drive",
    description:
      "Reliable vehicle service to and from trekking trailheads such as Pokhara, Lukla, or Syabrubesi.",
    content:
      "Our Trekking Point Drive service provides dependable transportation to the starting points of some of Nepal’s most famous trekking trails, including Pokhara, Lukla, Syabrubesi, and other remote regions. Vehicles are well-maintained, safe, and comfortable, ensuring a smooth start and finish to your trekking adventure. Our drivers are experienced with local terrain and understand the importance of timely arrivals to coordinate with trekking schedules. This service is suitable for solo trekkers, groups, and organized trekking tours. By using our service, trekkers can avoid the stress of navigating unfamiliar roads, ensure luggage transport if required, and focus entirely on the trekking experience, enjoying the scenic journey with convenience and safety guaranteed.",
    icon: "TbTrekking",
    answer:
      "Grateful Tours offers punctual, safe, and comfortable transfers to trekking trailheads — ensuring your journey to the mountains begins and ends hassle-free.",
  },
  {
    id: 11,
    title: "Cultural Program Drive",
    slug: "cultural-program-drive",
    description:
      "Transport service to cultural events, dance shows, and evening programs around the valley.",
    content:
      "Our Cultural Program Drive service offers reliable and convenient transportation to concerts, dance performances, theater shows, and other cultural events throughout the valley. We provide timely pick-ups and drop-offs, comfortable vehicles, and professional drivers who ensure you arrive on time and safely. Whether attending solo, with friends, or as part of a group, travelers can enjoy Nepal’s vibrant cultural scene without worrying about transport logistics. The service is flexible and can accommodate schedules for short evening events or multi-day cultural tours. This ensures that visitors can focus on the performances and experiences while we handle the transportation efficiently and professionally.",
    icon: "MdEventAvailable",
    answer:
      "Choose Grateful Tours for cultural events because we combine comfort, reliability, and local knowledge — helping you experience Nepal’s art and heritage without any travel worries.",
  },
  {
    id: 12,
    title: "Luggage Transfer",
    slug: "luggage-transfer",
    description:
      "Secure and timely luggage transfer between hotels, airports, and other destinations.",
    content:
      "Our Luggage Transfer service offers safe and reliable transportation of your belongings between hotels, airports, bus stations, and other key destinations. Ideal for travelers, tour groups, and long-distance trips, this service ensures that heavy luggage or large amounts of baggage are handled professionally and delivered on time. We provide flexible scheduling, assistance with loading and unloading, and dedicated vehicles for large or delicate items. This service allows travelers to move freely and comfortably without worrying about carrying luggage themselves. By using our Luggage Transfer service, clients can enjoy a seamless travel experience, focusing on sightseeing, meetings, or events, while we handle all aspects of luggage logistics safely and efficiently.",
    icon: "MdLuggage",
    answer:
      "Grateful Tours ensures safe, punctual, and secure luggage transfers — letting you travel light and worry-free with full confidence in our handling and delivery.",
  },
  {
    id: 13,
    title: "Dinner Transfer",
    slug: "dinner-transfer",
    description:
      "Convenient evening transfers to and from restaurants and dining events in and around the valley.",
    content:
      "Our Dinner Transfer service provides safe, comfortable, and punctual transportation to dining venues, evening events, or social gatherings around the valley. Vehicles are modern and well-maintained, ensuring a pleasant travel experience. Professional drivers are familiar with local roads and traffic patterns, guaranteeing timely arrivals and departures. This service is suitable for individuals, families, and groups, allowing clients to enjoy dinner or evening entertainment without worrying about navigation or parking. Flexible scheduling and personalized pick-up/drop-off options make this service ideal for a stress-free, enjoyable dining experience in Kathmandu and surrounding areas.",
    icon: "IoFastFood",
    answer:
      "Grateful Tours provides reliable, clean, and on-time dinner transfers so you can focus on your evening — not on traffic or parking.",
  },
  {
    id: 14,
    title: "Tourist Bus Ticketing",
    slug: "tourist-bus-ticketing",
    description:
      "Book tourist bus tickets for major routes such as Kathmandu–Pokhara, Chitwan, or Lumbini with ease.",
    content:
      "Our Tourist Bus Ticketing service makes travel planning across Nepal seamless and convenient. We provide real-time seat availability, secure booking, and assistance with schedules for major routes such as Kathmandu–Pokhara, Chitwan, Lumbini, and beyond. Travelers can select preferred seats, departure times, and bus types according to their needs. This service is ideal for both individual travelers and groups, ensuring a smooth, hassle-free travel experience. Our team provides guidance on bus amenities, boarding procedures, and route details, allowing travelers to focus on enjoying the journey rather than logistics. Reliability, convenience, and security are the core pillars of our ticketing service, enhancing the overall travel experience across Nepal.",
    icon: "TbBus",
    answer:
      "Grateful Tours simplifies your intercity travel with secure ticketing, real-time assistance, and reliable partnerships with trusted bus operators.",
  },
  {
    id: 15,
    title: "Vehicle Rental at Pokhara",
    slug: "vehicle-rental-pokhara",
    description:
      "Rent cars, jeeps, or vans for sightseeing, tours, and airport transfers in Pokhara.",
    content:
      "Our Vehicle Rental service in Pokhara offers a wide selection of cars, jeeps, and vans to meet all sightseeing, touring, trekking, and airport transfer needs. Vehicles are well-maintained, comfortable, and safe, with the option of professional drivers for those who prefer guided transport. Flexible rental durations allow travelers to plan day trips, multi-day excursions, or extended tours at their own pace. Our service includes assistance with route planning, luggage handling, and local travel tips, ensuring a smooth and enjoyable experience. Whether exploring Pokhara city, nearby lakes, trekking starting points, or other attractions, our vehicle rental service provides freedom, convenience, and peace of mind for all travelers seeking a personalized travel experience.",
    icon: "FaCarSide",
    answer:
      "Choose Grateful Tours in Pokhara for flexible, safe, and comfortable vehicle rentals backed by local expertise and exceptional service quality.",
  },
];
