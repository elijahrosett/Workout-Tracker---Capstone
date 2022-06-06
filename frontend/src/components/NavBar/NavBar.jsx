import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import {FaHome} from "react-icons/fa";
import {GiWeightLiftingUp} from "react-icons/gi";
import {HiOutlineClipboardList} from "react-icons/hi";
import {FiLogOut} from "react-icons/fi";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "#683C20" }}>
            <b>Workout Tracker</b>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button className="btn">
              <FaHome />    home
             </button>
          </Link>
        </li>
        <li>
          <Link to="/addworkout">
            <button className="btn"><GiWeightLiftingUp/>Add Workout</button>
          </Link>
        </li>
        <li>
          <Link to="/workouthistory">
            <button className="btn"><HiOutlineClipboardList/>Workout History</button>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}><FiLogOut/></button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
