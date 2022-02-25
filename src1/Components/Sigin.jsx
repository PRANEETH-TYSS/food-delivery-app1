import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerInitiate } from "./../Redux/Action/Action";
const Signin = () => {
  let [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let { displayName, confirmPassword, email, password } = state;

  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  let handleSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
  };

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div>
      <div id="register-form" className="container ">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            signUp
          </h1>

          <input
            type="text"
            className="form-control"
            placeholder="enter name"
            name="name"
            onChange={handleChange}
            value={displayName}
          />

          <input
            type="email"
            className="form-control"
            placeholder="Email adrees"
            name="userEmail"
            onChange={handleChange}
            value={email}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Passsword"
            name="inputPassword"
            onChange={handleChange}
            value={password}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            name="inputPassword1"
            onChange={handleChange}
            value={confirmPassword}
          />
          <button className="btn btn-primary btn-block">sign UP</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
