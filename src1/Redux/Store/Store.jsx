// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import Reducer from "../Reducer";

// let store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

// export default store;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../Reducer";

export let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
