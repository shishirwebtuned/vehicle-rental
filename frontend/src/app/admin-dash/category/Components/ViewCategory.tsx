"use client";

import { useGetCategoryByIdQuery } from "@/redux/api/rest/query/queryApi";
import React from "react";

interface ViewCategoryProps {
    categoryId: string | null;
}

const ViewCategory: React.FC<ViewCategoryProps> = ({ categoryId }) => {
    const { data, isLoading, isError } = useGetCategoryByIdQuery({ categoryId: categoryId! }, {
        skip: !categoryId,
    });

    const category = data?.data?.category;

    if (!categoryId) return <p>No category selected</p>;
    if (isLoading) return <p>Loading category details...</p>;
    if (isError) return <p>Failed to load category details.</p>;

    return (
        <div className="bg-white dark:bg-gray-800">

            <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-200 text-xs md:text-sm lg:text-base">
                <p className="flex justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Name:</span>
                    <span className="text-gray-600 dark:text-gray-300">{category.name}</span>
                </p>

                <p className="flex flex-col bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Description:</span>
                    <span className="text-gray-600 dark:text-gray-300 mt-1">{category.description}</span>
                </p>
            </div>


            {category.image?.url && (
                <div className="mt-5 flex flex-col w-full justify-center">
                    <span className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Image:</span>
                    <img
                        src={category.image.url}
                        alt={category.name}
                        className="rounded-lg object-contain max-h-64 w-full md:w-auto shadow-md border border-gray-200 dark:border-gray-700"
                    />
                </div>
            )}
        </div>

    );
};

export default ViewCategory;
