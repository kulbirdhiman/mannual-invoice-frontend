import { apiSlice } from "./apiSlice";
import { CUSTMOURr_URl } from "../constant";
const custmourApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createcustomer: builder.mutation({
      query: (data) => ({
        url: CUSTMOURr_URl,
        body: data,
        method: "post",
      }),
    }),
    getallcustmour : builder.query({
      query :()=>({
        url : CUSTMOURr_URl,
        method: "get",
      })
    }),
  }),
});


export const {useCreatecustomerMutation , useGetallcustmourQuery} = custmourApi