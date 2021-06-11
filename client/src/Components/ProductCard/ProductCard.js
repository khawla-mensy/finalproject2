import React, { useState } from "react";
import Rating from "../Rating";
import Description from "../Description/Description";
import { Link } from "react-router-dom";
import EditProduct from "../EditProduct/EditProduct";
// import {
//     deleteProduct,
//     getProduct,
//     getProducts,
// } from "../../Redux/actions/ProductActions";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCart } from "../../Redux/actions/CartActions";
import { getProduct } from "../../Redux/actions/ProductActions";
import { current } from "../../Redux/actions/user";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);
    const addedToCart = useSelector((state) => state.cartReducer.addedToCart);
    const alreadyinCart = useSelector((state) => state.cartReducer.error);
    console.log(addedToCart);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="ProductCard">
            {/* <div className="errorMsg" style={{ color: "red" }}>
                {alreadyinCart ? alreadyinCart : null}
            </div> */}
            <img
                className="productImg"
                height="200px"
                width="150px"
                src={product.image}
            />
            <div>
                <Rating />
            </div>

            <h2 className="productTitle">{product.nom}</h2>
            <h2 className="productName"> {product.prix}</h2>

            <div className="ProductDetails">
                <div className="Images">
                    <button
                        type="button"
                        class="btn"
                        style={{
                            backgroundColor: "transparent",
                            border: "none",
                        }}
                        onClick={() => {
                            dispatch(
                                addToCart({
                                    product: {
                                        ...product,
                                        qty: 1,
                                    },
                                    userId: user._id,
                                })
                            );
                            dispatch(current());
                        }}
                    >
                        <i>
                            <img
                                src="https://i.imgur.com/RM6EgHg.png"
                                height="40px"
                                width="40px"
                            />
                        </i>
                    </button>

                    <Link to={`/Description/${product._id}`}>
                        <img
                            className="hoverimage"
                            src="https://i.imgur.com/fK2dmor.png"
                            height="40px"
                            width="40px"
                            onClick={() => dispatch(getProduct(product._id))}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
