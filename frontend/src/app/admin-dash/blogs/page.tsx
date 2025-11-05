"use client";

import { CustomButton } from '@/components/shared/CustomButton';
import DeleteDialog from '@/components/shared/DeleteDialog';
import MasterDialog from '@/components/shared/MasterDialog';
import MasterFormDash from '@/components/shared/MasterFormDash';
import { Column, MasterTable } from '@/components/shared/MasterTable'
import { useCreateBlogMutation, useDeleteBlogMutation, useUpdateBlogMutation, } from '@/redux/api/rest/mutation/otherApi';
import { useGetAllBlogsQuery } from '@/redux/api/rest/query/queryApi';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import ViewBlog from './Components/ViewBlog';

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const quillModules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
    ],
};

const page = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [viewBlog, setViewBlog] = useState<boolean>(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState<any>(null);
    const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

    const [content, setContent] = useState("");
    const [whyChooseUs, setWhyChooseUs] = useState("");
    const [finalThoughts, setFinalThoughts] = useState("");

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);


    const { data: blogs, isLoading, isError } = useGetAllBlogsQuery();

    console.log("blogs", blogs);
    const blogsData = blogs?.data?.blogs || [];

    const [createBlog] = useCreateBlogMutation();

    const [updateBlog] = useUpdateBlogMutation();

    const [deleteBlog] = useDeleteBlogMutation();

    useEffect(() => {
        if (editMode && selectedBlog) {
            setContent(selectedBlog.content || "");
            setWhyChooseUs(selectedBlog.whyChooseUs || "");
            setFinalThoughts(selectedBlog.finalThoughts || "");
        } else {
            setContent("");
            setWhyChooseUs("");
            setFinalThoughts("");
        }
    }, [editMode, selectedBlog]);

    const columns: Column<{ id: string, name: string, description: string }>[] = [{ key: "id", label: "id" },
    { key: "title", label: "Title" },
    { key: "description", label: "Description" },
    { key: "author", label: "Author" },
    ]

    const rows = blogsData?.map((blog: any, index: number) => ({
        id: index + 1,
        _id: blog?._id ?? "N/A",
        title: blog?.title ?? "N/A",
        description: blog?.description ?? "N/A",
        author: blog?.author ?? "N/A",
    })) || [];

    const fields = [
        {
            name: "title",
            type: "text",
            placeholder: "Title",
            label: "Title",
        },
        {
            name: "description",
            type: "textarea",
            placeholder: "Description",
            label: "Description",
        },
        {
            name: "author",
            type: "text",
            placeholder: "Author",
            label: "Author",
        },
        {
            name: "image",
            label: "Image",
            type: "file",
            placeholder: "Upload Vehicle Image",
        },

    ];

    const BlogSchema = Yup.object().shape({
        title: Yup.string().required("title is required"),
        description: Yup.string().required("Description is required"),
        author: Yup.string(),
        image: Yup.mixed().when([], {
            is: () => !editMode,
            then: (schema) => schema.required("Blog image is required"),
            otherwise: (schema) => schema.notRequired(),
        }),
    });




    const handleSubmit = async (values: any) => {
        try {
            const formData = new FormData();

            formData.append("title", values.title);
            formData.append("description", values.description);
            formData.append("author", values.author);
            formData.append("content", content);
            formData.append("whyChooseUs", whyChooseUs);
            formData.append("finalThoughts", finalThoughts);

            if (values.image instanceof File) {
                formData.append("image", values.image);
            }

            let res;
            if (editMode && selectedBlog?._id) {
                res = await updateBlog({ id: selectedBlog._id, formData }).unwrap();
            } else {
                res = await createBlog(formData).unwrap();
            }

            if (res?.success) {
                toast.success(
                    res.message || (editMode ? "Blog updated successfully!" : "Blog created successfully!")
                );
                setOpen(false);
                setEditMode(false);
                setSelectedBlog(null);
            }
        } catch (err: any) {
            console.log(err);
            toast.error(err?.data?.message || "Something went wrong");
        }
    };

    const handleConfirmDelete = async () => {
        if (!selectedBlogId) return;

        try {
            const res = await deleteBlog(selectedBlogId).unwrap();
            if (res.success) {
                toast.success(res.message || "Blog deleted successfully!");
            }
        } catch (err: any) {
            console.error(err);
            toast.error(err?.data?.message || "Failed to delete Blog");
        } finally {
            setDeleteDialogOpen(false);
            setSelectedBlog(null);
        }
    };

    return (
        <div className='flex flex-col gap-6' >
            <div className='flex flex-row items-center justify-between'>
                <h2 className='font-nunito lg:text-xl md:text-lg text-base font-semibold'>
                    Blogs List
                </h2>
                <CustomButton text='Add Blog' onClick={() => setOpen(true)} />
            </div>
            <MasterTable
                columns={columns}
                rows={rows}
                onView={(row) => {
                    setViewBlog(true);
                    setSelectedBlogId(row._id);
                }}
                onEdit={(row) => {
                    setSelectedBlog(row);
                    setEditMode(true);
                    setOpen(true);
                }}
                onDelete={(row) => {
                    setSelectedBlogId(row._id);
                    setDeleteDialogOpen(true);
                }}

            />
            <MasterDialog
                open={open}
                onClose={() => {
                    setOpen(false);
                    setEditMode(false);
                    setSelectedBlog(null);
                }}
                title={editMode ? "Edit Blog" : "Add Blog"}
                description={editMode ? "Update the Blog details" : "Enter the required data"}
            >

                <MasterFormDash
                    fields={fields}
                    validationSchema={BlogSchema}
                    onSubmit={handleSubmit}
                    buttonLabel={editMode ? 'Update' : 'Submit'}
                    fieldStyle='border-b-2 border-gray-300 ring-0 focus:outline-0'
                    onClose={() => setOpen(false)}
                    initialValues={
                        editMode && selectedBlog
                            ? {
                                title: selectedBlog.title,
                                description: selectedBlog.description,
                                author: selectedBlog.author,
                                image: null,
                                content: selectedBlog.content || "",
                                whyChooseUs: selectedBlog.whyChooseUs || "",
                                finalThoughts: selectedBlog.finalThoughts || "",
                            }
                            : {
                                title: "",
                                description: "",
                                author: "",
                                image: null,
                                content: "",
                                whyChooseUs: "",
                                finalThoughts: "",
                            }
                    }
                    children={
                        <>
                            <div className="flex flex-col gap-6 md:gap-8 mt-6">
                                {/* Content */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-900 font-nunito">Content</label>
                                    <div className="min-h-[200px]">
                                        <ReactQuill
                                            value={content}
                                            onChange={setContent}
                                            modules={quillModules}
                                            className="bg-white rounded-md quill-editor"
                                        />
                                    </div>
                                </div>

                                {/* Why Choose Us */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-900 font-nunito">Why Choose Us</label>
                                    <div className="min-h-[200px]">
                                        <ReactQuill
                                            value={whyChooseUs}
                                            onChange={setWhyChooseUs}
                                            modules={quillModules}
                                            className="bg-white rounded-md quill-editor"
                                        />
                                    </div>
                                </div>

                                {/* Final Thoughts */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-900 font-nunito">Final Thoughts</label>
                                    <div className="min-h-[200px]">
                                        <ReactQuill
                                            value={finalThoughts}
                                            onChange={setFinalThoughts}
                                            modules={quillModules}
                                            className="bg-white rounded-md quill-editor"
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    }

                />



            </MasterDialog>
            <DeleteDialog open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                onConfirm={handleConfirmDelete}
                title="Delete Blog"
                description="Are you sure you want to delete this Blog? This action cannot be undone."
            />
            <MasterDialog
                open={viewBlog}
                onClose={() => {
                    setViewBlog(false);
                    setSelectedBlogId(null);
                }}
                title="Blog Details"
                description="View the Blog details"
            >
                <ViewBlog blogId={selectedBlogId} />
            </MasterDialog>
        </div >
    )
}

export default page
