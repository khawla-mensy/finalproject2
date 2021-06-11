import React, { useState, useEffect } from "react";
import "./Description.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getProduct,
    getProducts,
    editProduct,
    deleteProduct,
    addProducts,
    addComment,
} from "../../Redux/actions/ProductActions";
import { getComment, current } from "../../Redux/actions/user";
import CommentList from "../CommentList/CommentList";
import Comment from "../Comment/Comment";

const Description = ({ match }) => {
    useEffect(() => {
        dispatch(getComment());
        dispatch(getProducts());
        dispatch(current());
    }, []);
    const product = useSelector((state) => state.productReducer.products);
    const oneProduct = product.filter((el) => el._id === match.params.id)[0];
    console.log(oneProduct);

    const dispatch = useDispatch();

    const user = useSelector((state) => state.userReducer.user);
    const pro = useSelector((state) => state.productReducer.produit);

    const [produit, setProduit] = useState({});

    const [comment, setComment] = useState("");
    var today = new Date(),
        date =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();

    var infoCom = {
        comment: comment,
        name: user.name,
        idUser: user._id,
        date: today,
    };
    return !oneProduct ? (
        <h1 className="loading">loading...</h1>
    ) : (
        <div className="Descriptionduproduit">
            <div>
                <div className="titleandproductcard">
                    <div>
                        {" "}
                        <h1> Description du produit </h1>
                    </div>
                    <div id="productcardandpostcomment">
                        <div className="ProductCard" id="ProductCard">
                            <img
                                className="productImg"
                                height="250px"
                                width="200px"
                                src={oneProduct.image}
                            />

                            <h2 className="productTitle">{oneProduct.nom}</h2>
                            <h2 className="productName"> {oneProduct.prix}</h2>
                            <h2 className="productDescription">
                                {" "}
                                {oneProduct.description}
                            </h2>
                        </div>
                        <div className="postcommentandusercomments">
                            <div className="postcommentbutton">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Post your comment..."
                                        name="comment"
                                        onChange={(e) =>
                                            setComment(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <button
                                        id="buttonsubmit"
                                        width="60px"
                                        height="30px"
                                        onClick={() =>
                                            dispatch(
                                                addComment(
                                                    oneProduct._id,
                                                    infoCom
                                                )
                                            )
                                        }
                                    >
                                        {" "}
                                        submit
                                    </button>
                                </div>
                            </div>
                            <div className="ProductComments">
                                {!oneProduct ? (
                                    <h1>loading</h1>
                                ) : (
                                    oneProduct.comments.map(
                                        (comment, index) => (
                                            <Comment
                                                infoCom={comment}
                                                key={index}
                                                productId={oneProduct._id}
                                            />
                                        )
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                {user && user.isAdmin ? (
                    <div className="deleteeditadd">
                        <div>
                            <img
                                src="https://i.imgur.com/jymgqn3.png"
                                width="70px"
                                height="70px"
                                alt="delete-icon"
                                onClick={() =>
                                    dispatch(deleteProduct(match.params.id))
                                }
                            />
                        </div>
                        <div id="editproduct">
                            <div>
                                <img
                                    src="https://i.imgur.com/0MS7Uwl.png"
                                    width="70px"
                                    height="70px"
                                    alt="edit-icon"
                                    onClick={() =>
                                        dispatch(editProduct(match.params.id))
                                    }
                                />
                            </div>

                            <div>
                                {/* <h1>Edit product</h1> */}
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter product name ..."
                                        name="name"
                                        onChange={(e) =>
                                            setProduit({
                                                ...produit,
                                                nom: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter product description..."
                                        name="description"
                                        onChange={(e) =>
                                            setProduit({
                                                ...produit,
                                                description: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter image URL..."
                                        name="image"
                                        onChange={(e) =>
                                            setProduit({
                                                ...produit,
                                                image: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <input
                                        type="number"
                                        placeholder="Enter product price ..."
                                        name="prix"
                                        value={produit.prix}
                                        onChange={(e) =>
                                            setProduit({
                                                ...produit,
                                                prix: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div>
                                    <Link to="/Products">
                                        <button
                                            className="edit-btn"
                                            onClick={() => {
                                                dispatch(
                                                    editProduct(
                                                        oneProduct._id,
                                                        produit
                                                    )
                                                );
                                            }}
                                        >
                                            Save Changes
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to="/AddProduct">
                                <img
                                    src="https://i.imgur.com/U3gtQbt.png"
                                    width="70px"
                                    height="70px"
                                    alt="edit-icon"
                                    onClick={() => {
                                        dispatch(addProducts);
                                        dispatch(getProduct(product._id));
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                ) : null}
            </section>
        </div>
    );
};

export default Description;
