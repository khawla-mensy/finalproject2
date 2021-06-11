import axios from "axios";

//Create new order
export const NewOrder = (id, newCart) => async (dispatch) => {
    dispatch({ type: "LOADING" });
    try {
        const res = await axios.put(`/api/Order/NewOrder/${id}`, newCart);
        dispatch({ type: "NEW_ORDER_CREATED" });
    } catch (error) {
        dispatch({ type: error, payload: error.response.data });
    }
};

//GetallOrders

export const allOrders = () => async (dispatch) => {
    dispatch({ type: "LOADING" });
    try {
        try {
            const res = await axios.get("/api/Order/getOrders");
            console.log(res);
            dispatch({ type: "ALL_ORDERS", payload: res.data.allOrders });
        } catch (error) {
            console.log(error.response);
        }
    } catch (error) {}
};

//GetOrder by userid

export const getorder = (id) => async (dispatch) => {
    dispatch({ type: "LOADING" });
    try {
        try {
            const res = await axios.get(`/api/Order/getOrder/${id}`);
            console.log(res);
            dispatch({ type: "GET_ORDER", payload: res.data.orders });
        } catch (error) {
            console.log(error);
        }
    } catch (error) {}
};
