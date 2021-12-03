import * as types from "../actions/types";

const initialState = {
  pilot: {
    success: "",
    message: "",
    username: "",
    firstname: "",
    lastname: "",
  },
  loggedIn: null,
  loginError: null,
  logoutError: null,
};

const pilotReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_AUTH_SUCCESS:
      return {
        ...state,
        pilot: action.payload.pilot,
        loggedIn: action.payload.loggedIn,
        loginError: action.payload.message,
      };
    case types.LOGIN_AUTH_FAILURE:
      return {
        ...state,
        loginError: action.payload,
      };
    case types.SESSION_LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
      };
    case types.SESSION_LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: action.payload,
        logoutError: null,
      };
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        logoutError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default pilotReducer;
