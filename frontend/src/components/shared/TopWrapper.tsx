"use client";

import { usePathname } from "next/navigation";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Header = () => {
    const pathname = usePathname();

    const hideNavbarRoutes = ["/login", "/sign-up", "/verify-email"];
    const hideHeaderRoutes = ["/dashboard", "/admin-dash"];

    const hideHeader = hideHeaderRoutes.some(route => pathname.startsWith(route));
    if (hideHeader) return null;


    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <Topbar />
            {!hideNavbarRoutes.includes(pathname) && <Navbar />}
        </header>
    );
};

export default Header;
