import React, { useState } from "react";
import "./Deals.css";
import JSON from "../Components/AuthComponent/items.json";
import { useSelector, useDispatch } from "react-redux";
import { AddProducts } from "../redux/Actions/Action";
import { Decrement } from "../redux/Actions/Action";
const Deals = () => {
  let { food } = JSON;
  let selector = useSelector(state => state.AuthReducer.cartValue);
  let dispatch = useDispatch();
  let sendCartValue = (e, value) => {
    dispatch(AddProducts(e, value));
  };
  let DecrementValue = p => {
    dispatch(Decrement(p, 1));
  };

  let [totalcart, setTotalCart] = useState([]);
  let cartVal = food.filter(e => {
    if (e.id === totalcart.id) {
      return e;
    }
  });
  console.log(cartVal);
  return (
    <>
      <div id="deals">
        <div class="input-group container" style={{ marginTop: "60px" }}>
          <input
            type="text"
            class="form-control"
            placeholder="search your food..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>

        {food.map(e => (
          <div className="card m-4" style={{ width: "18rem" }}>
            <img src={e.image} className="card-img-top" alt={e.name} />
            <div className="card-body">
              <h5 className="card-title">{e.name}</h5>
              <p className="card-text">{e.price}</p>
              <button
                className="btn"
                onClick={() => DecrementValue(1, e.price)}
              >
                -
              </button>
              <button className="btn btn-primary " id="button2">
                add to cart
              </button>
              <button
                id="button3"
                className="btn"
                onClick={() => sendCartValue(e.price, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Deals;
