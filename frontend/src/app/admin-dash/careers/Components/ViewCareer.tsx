"use client";

import { useGetCareerByIdQuery } from "@/redux/api/rest/query/queryApi";
import React from "react";

interface ViewCareerProps {
    careerId: string | null;
}

const ViewCareer: React.FC<ViewCareerProps> = ({
    careerId
}) => {
    const { data, isLoading, isError } = useGetCareerByIdQuery({ id: careerId! }, {
        skip: !careerId,
    });

    const career = data?.data?.career;

    if (!careerId) return <p>No career selected</p>;
    if (isLoading) return <p>Loading career details...</p>;
    if (isError) return <p>Failed to load career details.</p>;

    return (
        <div className="bg-white dark:bg-gray-800">
            <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-200 text-xs md:text-sm lg:text-base">
                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Job Name:</span>
                    <span className="text-gray-600 dark:text-gray-300">{career.jobName}</span>
                </p>

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Job Field:</span>
                    <span className="text-gray-600 dark:text-gray-300">{career.jobField}</span>
                </p>

                <p className="flex flex-col bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Description:</span>
                    <span className="text-gray-600 dark:text-gray-300 mt-1">{career.description}</span>
                </p>

                <p className="flex flex-col bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Requirements:</span>
                    <ul className="text-gray-600 dark:text-gray-300 mt-1 list-disc list-inside">
                        {career.requirements.map((req: string, idx: number) => (
                            <li key={idx}>{req}</li>
                        ))}
                    </ul>
                </p>

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Location:</span>
                    <span className="text-gray-600 dark:text-gray-300">{career.location}</span>
                </p>

                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Type:</span>
                    <span className="text-gray-600 dark:text-gray-300">{career.type}</span>
                </p>
            </div>
        </div>


    );
};

export default ViewCareer;
