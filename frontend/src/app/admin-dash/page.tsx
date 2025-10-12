"use client";

import { MasterTable } from '@/components/shared/MasterTable'
import React from 'react'

export interface User {
    id: number;
    name: string;
    email: string;
    role: "admin" | "customer";
    phone: string;
}

export const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "phone", label: "Phone" },
];

export const rows: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "admin",
        phone: "9876543210",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "customer",
        phone: "9876543211",
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "customer",
        phone: "9876543212",
    },
    {
        id: 4,
        name: "Bob Williams",
        email: "bob@example.com",
        role: "admin",
        phone: "9876543213",
    },
    {
        id: 5,
        name: "Eve Davis",
        email: "eve@example.com",
        role: "customer",
        phone: "9876543214",
    },
];

const page = () => {

    return (
        <div>
            for admin
            <MasterTable
                columns={[
                    { key: "id", label: "ID" },
                    { key: "name", label: "Name" },
                    { key: "email", label: "Email" },
                    { key: "role", label: "Role" },
                ]}
                rows={rows}
                onEdit={(row) => console.log("Edit", row)}
                onDelete={(row) => console.log("Delete", row)}
                onView={(row) => console.log("View", row)}
            />
        </div>
    )
}

export default page
