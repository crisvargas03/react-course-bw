import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomFooter from "./hooks/CustomFooter";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container position-relative">
        <Outlet />
      </div>
      <CustomFooter />
    </>
  );
};

export default App;
