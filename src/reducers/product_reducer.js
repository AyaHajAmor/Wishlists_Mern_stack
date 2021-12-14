import {
    ADD_PRODUCT_SUCESS,
    ADD_PRODUCT_FAILED,
    LIST_PRODUCT_SUCESS,
    LIST_PRODUCT_FAILED,
} from "../actions/types";

const initialState = {
    savedproduct: false,
    arrayProduct:[],
    loading : false,
};

export default function product(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
            case LIST_PRODUCT_SUCESS:
            return {
                arrayProduct:payload,
                loading : false
                
            };
        case ADD_PRODUCT_SUCESS:
            return {
                ...state,
                arrayProduct: [...state.arrayProduct, action.payload],
                savedproduct: true
            };
        case ADD_PRODUCT_FAILED:
        case LIST_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}