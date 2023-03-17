import React from "react";
import Head from "./Head";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
