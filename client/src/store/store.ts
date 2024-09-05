import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './apiSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  }
});
