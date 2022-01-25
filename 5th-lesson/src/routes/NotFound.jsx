import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>404</h1>
      <Link to="/" className="btn btn-danger">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
