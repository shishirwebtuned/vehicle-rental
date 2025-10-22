"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Home, Tag, Truck, Users, CalendarCheck, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import LogoutDialog from "@/components/shared/LogoutDialog";




export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    const [logoutOpen, setLogoutOpen] = useState<boolean>(false);
    const router = useRouter();

    const menuItems = [
        { id: 1, icon: <Home />, label: "Home", route: "/admin-dash" },
        { id: 2, icon: <Tag />, label: "Categories", route: "/admin-dash/category" },
        { id: 3, icon: <Truck />, label: "Vehicles", route: "/admin-dash/vehicle" },
        // { id: 4, icon: <Users />, label: "Users", route: "/admin-dash/users" },
        { id: 4, icon: <CalendarCheck />, label: "Bookings", route: "/admin-dash/booking" },
        {
            id: 5, icon: <LogOut />, label: "Logout", onClick: () => setLogoutOpen(true)
        },
    ];

    const handleLogout = () => {
        Cookies.remove("userToken");
        Cookies.remove("userRole");

        localStorage.removeItem("user");

        setLogoutOpen(false);
        router.push("/login");
    }

    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full text-black">
                <Sidebar side="left" collapsible="icon">
                    <SidebarHeader>
                        <DashboardHeader />
                    </SidebarHeader>

                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarMenu>
                                {menuItems.map((item) => (
                                    <SidebarMenuItem key={item.id} className="font-nunito font-semibold">
                                        {item.route ? (
                                            <SidebarMenuButton asChild>
                                                <Link href={item.route} className="flex items-center gap-2">
                                                    {item.icon}
                                                    <span className="truncate sidebar-label">{item.label}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        ) : (
                                            <SidebarMenuButton className="flex items-center gap-2 cursor-pointer" onClick={item.onClick}>

                                                {item.icon}
                                                <span className="truncate sidebar-label">{item.label}</span>
                                            </SidebarMenuButton>
                                        )}

                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroup>
                    </SidebarContent>

                    <SidebarFooter>
                        <p className="text-xs break-words whitespace-normal text-center">© {new Date(Date.now()).getFullYear()} Grateful Tours & Transportation</p>
                    </SidebarFooter>
                </Sidebar>

                <SidebarInset className="flex-1 bg-gray-50 p-6">
                    <div className="md:hidden mb-4">
                        <SidebarTrigger />
                    </div>
                    {children}
                </SidebarInset>

                <LogoutDialog open={logoutOpen}
                    onClose={() => setLogoutOpen(false)}
                    onConfirm={handleLogout}
                    title="Logout"
                    description="Are you sure you want to Logout?"
                />
            </div>
        </SidebarProvider>
    );
}

function DashboardHeader() {
    const { state } = useSidebar();

    return (
        <div className="flex items-center justify-between">
            <span className={`font-bold font-nunito text-lg truncate ${state === "collapsed" ? "hidden" : "inline-block"}`}>
                Dashboard
            </span>
            <SidebarTrigger />
        </div>
    );
}
