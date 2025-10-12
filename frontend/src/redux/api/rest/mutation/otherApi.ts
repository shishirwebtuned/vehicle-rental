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
  }),
});

export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = authApi;
