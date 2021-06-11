const initialState = {
    orders: [],
    loading: false,
    error: null,
    orderCreated: false,
    myOrders: [],
    getallOrders: false,
    getorder: false,
};

const orderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ORDER_LOADING":
            return { ...state, loading: true };
        case "ORDER_ERROR":
            return { ...state, loading: false, error: payload };
        case "NEW_ORDER_CREATED":
            return { ...state, orderCreated: true, loading: false };
        case "ALL_ORDERS":
            return {
                ...state,
                orders: payload,
                getallOrders: true,
                loading: false,
            };
        case "GET_ORDER":
            return {
                ...state,
                getorder: true,
                loading: false,
                myOrders: payload,
            };
        default:
            return { ...state };
    }
};

export default orderReducer;
