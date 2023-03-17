import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const PageList = () => {
  const router = useRouter();

  return (
    <ul className="hidden md:flex items-center space-x-6">
      <Link
        className={`${
          router.pathname === "/" && "font-semibold"
        } cursor-pointer`}
        href="/"
        id="lws-bookStore"
      >
        <li>Book Store</li>
      </Link>
      <Link
        className={`${
          router.pathname === "/add-book" && "font-semibold"
        } cursor-pointer`}
        href="add-book"
        id="lws-addBook"
      >
        <li>Add Book</li>
      </Link>
    </ul>
  );
};

export default PageList;
