import { CART_ADD_ITEM, ORDER_UPDATED } from "../constants/CartConstants";
const initialState = {
    addedToCart: false,
    qtyModified: false,
    loading: false,
    cartdeleted: false,
    orderUpdated: false,
    order: [],
    error: null,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            return {
                ...state,
                addedToCart: true,
                loading: false,
            };
        case "CARTLOADING":
            return { ...state, loading: true };
        case "DELETECART":
            return { ...state, cartdeleted: true };
        case "ADDTOQUANTITY":
            return { ...state, loading: false, qtyModified: true };
        case "MINUSQUANTITY":
            return { ...state, loading: false, qtyModified: true };
        case "ORDER_UPDATED":
            return { ...state, loading: false, orderUpdated: true };

        case "CART_ERROR":
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
