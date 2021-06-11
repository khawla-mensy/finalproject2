import "./ShoppingCart.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";
import { current } from "../../Redux/actions/user";
import { getProduct, getProducts } from "../../Redux/actions/ProductActions";
import { NewOrder } from "../../Redux/actions/Order";

function ShoppingCart(match) {
    const [BigTotal, setBigTotal] = useState(0);
    const [oneProduct, setoneProduct] = useState();

    const dispatch = useDispatch();

    const newOrderAdded = useSelector(
        (state) => state.orderReducer.orderCreated
    );
    const cart = useSelector((state) => state.userReducer.user.cart);
    const pro = useSelector((state) => state.productReducer.produit);
    const product = useSelector((state) => state.productReducer.products);

    // useEffect(() => {
    //     if (product && product) {
    //         setoneProduct(
    //             product && product.filter((el) => el._id === match.params.id)[0]
    //         );
    //     }
    // }, [product]);
    // console.log(oneProduct);
    const userId = useSelector((state) => state.userReducer.user._id);

    let x = 0;

    console.log(BigTotal);

    // function update total
    useEffect(() => {
        dispatch(current);
        if (cart) {
            cart.forEach((el) => {
                x = x + el.product.prix * el.product.qty;
            });
        }
        setBigTotal(x);
        console.log("price", cart);
    }, [cart]);

    function refreshPage() {
        window.location.reload(false);
    }

    return newOrderAdded ? (
        <div id="neworderadded">
            <h1 style={{ color: "green" }}>
                Your Order Was Added Successfully !!!
            </h1>
        </div>
    ) : (
        <div>
            <div id="headerShoppingCart">
                <div>
                    {" "}
                    <h1>Your Cart</h1>
                </div>

                <div>
                    <h1>
                        {" "}
                        Total cart {BigTotal} <span>TND</span>
                    </h1>
                </div>
                <div>
                    {/* <link to="/Order"> */}
                    <button
                        onClick={() => {
                            dispatch(
                                NewOrder(userId, {
                                    cart: cart,
                                    totalPrice: BigTotal,
                                }),
                                getProducts(product._id)
                            );
                            refreshPage();
                        }}
                        className="Validercommande"
                    >
                        Valider commande
                    </button>
                    {/* </link> */}
                </div>

                <div></div>
            </div>
            <div id="ShoppingCart-content">
                <div className="ShoppingCart-list">
                    {cart &&
                        cart.map((el, index) => <Cart item={el} key={index} />)}
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
