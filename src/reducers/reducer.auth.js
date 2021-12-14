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
  user: localStorage.getItem("user"),
};

export default function auth(state = initialState, action) {
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
      localStorage.setItem("id_user", JSON.stringify(payload.msg._id));
      localStorage.setItem("name_user", JSON.stringify(payload.msg.name));

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
      localStorage.removeItem("name_user");
      localStorage.removeItem("id_user");

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