import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <section id="logo">
        <article>
          <img src="https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.1dfc3064003980cb37025122200d025c.jpg" />
        </article>
        <aside>
          <h3>Our Best Deals</h3>
          <h1 className="container"></h1>
        </aside>
        <div id="middle">
          <div>
            <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/one-plus-one.1c04b9aa28fe0588592757ffc9111ae6.1.jpg" />

            <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/momo-mia-meal-for-1.9b26ce043967fa447ef98d6579536f20.1.jpg" />
          </div>
          <Link to="alldetails">
            <button className="btn btn-primary btn-block  button">
              view all deals
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
