import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/AuthComponent/Login";
import SignUp from "./Components/AuthComponent/SignUp";
import Navbar from "./Pages/Header/Navbar";
import Home from "./Pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Deals from "./Pages/Deals";
import Footer from "./Pages/Footer";
import Loaction from "./Components/AuthComponent/Loaction";

const App = () => {
  return (
    <section>
      <action>
        <Router>
          <header>
            <Navbar />
          </header>
          <ToastContainer />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="/alldetails" element={<Deals />} />
              <Route path="/location" element={<Loaction />} />
            </Routes>
          </main>
        </Router>
      </action>
    </section>
  );
};

export default App;
