import { string } from "yup";
import { baseApi } from "../../restBaseApi";
import { create } from "domain";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (formData: any) => ({
        url: "/categories",
        body: formData,
        method: "POST",
      }),
      invalidatesTags: ["Categories"],
    }),
    updateCategory: builder.mutation({
      query: ({ id, formData }: { id: string; formData: any }) => ({
        url: `/categories/${id}`,
        body: formData,
        method: "PUT",
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: builder.mutation({
      query: (id: string) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),

    createVehicle: builder.mutation({
      query: (formData: any) => ({
        url: "/vehicles",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Vehicles"],
    }),

    updateVehicle: builder.mutation({
      query: ({ id, formData }: { id: string; formData: any }) => ({
        url: `/vehicles/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Vehicles"],
    }),

    deleteVehicle: builder.mutation({
      query: (id: string) => ({
        url: `/vehicles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Vehicles"],
    }),

    createBooking: builder.mutation({
      query: (body: {
        vehicle: string;
        name: string;
        email: string;
        phone: string;
        message: string;
        pickupLocation: string;
        pickupDate: Date;
        pickupTime: string;
        dropoffLocation: string;
        dropoffDate: Date;
        dropoffTime: string;
      }) => ({
        url: `/booking`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Vehicles", "Bookings", "VehicleById"],
    }),

    updateBooking: builder.mutation({
      query: ({ id, status }: { id: string; status: string }) => ({
        url: `/booking/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Vehicles", "Bookings", "VehicleById", "BookingById"],
    }),

    createContact: builder.mutation({
      query: (body: {
        name: string;
        email: string;
        phone: string;
        message: string;
      }) => ({
        url: `/contact`,
        method: "POST",
        body,
      }),
    }),

    createCareer: builder.mutation({
      query: (body: {
        jobName: string;
        jobField: string;
        description: string;
        requirements: string[];
        location: string;
        type: string;
      }) => ({
        url: "/careers",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Careers"],
    }),

    updateCareer: builder.mutation({
      query: ({
        id,
        body,
      }: {
        id: string;
        body: {
          jobName: string;
          jobField: string;
          description: string;
          requirements: string[];
          location: string;
          type: string;
        };
      }) => ({
        url: `/careers/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Careers"],
    }),

    deleteCareer: builder.mutation({
      query: (id: string) => ({
        url: `/careers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Careers"],
    }),

    applytoJob: builder.mutation({
      query: (formData: any) => ({
        url: "/careers/apply",
        method: "POST",
        body: formData,
      }),
    }),

    createBlog: builder.mutation({
      query: (formData: any) => ({
        url: "/blogs",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Blogs"],
    }),

    updateBlog: builder.mutation({
      query: ({ id, formData }: { id: string; formData: any }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Blogs", "BlogById"],
    }),

    deleteBlog: builder.mutation({
      query: (id: string) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useCreateVehicleMutation,
  useUpdateVehicleMutation,
  useDeleteVehicleMutation,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useCreateContactMutation,
  useCreateCareerMutation,
  useUpdateCareerMutation,
  useDeleteCareerMutation,
  useApplytoJobMutation,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = authApi;
