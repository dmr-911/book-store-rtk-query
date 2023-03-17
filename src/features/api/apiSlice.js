import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books",
      }),
      providesTags: (result, error, arg) => [
        {
          type: "Books",
        },
      ],
    }),

    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      providesTags: (result, error, arg) => [
        {
          type: "editBook",
          id: arg.id,
        },
      ],
      invalidatesTags: (result, err, arg) => ["Books"],
    }),

    addBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, err, arg) => ["Books"],
    }),
  }),
});

export const { useGetBooksQuery, useEditBookMutation, useAddBookMutation } =
  apiSlice;
