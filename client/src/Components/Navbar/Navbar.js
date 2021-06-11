import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { allOrders, getorder } from "../../Redux/actions/Order";
import { current, logout } from "../../Redux/actions/user";
import { allUsers } from "../../Redux/actions/user";

import "./Navbar.css";
const Navbar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, []);

    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const cart = useSelector((state) => state.userReducer.user.cart);
    const user = useSelector((state) => state.userReducer.user);
    const Order = useSelector((state) => state.orderReducer.order);
    console.log(user._id);
    return (
        <header>
            <h2>
                <i className="icon-plane" />
                <Link to="/" style={{ textTransform: "uppercase" }}>
                    <span id="generaltitle"> Parapharma-sûr </span>
                </Link>
            </h2>
            <nav className="navEdited">
                <ul className="lekbir">
                    <ul className="ul_auth">
                        {isAuth ? (
                            <>
                                <Link to="/Login">
                                    {" "}
                                    <li
                                        className="auth"
                                        onClick={() => dispatch(logout())}
                                    >
                                        LOGOUT{" "}
                                    </li>
                                </Link>
                                <Link to="/ShoppingCart">
                                    {" "}
                                    <li className="auth cartNumber">
                                        <img
                                            src="https://i.imgur.com/C4eSi9U.png"
                                            height="40px"
                                            width="40px"
                                            onClick={() => dispatch(current())}
                                        />
                                        <span>{cart.length}</span>
                                    </li>
                                </Link>{" "}
                                <Link to="/Profile">
                                    {" "}
                                    <li className="auth"> Profile </li>
                                </Link>
                            </>
                        ) : (
                            <>
                                {" "}
                                <Link to="/register">
                                    {" "}
                                    <li className="auth">Register </li>
                                </Link>
                                <Link to="/login">
                                    {" "}
                                    <li className="auth">LogIn </li>
                                </Link>
                            </>
                        )}

                        <Link to="/Products">
                            {" "}
                            <li className="auth"> Products </li>
                        </Link>
                        {isAuth && user.isAdmin ? (
                            <Link to="/OrderAdmin">
                                {" "}
                                <span
                                    onClick={() => {
                                        dispatch(allOrders());
                                    }}
                                >
                                    OrderAdmin
                                </span>
                            </Link>
                        ) : null}

                        {isAuth && user.isAdmin ? (
                            <Link to="/Users">
                                {" "}
                                <span
                                    onClick={() => {
                                        dispatch(allUsers());
                                    }}
                                >
                                    Users
                                </span>
                            </Link>
                        ) : null}

                        {isAuth && !user.isAdmin ? (
                            <Link to="/MyOrders">
                                {" "}
                                <span
                                    onClick={() => {
                                        dispatch(getorder(user._id));
                                    }}
                                >
                                    MyOrders
                                </span>
                            </Link>
                        ) : null}
                    </ul>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
