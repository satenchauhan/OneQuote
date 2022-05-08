import {  } from "../../../constants";

const initialState = {
    data: {},
    // isLoggedIn: false,
    // isError: false,
    // errors: null,
    // token:null,
}

/* export default (state = {initialState}, actions) => {
    return state;
} */

/* 
export const auth = (state = {initialState}, {type, payload}) => {
    switch (type) {
      case LOGIN_LOADING:
      case REGISTER_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          data: payload,
        };
  
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          data: payload,
          isLoggedIn: true,
        };
  
      case LOGOUT_USER:
        return {
          ...state,
          loading: false,
          data: null,
          isLoggedIn: false,
        };
  
      case REGISTER_FAIL:
      case LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          error: payload,
        };
  
      case CLEAR_AUTH_STATE:
        return {
          ...state,
          loading: false,
          data: null,
          error: null,
        };
  
      default:
        return state;
    }
}; */


const authReducer = (state = initialState, action) => {};


export default authReducer;