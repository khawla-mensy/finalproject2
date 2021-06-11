import Axios from "axios";
// import { response } from "express";

import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_ADD_ITEM_FAIL,
    CART_EMPTY,
    ORDER_UPDATED,
} from "../constants/CartConstants";
import { getProducts } from "./ProductActions";
import { current } from "./user";

export const addToCart = (productanduserId) => async (dispatch) => {
    dispatch({ type: "CARTLOADING" });

    try {
        const res = await Axios.post(`/api/user/addtocart`, {
            productanduserId,
        });
        // dispatch({
        //     type: CART_ADD_ITEM,
        //     payload: res.data,
        // });
        dispatch(getProducts());
        dispatch(current());
    } catch (error) {
        dispatch({ type: "CART_ERROR", payload: error.response.data });
    }
};
export const deleteCart = (datasent) => async (dispatch) => {
    dispatch({ type: "DELETECART" });
    try {
        const res = await Axios.put(`/api/user/deleteCart`, datasent);
        dispatch(current());
    } catch (error) {
        console.log(error);
    }
};

export const AddToQty = (datasent) => async (dispatch) => {
    dispatch({ type: "CARTLOADING" });

    try {
        const res = await Axios.post(`/api/user/addtoqtity`, datasent);
        // dispatch({
        //     type: "ADDTOQUANTITY",
        //     payload: res.data,
        // });
        dispatch(getProducts());
        dispatch(current());
    } catch (error) {}
};

export const MinusQty = (datasent) => async (dispatch) => {
    dispatch({ type: "CARTLOADING" });

    try {
        const res = await Axios.post(`/api/user/minusqtity`, datasent);
        dispatch(getProducts());
        dispatch(current());
    } catch (error) {}
};
