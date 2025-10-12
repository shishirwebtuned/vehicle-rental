"use client";

import { usePathname } from "next/navigation";
import TopWrapper from "@/components/shared/TopWrapper";
import Footer from "@/components/shared/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const hideFooterRoutes = ["/login", "/sign-up", "/dashboard", "/admin-dash"];

    const hideFooter = hideFooterRoutes.some((route) =>
        pathname.startsWith(route)
    );

    return (
        <>
            <TopWrapper />
            {children}
            {!hideFooter && <Footer />}
        </>
    );
}
