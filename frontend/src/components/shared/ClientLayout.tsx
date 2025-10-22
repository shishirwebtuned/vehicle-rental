"use client";

import { usePathname } from "next/navigation";
import TopWrapper from "@/components/shared/TopWrapper";
import Footer from "@/components/shared/Footer";
import Banner from "./Banner";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const hideFooterRoutes = ["/login", "/sign-up", "/dashboard", "/admin-dash", "/verify-email"];
    const hideFooter = hideFooterRoutes.some(route => pathname.startsWith(route));

    const hideBannerRoutes = ["/login", "/sign-up", "/dashboard", "/admin-dash", "/verify-email", "/admin-dash/vehicle", "/admin-dash/category", "/admin-dash/booking", "/admin-dash/careers"];

    // Hide banner only on "/" or those routes
    const hideBanner =
        pathname === "/" || hideBannerRoutes.some((route) => pathname === route) ||
        (pathname.startsWith("/our-cars/") && pathname !== "/our-cars");

    return (
        <>
            <TopWrapper />
            {!hideBanner &&
                <div className="md:mt-8 mt-1">
                    {!hideBanner && <Banner />}
                </div>
            }

            {children}
            {!hideFooter && <Footer />}
        </>
    );
}
