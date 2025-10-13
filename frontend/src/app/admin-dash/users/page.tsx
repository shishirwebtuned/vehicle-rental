"use client";

import { CustomButton } from '@/components/shared/CustomButton';
import DeleteDialog from '@/components/shared/DeleteDialog';
import MasterDialog from '@/components/shared/MasterDialog';
import MasterForm from '@/components/shared/MasterForm';
import MasterFormDash from '@/components/shared/MasterFormDash';
import { Column, MasterTable } from '@/components/shared/MasterTable'
import { Button } from '@/components/ui/button';
import { useCreateCategoryMutation, useDeleteCategoryMutation, useUpdateCategoryMutation } from '@/redux/api/rest/mutation/otherApi';
import { useGetAllCategoriesQuery, useGetAllUsersQuery } from '@/redux/api/rest/query/queryApi';
import { Flag } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';


const page = () => {

    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

    const { data: users, isLoading, isError } = useGetAllUsersQuery();

    console.log("users", users);
    const usersData = users?.data?.users || [];

    const columns: Column<{ id: string, name: string, description: string }>[] = [{ key: "id", label: "id" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phoneNumber", label: "Phone Number" },
    { key: "address", label: "Address" },
    { key: "status", label: "status" },

    ]

    const rows = usersData?.map((user: any, index: number) => ({
        id: index + 1,
        _id: user?._id ?? "N/A",
        name: user?.name ?? "N/A",
        email: user?.email ?? "N/A",
        phoneNumber: user?.phoneNumber ?? "N/A",
        address: user?.address ?? "N/A",
        status: user?.status ?? "N/A",

    })) || [];



    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-row items-center justify-start'>
                <h2 className='font-nunito lg:text-xl md:text-lg text-base font-semibold'>
                    Users List
                </h2>

            </div>
            <MasterTable
                columns={columns}
                rows={rows}

            />


        </div>
    )
}

export default page
