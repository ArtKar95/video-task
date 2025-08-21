import { configureStore } from "@reduxjs/toolkit";
import { videosApi } from "@/features/Home/videosAPI";

export const store = configureStore({
  reducer: {
    [videosApi.reducerPath]: videosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
