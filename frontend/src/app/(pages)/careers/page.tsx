"use client";

import MasterDialog from "@/components/shared/MasterDialog";
import { paddingX } from "@/constant/constant";
import { useState } from "react";
import JobApplyForm from "./JobApplyForm";
import { useGetAllCareersQuery } from "@/redux/api/rest/query/queryApi";

const page = () => {
    const [selectedJob, setSelectedJob] = useState<string | null>(null);
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const { data: careers, isLoading, isError, isSuccess } = useGetAllCareersQuery();

    // const careersData = isError || !isSuccess ? staticCareersData : careers?.data?.careers || [];

    const careersData = careers?.data?.careers || [];

    const handleClick = (jobName: string) => {
        setSelectedJob(jobName);
        setDialogOpen(true);
    }

    if (isLoading) {
        return (
            <div className={`flex flex-col min-h-screen font-mono items-center pt-40 md:pt-44 justify-center bg-background gap-8 md:gap-12 pb-12 sm:pb-20 md:pb-28 ${paddingX}`}>
                <p>Loading Career Data...</p>
            </div>);
    }

    if (isError) {
        return (
            <div className={`flex flex-col min-h-screen items-center font-mono pt-40 md:pt-44 justify-center bg-background gap-8 md:gap-12 pb-12 sm:pb-20 md:pb-28 ${paddingX}`}>
                <p>Failed to load career Data. Please try again later.</p>
            </div>);
    }

    return (
        <div className="bg-white">
            <div
                className={`flex flex-col h-full items-center pt-12 md:pt-16 justify-center bg-background pb-10 sm:pb-20 md:pb-28 ${paddingX}`}
            >
                <div className="w-full text-center">
                    <h1 className="w-full text-black font-merriweather md:text-3xl text-2xl lg:text-4xl text-center font-bold leading-snug">
                        Join Our{" "}
                        <span className="text-primary font-bold">Team</span>
                    </h1>
                    <p className="text-gray-600 mt-3 font-nunito md:text-base text-sm lg:text-lg">
                        Explore exciting career opportunities and grow with us.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:gap-8 sm:gap-6 gap-4 mt-8 md:mt-10">
                    {careersData.map((job: any, index: number) => (
                        <div
                            key={job._id || index}
                            className="w-full rounded-xl border border-gray-200 bg-white px-5 py-6 shadow-sm hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between transition-all duration-300 ease-in-out text-start"
                        >
                            <div>
                                <h2 className="text-primary font-merriweather font-bold text-base md:text-xl lg:text-2xl">
                                    {job?.jobName}
                                </h2>
                                <p className="mt-2 text-gray-600 font-nunito md:text-sm text-xs lg:text-base">
                                    {job?.jobField}
                                </p>

                                <p className="mt-3 text-black font-nunito md:text-sm text-xs lg:text-base line-clamp-4">
                                    {job?.description}
                                </p>

                                {job?.requirements && job.requirements.length > 0 && (
                                    <div className="mt-3">
                                        <p className="font-semibold text-gray-800 dark:text-gray-100 md:text-sm text-xs lg:text-base">
                                            Requirements:
                                        </p>
                                        <ul className="mt-2 list-disc list-inside text-gray-700 font-nunito md:text-[13px] text-[11px] lg:text-[15px] space-y-px md:space-y-[3px]">
                                            {job.requirements.map((req: string, idx: number) => (
                                                <li key={idx}>{req}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}


                                <div className="mt-4">
                                    <p className="text-xs md:text-sm lg:text-base font-medium text-gray-700">
                                        <span className="text-primary font-semibold">Location:</span>{" "}
                                        {job?.location}
                                    </p>
                                    <p className="text-xs md:text-sm lg:text-base font-medium text-gray-700">
                                        <span className="text-primary font-semibold">Type:</span>{" "}
                                        {job?.type}
                                    </p>
                                </div>
                            </div>

                            <div className="w-full text-center lg:mt-6 md:mt-5 mt-4">
                                <button onClick={() => handleClick(job.jobName)} className="cursor-pointer rounded-lg border-2 border-primary md:px-5 px-4 py-1.5 md:py-2 md:text-base text-xs lg:text-lg font-nunito font-medium text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <MasterDialog open={dialogOpen} title='Apply Now' onClose={() => setDialogOpen(false)}
            >
                <JobApplyForm
                    jobName={selectedJob || ""}
                    onSubmitSuccess={() => setDialogOpen(false)}
                />
            </MasterDialog>
        </div>
    );
};

export default page;
