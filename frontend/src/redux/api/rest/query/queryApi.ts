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

    getAllUsers: builder.query<any, void>({
      query: () => ({
        url: "users/user-list",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),

    getUserById: builder.query<any, { id: string }>({
      query: ({ id }) => ({
        url: `users/${id}`,
        method: "GET",
      }),
      providesTags: ["UserById"],
    }),

    getBookings: builder.query<any, void>({
      query: () => ({
        url: "booking",
        method: "GET",
      }),
      providesTags: ["Bookings"],
    }),

    getBookingById: builder.query<any, { id: string }>({
      query: ({ id }) => ({
        url: `booking/${id}`,
        method: "GET",
      }),
      providesTags: ["BookingById"],
    }),

    getAllCareers: builder.query<any, void>({
      query: () => ({
        url: "careers",
        method: "GET",
      }),
      providesTags: ["Careers"],
    }),

    getCareerById: builder.query<any, { id: string }>({
      query: ({ id }) => ({
        url: `careers/${id}`,
        method: "GET",
      }),
      providesTags: ["CareerById"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetAllVehiclesQuery,
  useGetVehicleByIdQuery,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetVehiclesByCategoryQuery,
  useGetBookingsQuery,
  useGetBookingByIdQuery,
  useGetAllCareersQuery,
  useGetCareerByIdQuery,
} = queryApi;
