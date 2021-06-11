import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./AddProduct.css";
import { addProducts } from "../../Redux/actions/ProductActions";
import { Link } from "react-router-dom";
const AddProduct = ({ history }) => {
    const dispatch = useDispatch();

    const edit = useSelector((state) => state.productReducer.isEdit);
    const editProduit = useSelector((state) => state.productReducer.produit);
    // state
    const [produit, setProduit] = useState({
        nom: " ",
        description: " ",
        image: "",
        prix: "",
    });

    // handleChange
    const handleChange = (e) => {
        setProduit({ ...produit, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        edit
            ? setProduit(editProduit)
            : setProduit({ nom: " ", description: " ", image: "", prix: "" });
    }, [edit, editProduit]);

    return (
        <div>
            <h1>hello</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter product name ..."
                    name="nom"
                    value={produit.nom}
                    onChange={handleChange}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Enter product description..."
                    name="description"
                    value={produit.description}
                    onChange={handleChange}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Enter image URL..."
                    name="image"
                    value={produit.image}
                    onChange={handleChange}
                />
            </div>

            <div>
                <input
                    type="number"
                    placeholder="Enter product price ..."
                    name="prix"
                    value={produit.prix}
                    onChange={handleChange}
                />
            </div>
            <div>
                <Link to="/products">
                    <button
                        className="Add-btn"
                        onClick={() => {
                            dispatch(addProducts(produit));
                            // history.push("/add");
                        }}
                    >
                        Ajouter produit
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AddProduct;
