import axios from 'axios';
import {
    ADD_PRODUCT_SUCESS,    
    ADD_PRODUCT_FAILED  ,  
    LIST_PRODUCT_SUCESS,
    LIST_PRODUCT_FAILED,
} from './types';
const baseUrl = 'http://localhost:8080/api/';
const config = {
    header: {
      'Content-Type': 'application/json',
    },
  };
export const saveProduct = (name, price, currency, description, id_wishlist, id_user, statut, photo) => async (dispatch) =>  {
    const body = { name, price, currency, description, id_wishlist, id_user, statut, photo};
    console.log(body);
    try {
        const res = await axios.post(
            baseUrl+`addProduct`,
            body,
            config
          );
          dispatch({
            type: ADD_PRODUCT_SUCESS,
            payload: res.product,
          });
    } catch (e) {
        console.error(e);
      dispatch({
        type: ADD_PRODUCT_FAILED,
      });
    }

};
export const listProduct = (id_user) => async (dispatch) =>  {
  try {
      const res = await axios.get(
          baseUrl+`allproducts/`+id_user,
          config
        );
        dispatch({
          type: LIST_PRODUCT_SUCESS,
          payload: res.data,
        });
  } catch (e) {
      console.error(e);
    dispatch({
      type: LIST_PRODUCT_FAILED,
    });
  }

};