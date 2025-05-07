import { apiSlice } from "./apiSlice";
import { User_URl } from "../constant";
const UserAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: User_URl,
        body: data,
        method: "POST",
      }),
    }),
    login: builder.mutation({
        query: (data) => ({
          url: `${User_URl}/login`,
          body: data,
          method: "POST",
        }),
      }),
  }),
});


export const { useCreateUserMutation ,useLoginMutation} = UserAPi;