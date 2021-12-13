import {
    ADD_PRODUCT_SUCESS,
    ADD_PRODUCT_FAILED,
    LIST_PRODUCT_SUCESS,
    LIST_PRODUCT_FAILED,
} from "../actions/types";

const initialState = {
    access: localStorage.getItem("access"),
    isAuthenticated: null,
    loading: true,
    user: localStorage.getItem("user"),
};

export default function product(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LIST_PRODUCT_SUCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload,
            };

        case ADD_PRODUCT_SUCESS:
            localStorage.setItem("access", payload.token);
            localStorage.setItem("user", JSON.stringify(payload.msg));

            return {
                ...state,
                isAuthenticated: true,
                access: payload.token,
                loading: false,
            };
        case ADD_PRODUCT_FAILED:
        case LIST_PRODUCT_FAILED:
            localStorage.removeItem("access");
            localStorage.removeItem("user");

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