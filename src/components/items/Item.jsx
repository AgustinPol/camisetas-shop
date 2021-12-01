import React from "react";
import "./Item.css";

const Item = ({ prod }) => {
    return (
        <div className="myCard">
            <img src={prod.picture} className="img-camisetas" alt="imagen camiseta" />
            <h3>{prod.name}</h3>
            <p>Precio: $ {prod.price}</p>
            <p>Categoría: {prod.category}</p>
            <button style={{margin: "0.5rem"}} className="btn btn-primary">Ver detalle</button>
            <button style={{margin: "0.5rem"}} className="btn btn-primary">Agregar</button>
        </div> 
    )
}

export default Item;