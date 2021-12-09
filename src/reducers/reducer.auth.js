import {
    CONNECT_SUCESS,
    CONNECT_FAILED,
    AUTHENTICATION_SUCESS,
    AUTHENTICATION_FAILED,
    REGISTER_SUCESS,
    REGISTER_FAILED,
    lOGOUT_SUCESS,
  } from "../actions/types";
  
  const initialState = {
    access: localStorage.getItem("access"),
    isAuthenticated: null,
    loading: true,
    user: null,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case AUTHENTICATION_SUCESS:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload,
        };
      case REGISTER_SUCESS:
      case CONNECT_SUCESS:
        localStorage.setItem("access", payload.token);
        return {
          ...state,
          isAuthenticated: true,
          access: payload.token,
          loading: false,
        };
      case CONNECT_FAILED:
      case REGISTER_FAILED:
      case lOGOUT_SUCESS:
      case AUTHENTICATION_FAILED:
        localStorage.removeItem("access");
        return {
          ...state,
          access: null,
          loading: false,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  }