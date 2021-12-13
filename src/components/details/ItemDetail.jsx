import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "../item-count/ItemCount";
import "./detail.css";

const ItemDetail = ({ item }) => {
    return (
        <div className="divDetail">
            <img className="imgDetail" src={item.picture} alt={item.name} />
            <h3>{item.name}</h3>
            <h4>Precio: $ {item.price}</h4>
            <h5>Categoría: {item.category}</h5>
            <h5>Envio gratis en Caba y Gba</h5>
            <h6>Elegir talle:</h6>
            <select className="btn btn-outline-dark" name="talle" id="talles">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
            </select><br />
            <h5>Cantidad disponible: {item.stockAvailable}</h5>
            <h6>Elegir Cantidad:</h6>
            <ItemCount stock={item.stockAvailable} initial={1}/>
            <Link to="/" style={{margin:"1rem"}} className="btn btn-primary" >Volver al Home</Link>
        </div>
    )
}

export default ItemDetail;
