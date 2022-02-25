// let initialState = {
//   createuser: [],
//   verification: [],
// };
// export let AuthReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "CREATE_USER":
//       return {
//         ...state,
//         createuser: action.payload,
//       };
//     case "VERIFICATION":
//       return {
//         ...state,
//         verification: action.payload,
//       };

//     default:
//       return state;
//   }
// };

import * as types from "../Action/ActionType";
const initialState = {
  loading: false,
  CreateUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        CreateUser: action.payload,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
