import React from "react";
import "./OrderCard.css";

function OrderCard({ el }) {
    console.log(el);

    return (
        <div className="generaldivorder">
            <div className="Orderdetails">
                <h2>TOTAL PRICE :{el.totalPrice}</h2>
                <h4>Order Number : {el._id}</h4>
                <h4>created on :{el.date}</h4>
            </div>
            <div>
                {" "}
                {el.products.map((product) => (
                    <div className="Orderproductdetails">
                        <div className="NomOrder">
                            <h2 id="h1productorder"> Nom</h2>
                            <h2 id="h1productorder"> {product.product.nom}</h2>
                        </div>
                        <div className="NomOrder">
                            <h2 id="h1productorder">Quantité</h2>
                            <h2 id="h1productorder">{product.product.qty}</h2>
                        </div>
                        <div className="NomOrder">
                            <h2 id="h1productorder">Prix</h2>
                            <h2 id="h1productorder">{product.product.prix}</h2>
                        </div>
                        <image src={product.product.image}></image>
                    </div>
                ))}{" "}
            </div>
        </div>
    );
}

export default OrderCard;
