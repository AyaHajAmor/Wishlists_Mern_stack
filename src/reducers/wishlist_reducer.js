import {
    ADD_WISHLIST_SUCESS,
    ADD_WISHLIST_FAILED,
    LIST_WISHLIST_SUCESS,
    LIST_WISHLIST_FAILED,
} from "../actions/types";

const initialState = {
    savedwishlist: false,
    arrayWishlist:[],
    loading : false,
};

export default function wishlist(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
            case LIST_WISHLIST_SUCESS:
            return {
                arrayWishlist:payload,
                loading : false
                
            };
        case ADD_WISHLIST_SUCESS:
            return {
                ...state,
                arrayWishlist: [...state.arrayWishlist, action.payload],
                savedwishlist: true
            };
        case ADD_WISHLIST_FAILED:
        case LIST_WISHLIST_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}