import axios from 'axios';
import {
  CONNECT_SUCESS,
  CONNECT_FAILED,
  AUTHENTICATION_SUCESS,
  AUTHENTICATION_FAILED,
  REGISTER_FAILED,
  REGISTER_SUCESS,
  lOGOUT_SUCESS,
} from './types';
const baseUrl = 'http://localhost:8080/api/'
export const check_authenticated = () => async (dispatch) => {
  if (localStorage.getItem('access')) {
    const tokenCheck = { token: localStorage.getItem('access') };
    try {
      if (tokenCheck.token !== null) {
        dispatch({
          type: AUTHENTICATION_SUCESS,
          payload: tokenCheck,
        });
      }
    } catch (e) {
      dispatch({
        type: AUTHENTICATION_FAILED,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATION_FAILED,
    });
  }
};

export const login = ( email, password) => async (dispatch) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    const body = { email, password };
      try {
        const res = await axios.post(
          baseUrl+`connect`,
          body,
          config
        );
        dispatch({
          type: CONNECT_SUCESS,
          payload: res.data,
        });
        console.log('user logged In!');
      } catch (err) {
        dispatch({
          type: CONNECT_FAILED,
        });
      }
};

export const register = (name, email, password, phone, picture) => async (dispatch) => {
  const config = {
    header: {
      'Content-Type': 'application/json',
    },
  };

  const body = { name, email, password, phone, picture };

  try {
    const res = await axios.post(
      baseUrl+`register`,
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCESS,
      payload: res.data,
    });
    console.log('user created!');
  } catch (err) {
    dispatch({
      type: REGISTER_FAILED,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: lOGOUT_SUCESS,
  });
};