import { useGetBooksQuery } from "@/features/api/apiSlice";
import React from "react";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import Book from "./Book";

const Books = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <Error message="Some error occurs!" />;

  if (!isLoading && !isError && !books?.length)
    content = <Error message="No books available" />;

  if (!isLoading && !isError && books?.length)
    content = books.map((book) => <Book key={book.id} book={book} />);
  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default Books;
