import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  let [state, setState] = useState(false);
  let dropdown = () => {
    setState(!state);
  };
  return (
    <div>
      <nav className="navSection">
        <Link to="/">
          <div>
            <img src="logo.png" alt="logo" />
          </div>
        </Link>
        <div>
          <ul>
            <li>Order</li>
            <li>Meal Plan</li>
            <li>Big Sale</li>
            <Link to="/sigin">Sigin</Link>
            <Link to="/login">login</Link>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <i className="fal fa-map-marker-alt"></i> my location
            </li>
            <li>
              <i className="fal fa-shopping-bag">
                <sup>
                  <span
                    className="badge badge-secondary"
                    style={{ fontSize: "15px" }}
                  ></span>
                </sup>
              </i>
            </li>
            <li>
              <i className="fal fa-user"></i>
            </li>
            <li>
              <i className="far fa-chevron-down" onClick={dropdown}></i>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="dropdown"
        style={state ? { display: "block" } : { display: "none" }}
      >
        <ul>
          <li>Profile</li>
          <li>orders</li>
          <li>subscriptions</li>
          <li>Redema vochers</li>
          <li>Account</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
