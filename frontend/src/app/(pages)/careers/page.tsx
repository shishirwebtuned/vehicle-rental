"use client";

import MasterDialog from "@/components/shared/MasterDialog";
import { paddingX } from "@/constant/constant";
import { careersData } from "@/data/data";
import { useState } from "react";
import JobApplyForm from "./JobApplyForm";

const page = () => {
    const [selectedJob, setSelectedJob] = useState<number | null>(null);
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleClick = (jobId: number) => {
        setSelectedJob(jobId);
        setDialogOpen(true);
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
                    {careersData.map((job, index) => (
                        <div
                            key={job.id || index}
                            className="w-full rounded-xl border border-gray-200 bg-white px-5 py-6 shadow-sm hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between transition-all duration-300 ease-in-out text-start"
                        >
                            <div>
                                <h2 className="text-primary font-merriweather font-bold text-lg md:text-xl lg:text-2xl">
                                    {job.title}
                                </h2>
                                <p className="mt-2 text-gray-600 font-nunito md:text-sm text-xs lg:text-base">
                                    {job.department}
                                </p>

                                <p className="mt-3 text-black font-nunito md:text-sm text-xs lg:text-base line-clamp-4">
                                    {job.description}
                                </p>

                                <div className="mt-4">
                                    <p className="text-sm md:text-base font-medium text-gray-700">
                                        <span className="text-primary font-semibold">Location:</span>{" "}
                                        {job.location}
                                    </p>
                                    <p className="text-sm md:text-base font-medium text-gray-700">
                                        <span className="text-primary font-semibold">Type:</span>{" "}
                                        {job.type}
                                    </p>
                                </div>
                            </div>

                            <div className="w-full text-center mt-6">
                                <button onClick={() => handleClick(job.id)} className="cursor-pointer rounded-lg border-2 border-primary px-5 py-2 md:text-base text-sm lg:text-lg font-nunito font-medium text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
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
                    jobId={selectedJob || ""}
                    onSubmitSuccess={() => setDialogOpen(false)}
                />
            </MasterDialog>
        </div>
    );
};

export default page;
