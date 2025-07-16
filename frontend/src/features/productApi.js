import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.escuelajs.co/api/v1/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    getProductsByCategoryName: builder.query({
      query: (category) => `products/?categorySlug=${category}`,
    }),
    getProductByName: builder.query({
      query: (title) => `products/?title=${title}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetProductsByCategoryNameQuery,
  useGetProductByNameQuery,
} = productApi;
