import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Home = () => {
  const { user, singIn, singOut } = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      <h3>{user ? "Online" : "Offline"}</h3>
      {user ? (
        <>
          <button className="btn btn-danger me-1" onClick={singOut}>
            Log out
          </button>
          <Link to="/private" className="btn btn-warning">
            Go to Private
          </Link>
        </>
      ) : (
        <button className="btn btn-primary" onClick={singIn}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Home;
