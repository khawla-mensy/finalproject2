import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { allOrders } from "../../Redux/actions/Order";
import OrderCard from "../OrderCard/OrderCard";

function OrderAdmin() {
    const dispatch = useDispatch();
    const AllOrders = useSelector((state) => state.orderReducer.orders);

    return (
        <div>
            <h2> ALL ORDERS</h2>
            <div>
                {AllOrders.map((el, i) => (
                    <OrderCard el={el} key={i} />
                ))}
            </div>
        </div>
    );
}

export default OrderAdmin;
