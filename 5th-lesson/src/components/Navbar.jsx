import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-2">
      <div className="container">
        <NavLink to="/" className="btn btn-warning">
          Home
        </NavLink>
        <NavLink to="/blog" className="btn btn-info">
          Blog
        </NavLink>
        <NavLink to="/contact" className="btn btn-info">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
