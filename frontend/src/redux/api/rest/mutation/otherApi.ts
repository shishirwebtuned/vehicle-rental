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
} = authApi;
