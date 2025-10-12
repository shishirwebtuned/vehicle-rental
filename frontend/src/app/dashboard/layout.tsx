"use client";

import React from "react";
import Link from "next/link";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Home, Tag, Truck, Users, CalendarCheck } from "lucide-react";


const menuItems = [
    { icon: <Home />, label: "Home", route: "/admin-dash" },
    { icon: <Tag />, label: "Categories", route: "/admin-dash/category" },
    { icon: <Truck />, label: "Vehicles", route: "/admin-dash/vehicle" },
    { icon: <Users />, label: "Users", route: "/admin-dash/users" },
    { icon: <CalendarCheck />, label: "Bookings", route: "/admin-dash/booking" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
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
                                    <SidebarMenuItem key={item.route}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.route} className="flex items-center gap-2">
                                                {item.icon}
                                                <span className="truncate sidebar-label">{item.label}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroup>
                    </SidebarContent>

                    <SidebarFooter>
                        <p className="text-xs">© 2025 MyCompany</p>
                    </SidebarFooter>
                </Sidebar>

                <SidebarInset className="flex-1 bg-gray-50 p-6">
                    {children}
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}

function DashboardHeader() {
    const { state } = useSidebar();

    return (
        <div className="flex items-center justify-between">
            <span className={`font-bold text-lg truncate ${state === "collapsed" ? "hidden" : "inline-block"}`}>
                Dashboard
            </span>
            <SidebarTrigger />
        </div>
    );
}
