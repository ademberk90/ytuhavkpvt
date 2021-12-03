import * as types from "../actions/types";

const initialState = { sidebarShow: true };

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarShow: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};


export default navbarReducer;