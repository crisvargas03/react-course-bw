import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark mb-2">
      <div className="container">
        <Link to="/"> {user ? "_crisvargas03" : "Offline"} </Link>
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
