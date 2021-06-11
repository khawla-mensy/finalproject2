import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductList.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { getProducts } from "../../Redux/actions/ProductActions";
import { Form, Button } from "react-bootstrap";
const ProductList = () => {
    const [searchName, setsearchName] = useState("");

    const dispatch = useDispatch();
    const products = useSelector((state) => state.productReducer.products);
    console.log(products);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    // const getSearchTName = (input) => {
    //     setSearchName(input);
    // };
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className="general">
            <div className="Search">
                <form>
                    <input
                        placeholder="Search here..."
                        type="text"
                        id="searh_bar"
                        onChange={(e) => {
                            setsearchName(e.target.value);
                        }}
                    />
                </form>
                <div>
                    <button className="btn">Search</button>
                </div>
            </div>
            <div className="products-content">
                <div className="products-list">
                    {products
                        .filter((el) =>
                            el.nom
                                .toLowerCase()
                                .includes(searchName.toLowerCase())
                        )
                        .map((product) => (
                            <ProductCard product={product} key={product._id} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
