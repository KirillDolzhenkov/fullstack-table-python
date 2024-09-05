import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/tables/' }),
  endpoints: (builder) => ({
    getTableData: builder.query({
      query: (tableName) => `${tableName}`
    })
  }),
  reducerPath: 'api'
});

export const { useGetTableDataQuery } = apiSlice;
