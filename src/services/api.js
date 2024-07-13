import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const defaultParams = {
  Appid: "3DA6AHCXWFHSP0F",
  Apikey: "2e21fbb3cb9744b98291833bf8a294cf20240713091315336103",
  organization_id: "8504396958bc4f62a4533178960e58e8",
};
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.timbu.cloud",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (arg) => {
        const { page, size } = arg;
        return {
          url: `products`,
          params: { page, size, ...defaultParams },
        };
      },
    }),
    addToCart: builder.mutation({
      query: (item) => ({
        url: "cart/add",
        method: "POST",
        body: item,
      }),
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      params: { ...defaultParams },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddToCartMutation,
  useGetProductByIdQuery,
} = api;
