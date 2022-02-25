import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import CitiesNear from "./CitiesNear";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className="welcome">
        <div>
          <h1>let food be thy medicine and</h1>
          <h1> medicine be thy food</h1>
        </div>
        <div className="input">
          <div style={{ display: "flex" }} className="locationfont">
            <i class="fal fa-map-marker-alt"></i>
            <div>
              <input
                type="search"
                className="form-control"
                placeholder="       set your location"
              />

              <button className="btn btn-primary">search</button>
            </div>
          </div>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8C4XH3n7grQPKwgMBmQORAgNzIs2Sh-S4oQ&usqp=CAU" />
        </div>
      </div>
      <CitiesNear />
      <Footer />
    </>
  );
};

export default Home;
