import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["Books", "Book"],
  endpoints: (builder) => ({
    // get books query
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

    // get single book query
    getBook: builder.query({
      query: (bookId) => ({
        url: `/books/${bookId}`,
      }),
      providesTags: (result, err, arg) => [{ type: "Book", id: arg }],
    }),

    // edit book mutation
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

      invalidatesTags: (result, err, arg) => [
        "Books",
        { type: "Book", id: arg.id },
      ],
    }),

    // Add book mutation
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

export const {
  useGetBooksQuery,
  useEditBookMutation,
  useAddBookMutation,
  useGetBookQuery,
} = apiSlice;
