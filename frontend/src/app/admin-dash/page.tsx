"use client";

import { useGetUserByIdQuery } from '@/redux/api/rest/query/queryApi';
import React, { useEffect, useState } from 'react'

const page = () => {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem("user");
        if (storedUserData) {
            const parsed = JSON.parse(storedUserData);
            setUserId(parsed.id);
        }
    }, []);

    const { data: user, isLoading, isError } = useGetUserByIdQuery({ id: userId! }, {
        skip: !userId,
    });

    const userData = user?.data?.user
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching user data</p>;

    return (
        <div className="p-6 bg-gray-50 flex flex-col items-center justify-center h-full">
            {/* Welcome Header */}
            <div className="mb-8 font-nunito text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Welcome to Admin Dashboard
                </h1>
                <p className="text-gray-600 mt-8 text-sm md:text-base">
                    Manage your vehicles, categories and booking settings here
                </p>
            </div>

            {/* User Info Card */}
            <div className="w-full max-w-4xl p-6 border font-nunito border-gray-200 rounded-md shadow-sm">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
                    Your Profile
                </h2>
                <div className="flex flex-col gap-4 text-gray-700">
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-900">Name:</span>
                        <span>{userData?.name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-900">Email:</span>
                        <span>{userData?.email}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-900">Role:</span>
                        <span className="capitalize">{userData?.role}</span>
                    </div>
                </div>
            </div>

            {/* <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-lg text-blue-700 mb-2">Quick Stats</h3>
                    <p className="text-gray-600">Total users, vehicles, and other stats will go here.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-lg text-green-700 mb-2">Recent Activity</h3>
                    <p className="text-gray-600">View the latest actions performed in your dashboard.</p>
                </div>
            </div> */}
        </div>
    );
}

export default page
