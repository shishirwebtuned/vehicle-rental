"use client";

import { CustomButton } from '@/components/shared/CustomButton';
import DeleteDialog from '@/components/shared/DeleteDialog';
import MasterDialog from '@/components/shared/MasterDialog';
import MasterForm from '@/components/shared/MasterForm';
import MasterFormDash from '@/components/shared/MasterFormDash';
import { Column, MasterTable } from '@/components/shared/MasterTable'
import { Button } from '@/components/ui/button';
import { useCreateCareerMutation, useCreateCategoryMutation, useDeleteCareerMutation, useDeleteCategoryMutation, useUpdateCareerMutation, useUpdateCategoryMutation } from '@/redux/api/rest/mutation/otherApi';
import { useGetAllCareersQuery, useGetAllCategoriesQuery } from '@/redux/api/rest/query/queryApi';
import { Flag } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import ViewCategory from '../category/Components/ViewCategory';
import { join } from 'path';
import ViewCareer from './Components/ViewCareer';


const page = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [viewCareer, setViewCareer] = useState<boolean>(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedCareer, setSelectedCareer] = useState<any>(null);
    const [selectedCareerId, setSelectedCareerId] = useState<string | null>(null);

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);


    const { data: careers, isLoading, isError } = useGetAllCareersQuery();

    console.log("careers", careers);
    const careersData = careers?.data?.careers || [];

    const [createCareer] = useCreateCareerMutation();

    const [updateCareer] = useUpdateCareerMutation();

    const [deleteCareer] = useDeleteCareerMutation();

    const columns: Column<{ id: string, name: string, description: string }>[] = [{ key: "id", label: "id" },
    { key: "jobName", label: "Job Name" },
    { key: "jobField", label: "Field" },
    { key: "location", label: "Location" },
    { key: "type", label: "Type" },
    { key: "description", label: "Description" },
    ]

    const rows = careersData?.map((career: any, index: number) => ({
        id: index + 1,
        _id: career?._id ?? "N/A",
        jobName: career?.jobName ?? "N/A",
        jobField: career?.jobField ?? "N/A",
        type: career?.type ?? "N/A",
        location: career?.location ?? "N/A",
        description: career?.description ?? "N/A",
        requirements: career?.requirements ?? "N/A",
    })) || [];

    const fields = [
        {
            name: "jobName",
            type: "text",
            placeholder: "Job Name",
            label: "Job Name",
        },
        {
            name: "jobField",
            type: "text",
            placeholder: "Job Field",
            label: "Job Field",
        },
        {
            name: "description",
            type: "textarea",
            placeholder: "Description",
            label: "Description",
        },
        {
            name: "requirements",
            type: "textarea-array",
            placeholder: "Enter each requirement on a new line(Press Enter).",
            label: "Requirements",
        },
        {
            name: "location",
            type: "text",
            placeholder: "Location",
            label: "Location",
        },
        {
            name: "type",
            type: "select",
            placeholder: "Select Job Type",
            label: "Job Type",
            options: [
                { label: "Full-Time", value: "Full-Time" },
                { label: "Part-Time", value: "Part-Time" },
                { label: "Internship", value: "Internship" },
                { label: "Contract", value: "Contract" },
                { label: "Remote", value: "Remote" },
            ]
        },
    ];

    const CareerSchema = Yup.object().shape({
        jobName: Yup.string().required("Job Name is required"),
        jobField: Yup.string().required("Job Field is required"),
        description: Yup.string().required("Description is required"),
        requirements: Yup.string().required("Requirements are required"),
        location: Yup.string().required("Location is required"),
        type: Yup.string()
            .oneOf(["Full-Time", "Part-Time", "Internship", "Contract", "Remote"], "Invalid job type")
            .required("Job Type is required"),
    });



    const handleSubmit = async (values: any) => {
        try {

            const payload = {
                ...values,
                requirements: values.requirements
                    ? values.requirements.split("\n").map((r: string) => r.trim()).filter((r: string) => r)
                    : [],
            };

            let res;
            if (editMode && selectedCareer?._id) {
                res = await updateCareer({ id: selectedCareer._id, body: payload }).unwrap();
            } else {
                res = await createCareer(payload).unwrap();
            }

            if (res?.success) {
                toast.success(res.message || (editMode ? "Career updated successfully!" : "Career created successfully!"));
                setOpen(false);
                setEditMode(false);
                setSelectedCareer(null);
            }
        } catch (err: any) {
            console.log(err);
            toast.error(err?.data?.message || "Something went wrong");
        }
    };

    const handleConfirmDelete = async () => {
        if (!selectedCareerId) return;

        try {
            const res = await deleteCareer(selectedCareerId).unwrap();
            if (res.success) {
                toast.success(res.message || "Career deleted successfully!");
            }
        } catch (err: any) {
            console.error(err);
            toast.error(err?.data?.message || "Failed to delete Career");
        } finally {
            setDeleteDialogOpen(false);
            setSelectedCareer(null);
        }
    };

    return (
        <div className='flex flex-col gap-6' >
            <div className='flex flex-row items-center justify-between'>
                <h2 className='font-nunito lg:text-xl md:text-lg text-base font-semibold'>
                    Careers List
                </h2>
                <CustomButton text='Add Career' onClick={() => setOpen(true)} />
            </div>
            <MasterTable
                columns={columns}
                rows={rows}
                onView={(row) => {
                    setViewCareer(true);
                    setSelectedCareerId(row._id);
                }}
                onEdit={(row) => {
                    setSelectedCareer(row);
                    setEditMode(true);
                    setOpen(true);
                }}
                onDelete={(row) => {
                    setSelectedCareerId(row._id);
                    setDeleteDialogOpen(true);
                }}

            />
            <MasterDialog
                open={open}
                onClose={() => {
                    setOpen(false);
                    setEditMode(false);
                    setSelectedCareer(null);
                }}
                title={editMode ? "Edit Career" : "Add Career"}
                description={editMode ? "Update the Career details" : "Enter the required data"}
            >

                <MasterFormDash
                    fields={fields}
                    validationSchema={CareerSchema}
                    onSubmit={handleSubmit}
                    buttonLabel={editMode ? 'Update' : 'Submit'}
                    fieldStyle='border-b-2 border-gray-300 ring-0 focus:outline-0'
                    onClose={() => setOpen(false)}
                    initialValues={
                        editMode && selectedCareer
                            ? {
                                jobName: selectedCareer.jobName,
                                jobField: selectedCareer.jobField,
                                description: selectedCareer.description,
                                requirements: selectedCareer.requirements?.join("\n") || "",
                                location: selectedCareer.location,
                                type: selectedCareer.type,
                            }
                            : {
                                jobName: "",
                                jobField: "",
                                description: "",
                                requirements: "",
                                location: "",
                                type: "",
                            }
                    }
                />
            </MasterDialog>
            <DeleteDialog open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                onConfirm={handleConfirmDelete}
                title="Delete Career"
                description="Are you sure you want to delete this Career? This action cannot be undone."
            />
            <MasterDialog
                open={viewCareer}
                onClose={() => {
                    setViewCareer(false);
                    setSelectedCareerId(null);
                }}
                title="Career Details"
                description="View the Career details"
            >
                <ViewCareer careerId={selectedCareerId} />
            </MasterDialog>
        </div >
    )
}

export default page
