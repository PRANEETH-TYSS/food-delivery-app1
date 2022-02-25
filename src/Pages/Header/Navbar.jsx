import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { dropDownCart } from "../../redux/Actions/Action";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  let [dropdown, setDropdown] = useState(false);
  let dispatch = useDispatch();
  let cart = () => {
    setDropdown(!dropdown);
    dispatch(dropDownCart(dropdown));
  };
  let selector = useSelector(state => state.AuthReducer.cartValue);

  let select = useSelector(state => state.AuthReducer.dropDown);
  let total = useSelector(state => state.AuthReducer.item);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div class="container-fluid">
          <Link
            to="/"
            class="navbar-brand"
            style={{ color: "black", marginLeft: "40px" }}
          >
            <span id="city"> Cityfab</span> <span id="food">Foods...</span>
            <i class="fas fa-biking" style={{ color: "green" }}></i>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class=" nav navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li style={{ color: "white", margin: "10px" }} className="cart">
                <i class="fas fa-shopping-bag" onClick={() => cart()}>
                  <sup>
                    <span
                      className="badge badge-secondary"
                      style={{ fontSize: "15px" }}
                    >
                      {selector}
                    </span>
                  </sup>
                </i>
              </li>
              <li className="nav-item loaction">
                <Link
                  to="/location"
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  Mylocation
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link" to="/signup">
                  <button
                    type="button"
                    class="btn btn-light btn-sm"
                    className="signup"
                  >
                    SignUp
                  </button>
                </Link>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="login">
                  <button
                    type="button"
                    class="btn btn-light btn-sm"
                    className="login"
                  >
                    Login
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <h1 id="border"></h1>
      </div>
      <div
        className="dropDown"
        style={select ? { display: "none" } : { display: "block" }}
      >
        <table id="table">
          <tr>
            <td>items</td>
            <td>values</td>
          </tr>
          <tr>
            <td>{selector}</td>
            <td>{total}</td>
          </tr>
          <tr>{/* <td>{image}</td> */}</tr>
        </table>
      </div>
    </>
  );
};

export default Navbar;
