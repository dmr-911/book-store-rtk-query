import Link from "next/link";
import React from "react";

const PageList = () => {
  return (
    <ul className="hidden md:flex items-center space-x-6">
      <Link
        className="font-semibold cursor-pointer"
        href="/"
        id="lws-bookStore"
      >
        <li>Book Store</li>
      </Link>
      <Link className="cursor-pointer" href="book-form" id="lws-addBook">
        <li>Add Book</li>
      </Link>
    </ul>
  );
};

export default PageList;
