import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    PRODUCT_EDITED,
    PRODUCT_DELETED,
} from "../constants/product";

const initState = {
    products: [],
    load: false,
    isEdit: false,
    produit: {},
    productDeleted: false,
    productEdited: false,
};

const productReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return { ...state, products: payload };
        case PRODUCT_DELETED:
            return { ...state, productDeleted: true };
        case PRODUCT_EDITED:
            return { ...state, productEdited: true };
        case "UPDATE_COMMENT":
            return { ...state, load: false };

        case GET_PRODUCT:
            return { ...state, produit: payload };
        default:
            return state;
    }
};

export default productReducer;
