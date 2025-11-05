"use client";

import { useGetBlogByIdQuery } from "@/redux/api/rest/query/queryApi";
import React from "react";

interface ViewBlogProps {
    blogId: string | null;
}

const ViewBlog: React.FC<ViewBlogProps> = ({
    blogId
}) => {
    const { data, isLoading, isError } = useGetBlogByIdQuery({ id: blogId! }, {
        skip: !blogId,
    });

    const blog = data?.data?.blog;

    if (!blogId) return <p>No blog selected</p>;
    if (isLoading) return <p>Loading blog details...</p>;
    if (isError) return <p>Failed to load blog details.</p>;

    return (
        <div className="bg-white dark:bg-gray-800">
            <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-200 text-xs md:text-sm lg:text-base">
                <p className="flex flex-col justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100"> Title:</span>
                    <span className="text-gray-600 dark:text-gray-300">{blog.title}</span>
                </p>

                <p className="flex flex-col justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Description:</span>
                    <span className="text-gray-600 dark:text-gray-300">{blog.description}</span>
                </p>

                <p className="flex flex-col bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Content:</span>
                    <span className="text-gray-600 dark:text-gray-300 mt-1"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </p>

                <p className="flex flex-col bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Author:</span>
                    <ul className="text-gray-600 dark:text-gray-300 mt-1 list-disc list-inside">
                        {blog.author}
                    </ul>
                </p>

                {blog.whyChooseUs && (
                    <p className="flex flex-col bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                        <span className="font-semibold text-gray-800 dark:text-gray-100">Why Choose Us:</span>
                        <span className="text-gray-600 dark:text-gray-300 mt-1" dangerouslySetInnerHTML={{ __html: blog.whyChooseUs }}
                        />
                    </p>
                )}

                {blog.finalThoughts && (
                    <p className="flex flex-col bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                        <span className="font-semibold text-gray-800 dark:text-gray-100">Final Thoughts:</span>
                        <span className="text-gray-600 dark:text-gray-300 mt-1" dangerouslySetInnerHTML={{ __html: blog.finalThoughts }} />
                    </p>
                )}

                {blog.image?.url && (
                    <div className="mt-5 flex flex-col w-full justify-center">
                        <span className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Image:</span>
                        <img
                            src={blog.image.url}
                            alt={blog.name}
                            className="rounded-lg object-cover max-h-64 w-full md:w-auto shadow-md border border-gray-200 dark:border-gray-700"
                        />
                    </div>
                )}
            </div>
        </div>


    );
};

export default ViewBlog;
