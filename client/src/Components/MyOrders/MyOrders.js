import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { current } from "../../Redux/actions/user";
import OrderCard from "../OrderCard/OrderCard";
import "./MyOrders.css";
function Order() {
    const Order = useSelector((state) => state.orderReducer.myOrders);

    return !Order ? (
        <h1>loading</h1>
    ) : (
        <div className="myordersordruser">
            <div className="myordersusertitle">
                <h2> MY ORDERS</h2>
            </div>

            <div>
                {Order.map((el, i) => (
                    <OrderCard el={el} key={i} />
                ))}
            </div>
        </div>
    );
}

export default Order;
