"use client";

import { CustomButton } from '@/components/shared/CustomButton';
import DeleteDialog from '@/components/shared/DeleteDialog';
import MasterDialog from '@/components/shared/MasterDialog';
import MasterForm from '@/components/shared/MasterForm';
import MasterFormDash from '@/components/shared/MasterFormDash';
import { Column, MasterTable } from '@/components/shared/MasterTable'
import { Button } from '@/components/ui/button';
import { useCreateCategoryMutation, useDeleteCategoryMutation, useUpdateCategoryMutation } from '@/redux/api/rest/mutation/otherApi';
import { useGetAllCategoriesQuery } from '@/redux/api/rest/query/queryApi';
import { Flag } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';


const page = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<any>(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);


    const { data: categories, isLoading, isError } = useGetAllCategoriesQuery();

    console.log("categories", categories);
    const categoriesData = categories?.data?.categories || [];

    const [createCategory] = useCreateCategoryMutation();

    const [updateCategory] = useUpdateCategoryMutation();

    const [deleteCategory] = useDeleteCategoryMutation();

    const columns: Column<{ id: string, name: string, description: string }>[] = [{ key: "id", label: "id" },
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
    ]

    const rows = categoriesData?.map((cat: any, index: number) => ({
        id: index + 1,
        _id: cat?._id ?? "N/A",
        description: cat?.description ?? "N/A",
        name: cat?.name ?? "N/A",

    })) || [];

    const fields = [
        {
            name: "name",
            type: "text",
            placeholder: "Name",
            label: "Name",
        },
        {
            name: "description",
            type: "text",
            placeholder: "Description",
            label: "Description",


        },
    ]


    const CategorySchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        description: Yup.string().required("Description is required"),
    });


    const handleSubmit = async (values: any) => {
        try {
            console.log("Form Values:", values);

            let res;
            if (editMode && selectedCategory?._id) {
                res = await updateCategory({ id: selectedCategory._id, ...values }).unwrap();
            } else {
                res = await createCategory(values).unwrap();
            }

            if (res?.success) {
                toast.success(res.message || (editMode ? "Category updated successfully!" : "Category created successfully!"));
                setOpen(false);
                setEditMode(false);
                setSelectedCategory(null);
            }
        } catch (err: any) {
            console.log(err);
            toast.error(err?.data?.message || "Something went wrong");
        }
    };

    const handleConfirmDelete = async () => {
        if (!selectedCategoryId) return;

        try {
            const res = await deleteCategory(selectedCategoryId).unwrap();
            if (res.success) {
                toast.success(res.message || "Category deleted successfully!");
            }
        } catch (err: any) {
            console.error(err);
            toast.error(err?.data?.message || "Failed to delete category");
        } finally {
            setDeleteDialogOpen(false);
            setSelectedCategory(null);
        }
    };

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-row items-center justify-between'>
                <h2 className='font-nunito lg:text-xl md:text-lg text-base font-semibold'>
                    Categories List
                </h2>
                <CustomButton text='Add Category' onClick={() => setOpen(true)} />
            </div>
            <MasterTable
                columns={columns}
                rows={rows}
                onEdit={(row) => {
                    setSelectedCategory(row);
                    setEditMode(true);
                    setOpen(true);
                }}
                onDelete={(row) => {
                    setSelectedCategoryId(row._id);
                    setDeleteDialogOpen(true);
                }}

            />
            <MasterDialog
                open={open}
                onClose={() => {
                    setOpen(false);
                    setEditMode(false);
                    setSelectedCategory(null);
                }}
                title={editMode ? "Edit Category" : "Add Category"}
                description={editMode ? "Update the category details" : "Enter the required data"}
            >

                <MasterFormDash
                    fields={fields}
                    validationSchema={CategorySchema}
                    onSubmit={handleSubmit}
                    buttonLabel={editMode ? 'Update' : 'Submit'}
                    fieldStyle='border-b-2 border-gray-300 ring-0 focus:outline-0'
                    onClose={() => setOpen(false)}
                    initialValues={
                        editMode
                            ? { name: selectedCategory.name, description: selectedCategory.description }
                            : { name: '', description: '' }
                    }
                />
            </MasterDialog>
            <DeleteDialog open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                onConfirm={handleConfirmDelete}
                title="Delete Category"
                description="Are you sure you want to delete this category? This action cannot be undone."
            />

        </div>
    )
}

export default page
