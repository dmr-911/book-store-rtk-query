import React from "react";
import { Link } from "react-router-dom";
import PageList from "./PageList";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img
            src="/images/logo.svg"
            width="150px"
            className="object-contain"
          />
        </Link>
        <PageList />
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
