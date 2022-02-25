import React from "react";

import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sigin from "./Components/Sigin";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Deals from "./Components/Deals";

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <NavBar />
        </header>
        <Routes>
          {/* <Route path="/" element={ } /> */}
          <Route path="/" element={<Home />} />
          <Route path="/sigin" element={<Sigin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Sigin />} />
          <Route path="/alldetails" element={<Deals />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
