import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/restBaseApi";
import configUser from "./slices/configUser";
import { useDispatch } from "react-redux";
import emailSlice from "./slices/emailSlice";

export const store = configureStore({
  reducer: {
    configUser,
    [baseApi.reducerPath]: baseApi.reducer,
    email: emailSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = (state: any) => state;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
