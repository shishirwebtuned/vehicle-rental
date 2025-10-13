"use client";

import { CustomButton } from '@/components/shared/CustomButton';
import DeleteDialog from '@/components/shared/DeleteDialog';
import MasterDialog from '@/components/shared/MasterDialog';
import MasterForm from '@/components/shared/MasterForm';
import MasterFormDash from '@/components/shared/MasterFormDash';
import { Column, MasterTable } from '@/components/shared/MasterTable'
import { Button } from '@/components/ui/button';
import { useCreateCategoryMutation, useCreateVehicleMutation, useDeleteCategoryMutation, useDeleteVehicleMutation, useUpdateCategoryMutation, useUpdateVehicleMutation } from '@/redux/api/rest/mutation/otherApi';
import { useGetAllCategoriesQuery, useGetAllVehiclesQuery } from '@/redux/api/rest/query/queryApi';
import { label } from 'framer-motion/client';
import { Flag } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import Viewvehicle from './Components/Viewvehicle';


const page = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [viewVehicle, setViewVehicle] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
    const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);


    const { data: vehicles, isLoading, isError } = useGetAllVehiclesQuery();

    const { data: categories } = useGetAllCategoriesQuery();

    const categoriesData = categories?.data?.categories
    const vehiclesData = vehicles?.data?.vehicles || [];

    const [createVehicle] = useCreateVehicleMutation();

    const [updateVehicle] = useUpdateVehicleMutation();

    const [deletevehicle] = useDeleteVehicleMutation();

    const columns: Column<{ id: string, name: string, description: string }>[] = [{ key: "id", label: "id" },
    { key: "name", label: "Name" },
    { key: "brand", label: "Brand" },
    { key: "vehicleModel", label: "Model" },
    { key: "category", label: "Category" },
    { key: "numberPlate", label: "Number Plate" },
    { key: "seats", label: "Seats" },
    { key: "fuelType", label: "Fuel Type" },

    { key: "pricePerDay", label: "Price Per Day" },
    ]

    const rows = vehiclesData?.map((vehicle: any, index: number) => ({
        id: index + 1,
        _id: vehicle?._id ?? "N/A",
        name: vehicle?.name ?? "N/A",
        brand: vehicle?.brand ?? "N/A",
        vehicleModel: vehicle?.vehicleModel ?? "N/A",
        category: vehicle?.category?.name ?? "N/A",
        numberPlate: vehicle?.numberPlate ?? "N/A",
        seats: vehicle?.seats ?? "N/A",
        fuelType: vehicle.fuelType ?? "N/A",
        pricePerDay: vehicle.pricePerDay ?? "N/A",
        image: vehicle.image ?? "N/A",
        description: vehicle?.description ?? "N/A",


    })) || [];

    const fields = [
        {
            name: "name",
            type: "text",
            placeholder: "Vehicle Name",
            label: "Name",
        },
        {
            name: "brand",
            type: "text",
            placeholder: "Brand",
            label: "Brand",

        },
        {
            name: "vehicleModel",
            type: "text",
            placeholder: "Model (e.g. 2022)",
            label: "Vehicle Model",

        },
        {
            name: "category",
            label: "Category",
            type: "select",
            placeholder: "Select Category",
            options: categoriesData?.map((category: any) => ({
                label: category.name,
                value: category._id,
            })) || [],
        },
        {
            name: "numberPlate",
            label: "Number Plate",
            type: "text",
            placeholder: "Number Plate (e.g. BAGMATI B 03 1234)",
        },
        {
            name: "seats",
            label: "Seats",
            type: "number",
            placeholder: "Number of Seats",
        },
        {
            name: "fuelType",
            label: "Fuel Type",
            type: "select",
            placeholder: "Select Fuel Type",
            options: [
                { value: "Petrol", label: "Petrol" },
                { value: "Diesel", label: "Diesel" },
                { value: "Electric", label: "Electric" },
                { value: "Hybrid", label: "Hybrid" },
            ],
        },
        {
            name: "pricePerDay",
            label: "Price Per Day",
            type: "number",
            placeholder: "Price Per Day (in NPR)",
        },
        {
            name: "description",
            label: "Description",
            type: "text",
            placeholder: "Description",
        },
        {
            name: "image",
            label: "Image",
            type: "file",
            placeholder: "Upload Vehicle Image",
        },
    ];



    const VehicleSchema = Yup.object().shape({
        name: Yup.string().required("Vehicle name is required"),
        brand: Yup.string().required("Brand is required"),
        vehicleModel: Yup.string().required("Vehicle model is required"),
        category: Yup.string().required("Category is required"),
        numberPlate: Yup.string()
            .matches(/^[A-Z]+\s[A-K]\s\d{2}\s\d{1,4}$/, "Invalid number plate format (e.g., BAGMATI B 03 1234)")
            .required("Number plate is required"),

        seats: Yup.number()
            .typeError("Seats must be a number")
            .min(1, "Minimum 1 seat required")
            .required("Seats are required"),
        fuelType: Yup.string()
            .oneOf(["Petrol", "Diesel", "Electric", "Hybrid"], "Invalid fuel type")
            .required("Fuel type is required"),
        pricePerDay: Yup.number()
            .typeError("Price must be a number")
            .min(100, "Price must be at least 100 NPR")
            .required("Price per day is required"),
        description: Yup.string()
            .min(10, "Description must be at least 10 characters long")
            .required("Description is required"),
        image: Yup.mixed().when([], {
            is: () => !editMode,
            then: (schema) => schema.required("Vehicle image is required"),
            otherwise: (schema) => schema.notRequired(),
        }),
    });


    const handleSubmit = async (values: any) => {
        try {
            const formData = new FormData();

            formData.append("name", values.name);
            formData.append("brand", values.brand);
            formData.append("vehicleModel", values.vehicleModel);
            formData.append("category", values.category);
            formData.append("numberPlate", values.numberPlate);
            formData.append("seats", values.seats.toString());
            formData.append("fuelType", values.fuelType);
            formData.append("pricePerDay", values.pricePerDay.toString());
            formData.append("description", values.description);

            if (values.image instanceof File) {
                formData.append("image", values.image);
            }

            let res;
            if (editMode && selectedVehicle?._id) {
                res = await updateVehicle({ id: selectedVehicle._id, formData }).unwrap();
            } else {
                res = await createVehicle(formData).unwrap();
            }

            if (res?.success) {
                toast.success(
                    res.message || (editMode ? "Vehicle updated successfully!" : "Vehicle created successfully!")
                );
                setOpen(false);
                setEditMode(false);
                setSelectedVehicle(null);
            }
        } catch (err: any) {
            console.log(err);
            toast.error(err?.data?.message || "Something went wrong");
        }
    };

    const handleConfirmDelete = async () => {
        if (!selectedVehicleId) return;

        try {
            const res = await deletevehicle(selectedVehicleId).unwrap();
            if (res.success) {
                toast.success(res.message || "Vehicle deleted successfully!");
            }
        } catch (err: any) {
            console.error(err);
            toast.error(err?.data?.message || "Failed to delete vehicle");
        } finally {
            setDeleteDialogOpen(false);
            setSelectedVehicle(null);
        }
    };

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-row items-center justify-between'>
                <h2 className='font-nunito lg:text-xl md:text-lg text-base font-semibold'>
                    Vehicles List
                </h2>
                <CustomButton text='Add Vehicle' onClick={() => setOpen(true)} />
            </div>
            <MasterTable
                columns={columns}
                rows={rows}
                onView={(row) => {
                    setViewVehicle(true);
                    setSelectedVehicleId(row._id);
                }}
                onEdit={(row) => {
                    setSelectedVehicle(row);
                    setEditMode(true);
                    setOpen(true);
                }}
                onDelete={(row) => {
                    setSelectedVehicleId(row._id);
                    setDeleteDialogOpen(true);
                }}

            />
            <MasterDialog
                open={open}
                onClose={() => {
                    setOpen(false);
                    setEditMode(false);
                    setSelectedVehicle(null);
                }}
                title={editMode ? "Edit Vehicle" : "Add Vehicle"}
                description={editMode ? "Update the vehicle details" : "Enter the required data"}
            >

                <MasterFormDash
                    fields={fields}
                    validationSchema={VehicleSchema}
                    onSubmit={handleSubmit}
                    buttonLabel={editMode ? 'Update' : 'Submit'}
                    fieldStyle='border-b-2 border-gray-300 ring-0 focus:outline-0 focus:border-primary focus:placeholder:text-primary'
                    onClose={() => setOpen(false)}
                    initialValues={
                        editMode
                            ? {
                                name: selectedVehicle.name,
                                brand: selectedVehicle.brand,
                                vehicleModel: selectedVehicle.vehicleModel,
                                category: selectedVehicle.category._id,
                                numberPlate: selectedVehicle.numberPlate,
                                seats: selectedVehicle.seats,
                                fuelType: selectedVehicle.fuelType,
                                pricePerDay: selectedVehicle.pricePerDay,
                                description: selectedVehicle.description,
                                image: null,
                            }
                            : {
                                name: '',
                                brand: '',
                                vehicleModel: '',
                                category: '',
                                numberPlate: '',
                                seats: '',
                                fuelType: '',
                                pricePerDay: '',
                                description: '',
                                image: null,
                            }
                    }
                />
            </MasterDialog>
            <DeleteDialog open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                onConfirm={handleConfirmDelete}
                title="Delete Vehicle"
                description="Are you sure you want to delete this Vehicle? This action cannot be undone."
            />
            <MasterDialog
                open={viewVehicle}
                onClose={() => {
                    setViewVehicle(false);
                    setSelectedVehicleId(null);
                }}
                title="Vehicle Details"
                description="View the vehicle details"
            >
                <Viewvehicle vehicleId={selectedVehicleId} />
            </MasterDialog>

        </div>
    )
}

export default page
