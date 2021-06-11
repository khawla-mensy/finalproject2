import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import form, { Form } from "react-bootstrap";
import "./EditProduct.css";
import { editProduct, getProduct } from "../../Redux/actions/ProductActions";
import { Link } from "react-router-dom";
const EditProduct = ({ history, match }) => {
    const dispatch = useDispatch();

    const edit = useSelector((state) => state.productReducer.isEdit);
    const pro = useSelector((state) => state.productReducer.produit);
    // state
    // const [produit, setProduit] = useState({
    //     nom: " ",
    //     description: " ",
    //     image: "",
    //     prix: "",
    // });

    const [produit, setProduit] = useState({});
    // handleChange
    // const handleChange = (e) => {
    //     setProduit({ ...produit, [e.target.name]: e.target.value });
    // };

    // useEffect(() => {
    //     dispatch(getProduct(match.params.id));
    //     edit
    //         ? setProduit(editProduit)
    //         : setProduit({ nom: " ", description: " ", image: "", prix: "" });
    // }, [edit, editProduit]);

    return (
        <div>
            <h1>hello</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter product name ..."
                    name="name"
                    // value={produit.nom}
                    onChange={(e) =>
                        setProduit({ ...produit, nom: e.target.value })
                    }
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Enter product description..."
                    name="description"
                    // value={produit.description}
                    onChange={(e) =>
                        setProduit({ ...produit, description: e.target.value })
                    }
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Enter image URL..."
                    name="image"
                    // value={produit.image}
                    onChange={(e) =>
                        setProduit({ ...produit, image: e.target.value })
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
                        setProduit({ ...produit, prix: e.target.value })
                    }
                />
            </div>
            <div>
                <Link to="/Products">
                    <button
                        className="edit-btn"
                        onClick={() => {
                            dispatch(editProduct(pro._id, produit));
                            // history.push("/Products");
                        }}
                    >
                        Save Changes
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EditProduct;
