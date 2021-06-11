// import types

const {
    REGISTER_USER,
    LOGIN_USER,
    FAIL_USER,
    LOAD_USER,
    CURRENT_USER,
    LOGOUT_USER,
    PROFILE_EDITED,
    PROFILE_DELETED,
    ALL_USERS,
    POST_COMMENT,
    DELETE_COMMENT,
    UPDATE_COMMENT,
} = require("../constants/user");

// initialstate
const initialState = {
    user: [],
    siteusers: [],
    getuser: false,
    errors: [],
    isAuth: false,
    load: false,
    profileEdited: false,
    profileDelete: false,
    users: [],
    getallUsers: false,
    comments: [],
    comment: {},
    commentUpdated: false,
    userdeleted: false,
};

// pure function=> (state, {type,payload})=>
const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, load: true };
        //   payload:{token , msg , user }
        case REGISTER_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, load: false, isAuth: true };
        //   payload: {token , msg , user}
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);

            return { ...state, user: payload.user, load: false, isAuth: true };

        case PROFILE_DELETED:
            return { ...state, profileDeleted: true };
        case PROFILE_EDITED:
            return { ...state, profileEdited: true };
        case FAIL_USER:
            return { ...state, errors: payload, load: false };
        case CURRENT_USER:
            return { ...state, user: payload.user, isAuth: true };
        case ALL_USERS:
            return {
                ...state,
                users: payload,
                getallUsers: true,
                load: false,
            };

        case "GET_USER":
            return {
                ...state,
                getuser: true,
                loading: false,
                user: payload,
            };

        case "USER_DELETED":
            return {
                ...state,
                userdeleted: true,
                loading: false,
                user: payload,
            };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { ...state, user: {}, isAuth: false };
        case "VIDE_ERRORS":
            return { ...state, errors: [] };

        case UPDATE_COMMENT:
            return {
                ...state,
                commentUpdated: true,
                loading: false,
            };

        default:
            return state;
    }
};

export default userReducer;
