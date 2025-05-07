import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URl } from "../constant";
interface User {
  id: number;
  name: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URl }),
  endpoints: (builder) => ({}),
});

