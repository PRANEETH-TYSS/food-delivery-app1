import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  SignUP,
  SocialLogin,
  GoogleProvider,
} from "./../../redux/Actions/Action";
import "./style.css";

const SignUp = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    email: "",
    email1: "",
    password: "",
    profile_name: "",
    gender: "",
    loading: false,
  });
  let { email, email1, password, profile_name, gender, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let userdata = useSelector(signup => signup);
  console.log(userdata);
  let dispatch = useDispatch();

  let handleSubmit = e => {
    e.preventDefault();
    try {
      if (email === email1) {
        dispatch(SignUP(email, password));
        let confirmMessage = `A verification Message has been sent to ${email} verify and login`;

        navigate("/login");
        toast.info(confirmMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };
  let handleClick = async Provider => {
    try {
      dispatch(SocialLogin(Provider));
      navigate("/alldetails");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4 ">
                      <div className="d-flex flex-row align-items-center mb-4 GOOGLE">
                        <button
                          type="button"
                          className="goolge"
                          onClick={() => handleClick(GoogleProvider)}
                        >
                          signup with google
                        </button>
                      </div>
                      <h3></h3>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="profile_name"
                            value={profile_name}
                            onChange={handleChange}
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email"
                            value={email}
                            required
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>
                      {/* conformation email */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email1"
                            value={email1}
                            required
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Re-Enter Your Email
                          </label>
                        </div>
                      </div>
                      {/* password */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            required
                            id="form3Example4c"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={handleSubmit}
                          //
                        >
                          {loading === true ? "Loading...." : "Register"}
                        </button>
                      </div>
                      <div className="form-group">
                        <p>
                          Have an account?
                          <Link to="/login">Log in.</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                  {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
