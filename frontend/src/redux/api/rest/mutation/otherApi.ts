import { baseApi } from "../../restBaseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (body: { name: string; description: string }) => ({
        url: "/categories",
        body,
        method: "POST",
      }),
      invalidatesTags: ["Categories"],
    }),
    updateCategory: builder.mutation<
      any,
      { id: string; name: string; description: string }
    >({
      query: ({ id, ...body }) => ({
        url: `/categories/${id}`,
        body,
        method: "PUT",
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
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
  }),
});

export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useCreateVehicleMutation,
  useUpdateVehicleMutation,
  useDeleteVehicleMutation,
} = authApi;
