import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pcBuilderApi = createApi({
  reducerPath: "pcBuilderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pc-builder-backend-g8wx.onrender.com" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    postProductInPcBuilder: builder.mutation({
      query: (product) => ({
        url: `/pcbuilder`,
        method: "POST",
        body: product,
      }),
      invalidatesTags:["products"]
    }),
    getPcBuilderProducts: builder.query({
        query:()=>('/pcBuilder'),
        providesTags:['products']
    })
  }),
  
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { usePostProductInPcBuilderMutation, useGetPcBuilderProductsQuery } = pcBuilderApi;
