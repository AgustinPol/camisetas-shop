import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
    return (
        <div className="myCard">
            <img src={prod.picture} className="img-camisetas" alt="imagen camiseta" />
            <h3>{prod.name}</h3>
            <Link style={{margin: "0.5rem"}} className="btn btn-primary" to={`/item/${prod.id}`}>Ver detalle</Link>
            <h6>Envíos gratis en Caba y Gran Buenos Aires</h6>
        </div> 
    )
}

export default Item;