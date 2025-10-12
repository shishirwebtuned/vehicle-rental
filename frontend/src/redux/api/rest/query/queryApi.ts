/* eslint-disable @typescript-eslint/no-explicit-any */
import { get } from "http";
import { baseApi } from "../../restBaseApi";

const queryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<any, void>({
      query: () => ({
        url: "categories",
        method: "GET",
      }),
      providesTags: ["Categories"],
    }),

    getCategoryById: builder.query<any, { categoryId: string }>({
      query: ({ categoryId }) => ({
        url: `categories/${categoryId}`,
        method: "GET",
      }),
      providesTags: ["CategoryById"],
    }),

    getAllVehicles: builder.query<any, void>({
      query: () => ({
        url: "vehicles",
        method: "GET",
      }),
      providesTags: ["Vehicles"],
    }),

    getVehiclesByCategory: builder.query<any, { categoryId: string }>({
      query: ({ categoryId }) => ({
        url: `vehicles/category/${categoryId}`,
        method: "GET",
      }),
      providesTags: ["VehiclesByCategory"],
    }),

    getVehicleById: builder.query<any, { vehicleId: string }>({
      query: ({ vehicleId }) => ({
        url: `vehicles/${vehicleId}`,
        method: "GET",
      }),
      providesTags: ["VehicleById"],
    }),

    getUserById: builder.query<any, { id: string }>({
      query: ({ id }) => ({
        url: `users/${id}`,
        method: "GET",
      }),
      providesTags: ["UserById"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetAllVehiclesQuery,
  useGetVehicleByIdQuery,
  useGetUserByIdQuery,
  useGetVehiclesByCategoryQuery,
} = queryApi;
