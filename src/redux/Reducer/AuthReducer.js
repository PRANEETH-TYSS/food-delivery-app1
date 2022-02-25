let initialState = {
  SignUp: [],
  login: [],
  google: [],
  item: [0],
  cartValue: [0],
  decrement: [0],
  dropDown: [false],
  verification: [false],
  coords: [],
};
let AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, SignUp: action.payload };

    case "LOG_IN":
      return { ...state, login: action.payload, verification: action.verify };

    case "PROVIDER":
      return { ...state, google: action.payload };
    case "ITEM":
      return {
        ...state,
        item: parseInt(action.payload) + parseInt(state.item),
        cartValue: parseInt(state.cartValue) + parseInt(action.payload1),
      };
    case "DROPDOWN":
      return {
        ...state,
        dropDown: action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        decrement: parseInt(state.decrement) - parseInt(action.payload),
        cartValue: parseInt(state.cartValue) - parseInt(action.payload),
      };
    case "GET_LOCATION":
      return { ...state, coords: action.payload };

    // case "GET_LOCATION":

    //   return { ...state, coords: action.payload };

    default:
      return state;
  }
};

export default AuthReducer;
