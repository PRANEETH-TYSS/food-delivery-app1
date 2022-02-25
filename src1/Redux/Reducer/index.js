// import { combineReducers } from "redux";
// import { AuthReducer } from "./AuthReducer";
// let Reducer = combineReducers({ AuthReducer });
// export default Reducer;


import { combineReducers } from "redux";
import userReducer from "./AuthReducer";

const rootReducer = combineReducers({
    user:userReducer,
})

export default rootReducer;