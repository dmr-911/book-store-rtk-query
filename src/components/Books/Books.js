import { useGetBooksQuery } from "@/features/api/apiSlice";
import React from "react";
import { useSelector } from "react-redux";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import Book from "./Book";

const Books = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const { filter, search } = useSelector((state) => state.filter);

  let filteredBooks = books;

  // filtered books
  if (filter === "featured")
    filteredBooks = filteredBooks.filter((book) => book.featured);

  // search books
  if (search)
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(search)
    );

  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <Error message="Some error occurs!" />;

  if (!isLoading && !isError && !filteredBooks?.length)
    content = <Error message="No books available" />;

  if (!isLoading && !isError && filteredBooks?.length)
    content = filteredBooks.map((book) => <Book key={book.id} book={book} />);
  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default Books;
