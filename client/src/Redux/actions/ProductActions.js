import { GET_ALL_PRODUCTS, GET_PRODUCT } from "../constants/product";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/product");
        console.log(res);
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data.products });
    } catch (error) {
        console.log(error);
    }
};
export const addProducts = (newProduct) => async (dispatch) => {
    try {
        await axios.post("/api/product/add", newProduct);
        dispatch(getProducts());
    } catch (error) {
        console.log(error);
    }
};
export const deleteProduct = (id) => async (dispatch) => {
    dispatch({ type: "PRODUCT_LOADING" });
    try {
        await axios.delete(`/api/product/${id}`);
        dispatch({ type: "PRODUCT_DELETED" });
    } catch (error) {
        console.log(error);
    }
};
export const editProduct = (id, newProduct) => async (dispatch) => {
    try {
        await axios.put(`/api/product/${id}`, newProduct);
        dispatch({ type: "PRODUCT_EDITED" });
    } catch (error) {
        console.log(error);
    }
};

export const getProduct = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/product/getproduct/${id}`);
        dispatch({ type: GET_PRODUCT, payload: res.data.product });
    } catch (error) {
        console.log(error);
    }
};

export const addComment = (id, com) => async (dispatch) => {
    dispatch({ type: "LOAD_PRODUCT" });
    try {
        let res = await axios.put(`/api/product/comments/${id}`, com);
        dispatch({ type: "UPDATE_COMMENT" });
        dispatch(getProducts());
    } catch (error) {
        console.log(error);
    }
};
export const deleteComment = (commentId, productId) => async (dispatch) => {
    dispatch({ type: "LOAD_PRODUCT" });
    try {
        let res = await axios.post(
            `/api/product/Dcomments/${commentId}`,
            productId
        );
        dispatch({ type: "UPDATE_COMMENT", payload: res.data.user });
        dispatch(getProducts());
    } catch (error) {
        console.log(error);
    }
};
