import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather, Nunito } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./provider";
import { Toaster } from "react-hot-toast";
import ClientLayout from "@/components/shared/ClientLayout";
import 'react-phone-input-2/lib/style.css';
import { WhatsappChat } from "@/components/shared/WhatsappChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-geist-merriw",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-geist-nunito",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grateful Tours & Transportation | Vehicle Rental & Travel Services in Nepal",
  description:
    "Grateful Tours & Transportation provides premium vehicle rental, car booking, and travel services across Nepal. Choose from our wide range of luxury cars, SUVs, buses and vans for a safe, comfortable, and timely journey.",
  keywords: [
    "Grateful Tours",
    "Grateful Tours & Transportation",
    "Car Rental Nepal",
    "Vehicle Booking Nepal",
    "Tour and Travel Nepal",
    "Car Hire Kathmandu",
    "Airport Transfer Nepal",
    "Luxury Car Rental",
    "SUV Rental",
    "Van Rental",
    "Transportation Services",
    "Travel Agency Nepal",
    "Car Hire Service",
    "Car Rental Company Nepal",
    "Nepal Tourism Transport",
  ],
  authors: [{ name: "Grateful Tours & Transportation" }],
  creator: "Grateful Tours & Transportation",
  publisher: "Grateful Tours & Transportation",
  metadataBase: new URL("https://gratefultours.com/"),
  openGraph: {
    title: "Grateful Tours & Transportation | Car Rental & Travel Services in Nepal",
    description:
      "Discover reliable vehicle rental and tour services with Grateful Tours & Transportation. Rent luxury cars, SUVs, buses and vans for business, travel, or special occasions in Nepal.",
    url: "https://gratefultours.com/",
    siteName: "Grateful Tours & Transportation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grateful Tours & Transportation - Premium Vehicle Rental in Nepal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grateful Tours & Transportation | Car Rental & Travel Services in Nepal",
    description:
      "Book reliable and comfortable cars, SUVs, and vans with Grateful Tours & Transportation. Trusted for safe, professional, and on-time travel services in Nepal.",
    images: ["/og-image.jpg"],
    creator: "@GratefulTours",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Grateful Tours & Transportation",
              url: "https://gratefultours.com",
              logo: "https://gratefultours.com/logo.png",
              image: "https://gratefultours.com/og-image.jpg",
              description:
                "Grateful Tours & Transportation offers professional vehicle rental, car booking, and tour services across Nepal. Rent luxury cars, SUVs, and vans for safe and comfortable travel.",
              sameAs: [
                "https://www.facebook.com/gratefultours",
                "https://www.instagram.com/gratefultours",
                "https://www.linkedin.com/company/gratefultours",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+977-9801170674",
                contactType: "Customer Service",
                areaServed: "NP",
                availableLanguage: ["English", "Nepali"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kathmandu, Nepal",
                addressLocality: "Kathmandu",
                addressCountry: "NP",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "20:00",
                },
              ],
            }),
          }}
        />

        <link rel="canonical" href="https://gratefultours.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

      </head>
      <body
        className={`scroll-smooth ${geistSans.variable} ${nunito.variable} ${merriweather.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ClientLayout>
            {children}

          </ClientLayout>
          <WhatsappChat />

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                borderRadius: '8px',
                padding: '12px 16px',
                fontWeight: '500',
              },

              success: {
                style: {
                  background: '#d1fae5',
                  color: '#065f46',
                },
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#ecfdf5',
                },
              },

              error: {
                style: {
                  background: '#fee2e2',
                  color: '#991b1b',
                },
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fef2f2',
                },
              },
            }}
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
