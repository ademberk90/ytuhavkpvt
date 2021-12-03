import * as types from "../actions/types";

const initialState = { flights: [] };

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FLIGHTS:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};


export default flightReducer;