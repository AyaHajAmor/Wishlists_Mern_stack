import { combineReducers } from 'redux';
import auth from './reducer.auth';
import product from './product_reducer';
import wishlist from './wishlist_reducer';

export default combineReducers({
  auth,
  product,
  wishlist,
});