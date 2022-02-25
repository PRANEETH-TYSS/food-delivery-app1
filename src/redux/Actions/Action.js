import firebase from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// this is for signup
export let SignUP = (email, password) => {
  return async dispatch => {
    let userData = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    userData.user.sendEmailVerification();

    dispatch({
      type: "SIGN_UP",
      payload: userData,
    });
  };
};

// this is for login
export let LogIN = (email, password) => {
  return async dispatch => {
    let logindata = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    dispatch({
      type: "LOG_IN",
      payload: logindata,
      verify: logindata.user.emailVerified,
    });
  };
};

export let GoogleProvider = new firebase.auth.GoogleAuthProvider();
export let SocialLogin = Provider => {
  return async dispatch => {
    let gprovider = await firebase.auth().signInWithPopup(Provider);
    toast.success("successfully logged in with google");

    dispatch({
      type: "PROVIDER",
      payload: gprovider,
    });
  };
};
export let AddProducts = (products, items) => {
  return async dispatch => {
    let itemData = products;
    let cartProductIncrement = items;

    dispatch({
      type: "ITEM",
      payload: itemData,
      payload1: cartProductIncrement,
    });
  };
};
export let Decrement = (product, decrementProduct) => {
  return async dispatch => {
    let item1 = product;
    let decrementProd = decrementProduct;
    dispatch({
      type: "DECREMENT",
      payload: decrementProd,
      payload2: item1,
    });
  };
};
export let dropDownCart = prod => {
  return async dispatch => {
    let dropdown = prod;

    dispatch({
      type: "DROPDOWN",
      payload: dropdown,
    });
  };
};

export const geolocation = locate => {
  return async dispatch => {
    let userLocation = locate;
    dispatch({
      type: "GET_LOCATION",
      payload: geolocation.getCurrentPosition(userLocation),
    });
  };
};
