import axios from 'axios';
import {
    ADD_WISHLIST_SUCESS,    
    ADD_WISHLIST_FAILED  ,  
    LIST_WISHLIST_SUCESS,
    LIST_WISHLIST_FAILED,
} from './types';
const baseUrl = 'http://localhost:8080/api/';
const config = {
    header: {
      'Content-Type': 'application/json',
    },
  };
export const saveWishlist = (name, id_user) => async (dispatch) =>  {
    const body = { name, id_user};
    try {
        const res = await axios.post(
            baseUrl+`addWishlist`,
            body,
            config
          );
          dispatch({
            type: ADD_WISHLIST_SUCESS,
            payload: res.wishlist,
          });
    } catch (e) {
        console.error(e);
      dispatch({
        type: ADD_WISHLIST_FAILED,
      });
    }

};
export const listWishlist = (id_user) => async (dispatch) =>  {
  try {
      const res = await axios.get(
          baseUrl+`allwishlists/`+id_user,
          config
        );
        dispatch({
          type: LIST_WISHLIST_SUCESS,
          payload: res.data,
        });
  } catch (e) {
      console.error(e);
    dispatch({
      type: LIST_WISHLIST_FAILED,
    });
  }

};