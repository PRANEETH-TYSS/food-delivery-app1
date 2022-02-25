import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIN } from "../../redux/Actions/Action";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import AuthReducer from "./../../redux/Reducer/AuthReducer";

const Login = () => {
  let logindata = useSelector(state => state.AuthReducer.verification);

  let dispatch = useDispatch();
  let navigate = useNavigate();
  console.log(logindata);

  let [states, setState] = useState({
    email: "",
    password: "",
    loading: "false",
  });
  let { email, password, loading } = states;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...states, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      dispatch(LogIN(email, password));

      logindata === true ? navigate("/alldetails") : navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form className="p-4">
              <h1>LOGIN FORM</h1>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={handleSubmit}
                >
                  {loading === true ? "Loading...." : "Login"}
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link to="/signup" className="link-danger">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right */}
    </section>
  );
};

export default Login;
