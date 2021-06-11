import React, { useEffect, useState } from "react";
import Rating from "../Rating";
import "./Cart.css";
import { useHistory } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    AddToQty,
    MinusQty,
    deleteCart,
} from "../../Redux/actions/CartActions";
import { current } from "../../Redux/actions/user";

function Cart({ item }) {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userReducer.user._id);

    const [product, setproduct] = useState(item);
    const [productSubTotal, setProductSubTotal] = useState(item.product.prix);
    console.log(product);
    const history = useHistory();
    const price = productSubTotal * item.product.qty;

    return (
        <div className="generaldiv">
            {/* <div>
                <div>
                    {" "}
                    <h1>YOUR CART</h1>
                </div>

                <div>
                    <h1>TOTAL PRICE</h1>
                </div>
            </div> */}
            <div className="Cart">
                <div className="image">
                    {" "}
                    <img
                        className="productImg"
                        height="200px"
                        width="150px"
                        src={item.product.image}
                    />
                </div>
                <div className="itemdetails">
                    <h2 className="itemName"> {item.product.nom}</h2>
                    <h2 className="itemPrice">Prix: {item.product.prix}</h2>
                    <h2 className="itemDescription">
                        Description: {item.product.description}
                    </h2>

                    <div>
                        <Rating />
                    </div>
                </div>

                <div className="Buttons">
                    <div>
                        <button
                            className="button"
                            type="button"
                            onClick={() => {
                                dispatch(
                                    AddToQty({
                                        itemId: item.product._id,
                                        userId: userId,
                                    })
                                );
                            }}
                        >
                            +
                        </button>
                    </div>
                    <div className="qtity">
                        <div>
                            <h2> Quantity</h2>
                        </div>
                        <div className="nbr">
                            {" "}
                            <span>{item.product.qty}</span>
                        </div>
                    </div>
                    <div>
                        <button
                            className="button"
                            type="button"
                            onClick={() => {
                                dispatch(
                                    MinusQty({
                                        itemId: item.product._id,
                                        userId: userId,
                                    })
                                );
                            }}
                        >
                            -
                        </button>
                    </div>

                    <div>
                        <h2> Price:{price} DT </h2>
                        {/* {productSubTotal * item.product.qty} */}
                    </div>
                    <div>
                        <button
                            className="buttondlt"
                            type="button"
                            onClick={() => {
                                dispatch(
                                    deleteCart({
                                        itemId: item.product._id,
                                        userId: userId,
                                    })
                                );
                            }}
                        >
                            <img
                                src="https://i.imgur.com/CqZCKac.png"
                                height="20px"
                                width="20px"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
