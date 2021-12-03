import * as types from "./types";
import axios from "axios";

axios.defaults.withCredentials = true;
const baseURL =  process.env.REACT_APP_API_URL;

export const login = (post) => async (dispatch) => {
  try {
    const apiEndPoint = baseURL + "/login";
    const { data } = await axios.post(apiEndPoint, post);
    dispatch({
      type: types.LOGIN_AUTH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.LOGIN_AUTH_FAILURE,
      payload: error.message,
    });
  }
};

export const checkLoggedIn = () => async (dispatch) => {
  try {
    const apiEndPoint = baseURL + "/login";
    const { data } = await axios.get(apiEndPoint);
    console.log(data);
    if(data.type === "success"){
      dispatch({
        type: types.SESSION_LOGIN_SUCCESS,
        payload: data,
      });
    }
    else{
      dispatch({
        type: types.SESSION_LOGIN_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: types.SESSION_LOGIN_FAILURE,
      payload: false,
    });
  }
};

export const logout = (username) => async (dispatch) => {
  try {
    const apiEndPoint = baseURL + "/logout";
    const { data } = await axios.post(apiEndPoint, { username });
    dispatch({
      type: types.LOGOUT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.LOGOUT_FAILURE,
      payload: error.message,
    });
  }
};
