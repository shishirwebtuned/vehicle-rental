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
    title: "Top Places to Visit in Kathmandu with a Rental Car",
    slug: "top-places-to-visit-in-kathmandu-with-a-rental-car",
    description: `
      Kathmandu is a city that blends ancient culture, spiritual energy, and modern life all in one. From historic temples and narrow alleys to hilltop viewpoints and local food spots, there’s so much to explore. And the best way to experience it all? By renting a car and driving around at your own pace.

      At Grateful Tours and Transportation Service Pvt. Ltd., we make exploring Kathmandu comfortable and convenient. Whether you’re a traveler or a local, renting a car gives you the freedom to go anywhere, anytime - without waiting for taxis or worrying about crowded buses.

    `,
    image: "/images/chandragiri.jpeg",
    imageType: "jpeg",
    author:
      "Grateful Tours and Transportation Service Pvt. Ltd., Gairidhara, Kathmandu",
    content: {
      title:
        " Here are some of the best places to visit in Kathmandu with a rental car:",

      data: `
        1. Swayambhunath (Monkey Temple)
        Perched on a hilltop, Swayambhunath offers one of the best panoramic views of Kathmandu Valley. You can drive up in your rental car and enjoy a peaceful walk around the stupa, surrounded by prayer flags and curious monkeys. It’s the perfect blend of spirituality and scenic beauty.

        2. Pashupatinath Temple
        Pashupatinath is one of the holiest Hindu temples in Nepal, located just a short drive from the city center. Renting a car lets you visit comfortably during morning or evening aarti hours when the atmosphere is truly magical - and taxis are often hard to find.

        3. Boudhanath Stupa
        Just a 20-minute drive from Gairidhara, Boudhanath is one of the largest stupas in Asia. The area is surrounded by Tibetan monasteries, cozy cafes, and souvenir shops. It’s a great place to relax, meditate, or enjoy a traditional momo lunch after your drive.

        4. Patan Durbar Square
        A short drive from Kathmandu city, Patan Durbar Square is a UNESCO World Heritage Site known for its ancient temples and detailed Newari craftsmanship. Having your own car makes it easier to explore not just the square but also nearby art galleries and local restaurants at your own pace.

        5. Bhaktapur Durbar Square
        If you’re in the mood for a little day trip, drive to Bhaktapur - about 45 minutes away. This beautifully preserved medieval town is full of charm, with brick-paved streets, traditional wood carvings, and the famous Juju Dhau (King Curd). Renting a car gives you the flexibility to explore comfortably and head back whenever you wish.

        6. Nagarkot
        For a peaceful getaway from the city, drive up to Nagarkot. Just 1.5 hours from Kathmandu, it’s one of the best spots for sunrise and sunset views over the Himalayas. With a private car, you can stop at scenic points along the way and truly enjoy the journey, not just the destination.

        7. Chandragiri Hills
        Located on the outskirts of Kathmandu, Chandragiri offers a perfect mix of adventure and spirituality. Park your car at the base, then take the cable car ride to the top for a stunning mountain view and a visit to the Bhaleshwar Mahadev Temple.

        8. Garden of Dreams & Thamel
        If you prefer something within the city, visit the Garden of Dreams - a peaceful escape in the middle of busy Kathmandu. After relaxing there, drive over to Thamel for shopping, dining, and nightlife. Having your own car means you can explore freely without worrying about taxi fares or waiting times.
    `,
    },

    whyChooseQuestion: `
          Why Choose Grateful Tours and Transportation Service Pvt. Ltd.?
          `,
    whyChooseAnswer: `
          At Grateful Tours, we’re more than just a car rental company - we’re your travel companion.

          Here’s why travelers and locals trust us:

          1. Well-maintained vehicles (Sedan, SUV, Hiace & more)
          2. Affordable prices with no hidden charges
          3. Professional and friendly drivers
          4. Flexible packages for city and long-distance trips
          5. Conveniently located in Gairidhara, Kathmandu
          6. 24/7 customer support for both local and foreign clients
          `,
    finalThoughts: `
          Exploring Kathmandu with a rental car gives you freedom, comfort, and flexibility. You can visit ancient temples, hill stations, or quiet cafe’s - all on your own schedule. With Grateful Tours and Transportation Service Pvt. Ltd., your journey around Kathmandu becomes easier, safer, and more enjoyable.

          So next time you plan to explore the valley, rent a car in Kathmandu and make every trip memorable with us!`,
  },
  {
    id: 2,
    title: "Why Renting a Car in Kathmandu is Better Than Using a Taxi",
    slug: "why-renting-a-car-in-kathmandu-is-better-than-using-a-taxi",
    description: `
        Kathmandu is a city full of charm - rich culture, ancient temples, narrow lanes, and stunning hill views. But moving around the valley can be a real challenge if you depend on taxis. Long waits, price bargaining, and inconsistent service often take away from the joy of traveling.

        That’s why more people - both locals and tourists - are now choosing car rental services in Kathmandu instead. At Grateful Tours and Transportation Service Pvt. Ltd., we’ve seen how renting a car makes travel smoother, more flexible, and much more comfortable.
    `,
    image: "/images/byd.png",
    imageType: "png",
    author:
      "Grateful Tours and Transportation Service Pvt. Ltd., Gairidhara, Kathmandu",
    content: {
      title:
        "Here are  clear reasons why renting a car in Kathmandu is a better choice than using taxis:",
      data: `

            1. Freedom to Travel on Your Own Schedule
            When you rent a car, you decide when to go and where to stop. There’s no waiting for a taxi, no cancellation from apps, and no rush to finish your trip quickly. You can start early, stop for photos, take breaks, and travel at your own pace — complete freedom and flexibility.

            2. More Affordable for Long or Multi-Stop Trips
            Taxis might look cheaper for a single ride, but if you’re exploring several destinations in one day; like Pashupatinath, Boudha, and Bhaktapur - the total cost adds up fast. Renting a car for the day often costs less than taking multiple taxis, especially if you’re traveling with friends or family and sharing expenses.

            3. Easy Access to Hidden Gems Outside the City
            Many of Kathmandu’s best experiences - like Nagarkot sunrise, Dhulikhel hill views, or Chandragiri cable car rides, are outside the city center. Some taxis may refuse long routes or charge extra. With a rental car, you can explore these destinations freely and enjoy the scenic drives on your own time.

            4. Comfort, Cleanliness, and Privacy
            Taxis in Kathmandu can vary a lot in quality. Some are old, cramped, or not well-maintained. With Grateful Tours, you get a clean, air-conditioned, and comfortable car;  perfect for both short city drives and long-distance trips. Plus, you can enjoy your own music, conversations, and quiet time without any interruptions.

            5. No Waiting or Negotiation Hassles
            Finding a taxi during peak hours, rainy weather, or after events can be stressful. You either end up waiting too long or overpaying. When you rent a car, there’s no waiting or haggling - your vehicle is ready when you are. Simple, reliable, and convenient.

            6. Professional Drivers for a Safer Experience
            If you prefer not to drive, Grateful Tours offers professional chauffeur services. Our drivers are polite, trained, and familiar with all the major routes and landmarks in and around Kathmandu. You can sit back, relax, and enjoy a smooth ride without worrying about traffic or directions.

            7. Perfect for Business, Tours, and Family Travel
            Whether you’re here for meetings, sightseeing, or a family holiday, renting a car makes your travel experience easier. Business travelers appreciate the punctuality and privacy, while families love the space and flexibility to make spontaneous stops or detours.

            8. Reliable Service with 24/7 Support
            At Grateful Tours and Transportation Service Pvt. Ltd., we’re committed to offering dependable service at all times. Our support team is available 24/7 to assist with bookings, route suggestions, and emergencies - making sure your journey across Kathmandu and beyond is smooth and worry-free.
    `,
    },
    whyChooseQuestion: `
          Why Choose Grateful Tours and Transportation Service Pvt. Ltd.?
          `,
    whyChooseAnswer: `
          We’re proud to be one of Kathmandu’s trusted names in car rental and transport. Our services include:

          1. Wide range of vehicles (Sedan, SUV, Van, Hiace & more)
          2. Affordable rates with flexible hourly or daily plans
          3. Chauffeur-driven or self-drive options
          4. Clean, comfortable, and well-maintained cars
          5. Conveniently located in Gairidhara, Kathmandu
          6. 24/7 support for local and international travelers
          `,
    finalThoughts: `
      Kathmandu is best explored at your own pace - and renting a car gives you that freedom. Whether you’re a tourist discovering Nepal’s heritage or a local planning a weekend getaway, a rental car offers comfort, privacy, and control that taxis can’t match.

      With Grateful Tours and Transportation Service Pvt. Ltd., your journey becomes smooth, enjoyable, and completely stress-free.

      So next time you’re in the valley, skip the taxi and rent a car in Kathmandu - travel smart, travel your way.
      `,
  },

  {
    id: 3,
    title: "What to Check Before Renting a Car in Nepal",
    slug: "what-to-check-before-renting-a-car-in-nepal",
    description: `
      Renting a car in Nepal is one of the best ways to explore the country’s natural beauty and cultural charm. Whether you’re driving through the busy streets of Kathmandu, heading toward Pokhara’s lakeside, or planning a mountain getaway, a rental car gives you freedom, comfort, and flexibility.

      But before you sign the rental agreement or start the engine, it’s important to make sure you know exactly what you’re getting. At Grateful Tours and Transportation Service Pvt. Ltd., we want every traveler to enjoy a safe, smooth, and hassle-free ride.

    `,
    image: "/images/landcruiser1.png",
    imageType: "png",
    author:
      "Grateful Tours and Transportation Service Pvt. Ltd., Gairidhara, Kathmandu",
    content: {
      title:
        "Here are 8 important things to check before renting a car in Nepal:",

      data: `

    
          1. Vehicle Condition and Cleanliness
          Always start by inspecting the car carefully. Check the body for scratches, dents, or damage, and make sure all lights, brakes, and mirrors work properly. Inside, look for cleanliness, seat comfort, and air-conditioning. A quick check helps you avoid any confusion or charges later.
          Tip: Take photos or a short video of the car before driving off, especially if it’s a self-drive rental.

          2. Documents and Insurance Coverage
          Make sure the car has all the required legal documents - valid registration, insurance, and road permit. Ask whether the insurance covers accidents, theft, or third-party damage. Reliable companies like Grateful Tours provide full insurance coverage for both vehicles and passengers.

          3. Driver’s License and ID Requirements
          For self-drive rentals, you’ll need a valid driver’s license.
          Nepali citizens can use their regular driving license.
          Foreign visitors must carry an International Driving Permit (IDP) along with their home country license.
          Always carry a copy of your passport or citizenship ID as well - you may be asked for verification during police checks.

          4. Fuel Policy and Mileage Limits
          Before you rent, clarify whether the car comes with a full tank and whether you should return it full. Also, ask about mileage limits — some companies charge extra after a certain distance. At Grateful Tours, we provide clear fuel and mileage policies so there are no surprises later.

          5. Emergency Contacts and Support
          Ask your rental company what happens in case of a breakdown or emergency. A trusted car rental service will provide a 24/7 helpline or roadside assistance number. This ensures you’re never stranded during your trip, whether you’re in Kathmandu or driving toward remote areas.

          6. Pricing Transparency and Hidden Charges
          Before confirming your booking, review the rental agreement carefully. Some companies add hidden charges for late returns, extra kilometers, or cleaning fees. Choose a company that offers clear, transparent pricing - like Grateful Tours, where you only pay what you’re quoted.

          7. Navigation, GPS, and Accessories
          If you’re new to Nepal or driving outside the city, GPS navigation is a must. Confirm if the rental car includes a GPS system, phone mount, or charging port. You can also request child seats or Wi-Fi devices if needed. These small details make a big difference during long drives.

          8. Driver Experience and Professionalism
          If you’re hiring a car with a driver, check their experience and behavior. A polite, knowledgeable driver can make your journey safer and more enjoyable. At Grateful Tours, all our drivers are trained professionals who know Nepal’s routes, culture, and hospitality standards.
    `,
    },
    whyChooseQuestion: `
          Why Rent with Grateful Tours and Transportation Service Pvt. Ltd.?
          `,
    whyChooseAnswer: `
          We make car rental in Nepal simple, safe, and reliable.
          Here’s what you can expect from us:

          1. Well-maintained vehicles (Sedan, SUV, Hiace, Van & more)
          2. Self-drive or chauffeur-driven options
          3. Affordable pricing with no hidden costs
          4. Full insurance coverage
          5. 24/7 roadside assistance
          6. Located conveniently in Gairidhara, Kathmandu

          `,
    finalThoughts: `
      Renting a car gives you the freedom to explore Nepal your way - from city streets to mountain highways. But before you hit the road, always check the vehicle, documents, and terms carefully. A few minutes of inspection can save you a lot of stress later.

      For a safe and reliable experience, trust Grateful Tours and Transportation Service Pvt. Ltd.; your friendly car rental partner in Kathmandu.
      `,
  },

  // {
  //   id: 1,
  //   title: "Top 10 Electric Cars in 2025",
  //   slug: "top-10-electric-cars-in-2025",
  //   description:
  //     "Discover the latest electric cars hitting the market this year, featuring cutting-edge technology and eco-friendly design.",
  //   image: "/images/mgBlack.png",
  //   content: `
  //     The electric vehicle (EV) market in 2025 is more exciting than ever. Automakers around the world are introducing advanced, high-performance EVs designed to meet the needs of both eco-conscious drivers and performance enthusiasts.

  //     Here are the top 10 electric cars that are leading the charge:
  //     1. Tesla Model 3 Refresh – Improved range, faster acceleration, and futuristic interiors.
  //     2. Lucid Air Sapphire – Luxury meets innovation with record-breaking range and comfort.
  //     3. Rivian R1S – Perfect for adventurous families who value sustainability.
  //     4. Hyundai Ioniq 6 – Sleek design with top-tier efficiency.
  //     5. BYD Seal – China’s rising EV powerhouse with great value.
  //     6. Porsche Taycan GTS – For drivers who crave performance and precision.
  //     7. BMW i4 – Blends luxury and power in a refined electric sedan.
  //     8. Kia EV9 – Spacious, futuristic, and family-ready.
  //     9. Ford Mustang Mach-E GT – American muscle reinvented for the EV era.
  //     10. MG4 EV – Affordable yet stylish EV making waves in the global market.

  //     With better battery technology, faster charging, and lower maintenance costs, 2025 marks a major step toward an all-electric future.
  //   `,
  // },
  // {
  //   id: 2,
  //   title: "How to Maintain Your Car for Longevity",
  //   slug: "how-to-maintain-your-car-for-longevity",
  //   description:
  //     "A complete guide to regular car maintenance tips that keep your vehicle running smoothly and efficiently.",
  //   image: "/images/mgWhite.png",
  //   content: `
  //     Keeping your car in top condition not only extends its lifespan but also ensures safety and better performance. Regular maintenance can save you from costly repairs in the long run.

  //     Here are essential tips for maintaining your vehicle:
  //     - Check your oil regularly: Change it every 5,000–7,000 km or as recommended by your manufacturer.
  //     - Inspect tire pressure and alignment: Proper inflation improves mileage and prevents uneven wear.
  //     - Replace air filters: Dirty filters reduce engine efficiency.
  //     - Keep your battery clean: Corrosion can cause starting issues.
  //     - Wash and wax your car: Protects paint and prevents rusting.
  //     - Brake inspections: Ensure safe stopping and avoid brake failures.
  //     - Use quality fuel and fluids: Keeps the engine running smoothly.

  //     With consistent care and timely servicing, your car can easily exceed its expected lifespan and retain great resale value.
  //   `,
  // },
  // {
  //   id: 3,
  //   title: "Best Road Trips Across Europe",
  //   slug: "best-road-trips-across-europe",
  //   description:
  //     "Plan your next adventure with our list of must-visit European destinations and scenic routes for unforgettable road trips.",
  //   image: "/images/mgBlack.png",
  //   content: `
  //     Europe offers some of the most breathtaking road trip routes in the world. Whether you’re exploring mountains, coastlines, or historic towns, these routes promise unforgettable experiences.

  //     Here are our top picks:
  //     1. Amalfi Coast, Italy: Winding coastal roads with views of turquoise seas and charming cliffside villages.
  //     2. Ring Road, Iceland: A full-circle route that takes you past waterfalls, glaciers, and volcanic landscapes.
  //     3. Romantic Road, Germany: Explore medieval towns like Rothenburg and Neuschwanstein Castle.
  //     4. Transfăgărășan Highway, Romania: Known as one of the world’s most beautiful driving roads.
  //     5. North Coast 500, Scotland: Rugged coastlines, castles, and remote Highland beauty.
  //     6. French Riviera, France: Glamour, sunshine, and seaside towns like Nice and Cannes.
  //     7. Basque Country, Spain: A mix of culture, food, and stunning natural landscapes.

  //     Pack your essentials, set your playlist, and hit the open road — Europe is waiting for your next adventure.
  //   `,
  // },
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
  {
    question: "Are drivers available with the car rental?",
    answer:
      "Yes, we provide professional and experienced drivers upon request. Whether you prefer to sit back and relax or need local guidance, our drivers ensure a safe and stress-free travel experience.",
  },
  {
    question: "Are your drivers licensed and experienced?",
    answer:
      "Absolutely. All our drivers are fully licensed, trained, and experienced in both city and long-distance travel. They prioritize passenger comfort, punctuality, and safety at all times.",
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
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
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
    image: "/images/services.jpg",
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
    image: "/images/chandragiri.jpeg",
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
    image: "/images/services2.jpg",
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
    image: "/images/chandragiri.jpeg",
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
    image: "/images/chandragiri.jpeg",
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
    image: "/images/bhutan.jpg",
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
    image: "/images/jungleSafari.jpg",
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
    image: "/images/mountainFlight.jpg",
  },
  {
    id: 9,
    title: "Rafting & Trekking Point Drive",
    slug: "rafting-and-trekking-point-drive",
    description:
      "Safe, reliable, and comfortable transfers to Nepal’s popular rafting and trekking destinations.",
    content:
      "Our Rafting & Trekking Point Drive service provides dependable and comfortable transportation to Nepal’s most thrilling adventure spots — from white-water rafting points like Trishuli and Bhotekoshi rivers to iconic trekking trailheads in Pokhara, Lukla, and Syabrubesi. We offer well-maintained vehicles suitable for groups and rugged terrains, ensuring every journey is safe, punctual, and hassle-free. Our experienced drivers are familiar with local routes, weather, and terrain, guaranteeing smooth coordination with your adventure plans. Whether it’s the rush of the rapids or the calm of the mountains, we make sure you get there comfortably, safely, and on time.",
    icon: "IoIosBoat",
    answer:
      "Grateful Tours provides smooth, safe, and punctual transfers for both rafting and trekking journeys — so your adventure starts and ends stress-free.",
    image: "/images/rafting.jpg",
  },
  {
    id: 10,
    title: "Vehicle Booking and Transportation for Weddings",
    slug: "vehicle-booking-and-transporttion-for-weddings",
    description:
      "Elegant and reliable vehicle services for weddings, receptions, and special events across Nepal.",
    content:
      "Our Wedding & Event Transportation service ensures that your special day runs smoothly and in style. We provide a wide range of well-maintained vehicles — from luxurious cars for the bride and groom to spacious vans and buses for guests and family members. Each vehicle is clean, comfortable, and driven by professional chauffeurs who prioritize punctuality, courtesy, and safety. Whether it’s a wedding ceremony, reception, or any celebratory event, our team coordinates every transfer with care and precision. We also offer customizable decoration options for bridal cars to match your event’s theme. With Grateful Tours, you can relax and focus on creating memories while we take care of every ride — on time, elegant, and stress-free.",
    icon: "FaCar",
    answer:
      "Grateful Tours delivers elegant, timely, and comfortable transportation for weddings and special events — ensuring every journey is memorable and worry-free.",
    image: "/images/wedding.jpg",
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
    image: "/images/culture.jpg",
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
    image: "/images/luggage.jpg",
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
    image: "/images/food.jpg",
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
    image: "/images/tourist.jpg",
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
    image: "/images/pokhara.jpg",
  },
];
