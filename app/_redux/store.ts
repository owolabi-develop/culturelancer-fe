import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
