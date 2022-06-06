import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Workout Tracker</b>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button><i class="bi bi-house-door"></i></button>
          </Link>
        </li>
        <li>
          <Link to="/addworkout">
            <button>Add Workout</button>
          </Link>
        </li>
        <li>
          <Link to="/workouthistory">
            <button>Workout History</button>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
