import React from "react";
import ItemCount from "../item-count/ItemCount";
import "./Item.css";

const Item = ({ prod }) => {
    return (
        <div className="myCard">
            <img src={prod.picture} className="img-camisetas" alt="imagen camiseta" />
            <h3>{prod.name}</h3>
            <button style={{margin: "0.5rem"}} className="btn btn-primary">Ver detalle</button>
            <ItemCount stock={prod.stockAvailable} initial={1}/>
        </div> 
    )
}

export default Item;