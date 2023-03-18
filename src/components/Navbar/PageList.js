import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageList = () => {
  const location = useLocation();
  return (
    <ul className="hidden md:flex items-center space-x-6">
      <Link
        className={`${
          location.pathname === "/" && "font-semibold"
        } cursor-pointer`}
        to="/"
        id="lws-bookStore"
      >
        <li>Book Store</li>
      </Link>
      <Link
        className={`${
          location.pathname === "/add-book" && "font-semibold"
        } cursor-pointer`}
        to="/add-book"
        id="lws-addBook"
      >
        <li>Add Book</li>
      </Link>
    </ul>
  );
};

export default PageList;
