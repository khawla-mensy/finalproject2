import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./productReducer";
import { cartReducer } from "./cartReducer";
import orderReducer from "./OrderReducer";
const rootReducer = combineReducers({
    userReducer,
    productReducer,
    cartReducer,
    orderReducer,
});
export default rootReducer;
