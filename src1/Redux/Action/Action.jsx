// import FireBase from "../../FireBase";
// import { useNavigate } from "react-router-dom";
// export let CreateUser = (email, password) => {
//   return async dispatch => {
//     let CREATEUSER = await FireBase.auth().createUserWithEmailAndPassword(
//       email,
//       password
//     );
//     CREATEUSER.user.sendEmailVerification();
//     dispatch({
//       type: "CREATE_USER",
//       payload: CREATEUSER,
//     });
//   };
// };

// export let Verify = (email, password) => {
//   let navigate = useNavigate();
//   return async dispatch => {
//     let userLoginVerification =
//       await FireBase.auth().signInWithEmailAndPassword(email, password);
//     if (userLoginVerification.user.emailVerified === false) {
//       alert("succesufuuly logged and verify your email");
//       navigate("/");
//     } else {
//       navigate("/login");
//       alert("rejected");
//     }
//     dispatch({
//       type: "VERIFICATION",
//       payload: userLoginVerification,
//     });
//   };
// };

import * as types from "./ActionType";
// import { auth } from "../../FireBase";

import firebase from "./../../FireBase";

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = user => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});
const registerFail = error => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess(user));
      })
      .catch(error => dispatch(registerFail(error.message)));
  };
};
