import axios from "axios";
import {
    LOAD_USER,
    REGISTER_USER,
    FAIL_USER,
    LOGIN_USER,
    CURRENT_USER,
    LOGOUT_USER,
    PROFILE_DELETED,
    PROFILE_EDITED,
    ALL_USERS,
    POST_COMMENT,
    DELETE_COMMENT,
    UPDATE_COMMENT,
} from "../constants/user";

export const register = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/register", user);
        //succees action
        dispatch({ type: REGISTER_USER, payload: result.data }); //{user,token,msg}
        history.push("/profile");
    } catch (error) {
        // fail
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/login", user);
        dispatch({ type: LOGIN_USER, payload: result.data }); //{msg,token,user}
        history.push("./profile");
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("/api/user/current", config);
        dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error });
    }
};

//get all users

export const allUsers = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/user/users");
        // console.log(res);
        dispatch({ type: ALL_USERS, payload: res.data.users });
    } catch (error) {
        console.log(error);
    }
};

// get user
export const getuser = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/user/getuser/${id}`);
        dispatch({ type: "GET_USER", payload: res.data.user });
    } catch (error) {
        console.log(error);
    }
};
//delete user
export const deleteuser = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`/api/user/deleteuser/${id}`);
        // dispatch({ type: "USER_DELETED", payload: res.data.user });
        dispatch(allUsers());
    } catch (error) {
        console.log(error);
    }
};

// logout
export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};

export const videErrors = () => {
    return {
        type: "VIDE_ERRORS",
    };
};

export const deleteProfile = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        await axios.delete(`/api/user/${id}`);
        dispatch({ type: PROFILE_DELETED });
        dispatch(current());
    } catch (error) {
        console.log(error);
    }
};

export const editProfile = (id, newProfile) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        await axios.put(`/api/user/${id}`, newProfile);
        dispatch({ type: PROFILE_EDITED });
        dispatch(current());
    } catch (error) {
        console.log(error);
    }
};

// Post comment

//get comments
export const getComment = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.put(`/api/user/product/${id}`);
        dispatch({ type: UPDATE_COMMENT, payload: result.data.user });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_USER, payload: error.response });
    }
};

//delete comment

//admin deleting user's comment
export const deleteComments = (id, comment) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.put(`/api/user/delete/${id}`, comment);
        dispatch({ type: ALL_USERS, payload: result.data.users });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_USER, payload: error.response });
    }
};
