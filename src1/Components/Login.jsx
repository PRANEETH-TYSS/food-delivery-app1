import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let [state, setState] = useState({
    email: "",
    password: "",
  });
  let { email, password } = state;
  let handleSubmit = () => {};
  let handleGoogleSignIn = () => {};
  let handleFacebookSignIn = () => {};
  let handleChange = () => {};
  return (
    <div>
      <div>
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            signin
          </h1>
          <div className="social-login">
            <button
              className="btn google-btn social-btn"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google+
            </button>
            <button
              className="btn facebook-btn social-btn"
              onClick={handleFacebookSignIn}
            >
              Sign in with Facebook
            </button>
          </div>
          <p style={{ textAlign: "center" }}>OR</p>
          <input
            type="email"
            className="form-control"
            placeholder="Email adrees"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Passsword"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <button className="btn btn-secondary btn-block">sign in</button>
          <hr />
          <p>Don't have an account</p>
          <Link to="/register">
            <button className="btn btn-primary btn-block" id="signup">
              Sign UP new account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
