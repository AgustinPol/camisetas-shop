import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "../item-count/ItemCount";
import { useState } from 'react';
import "./detail.css";

const GoToCart = () => {
    <div>
        <Link className='btn btn-primary' to={"/cart"}> Ir al carrito</Link>
        <Link className='btn btn-primary' to={"/"}> Seguir Navegando</Link>
    </div>
}

const ItemDetail = ({ item }) => {

const [quantityAdded, setQuantityAdded] = useState(0) 

console.log(quantityAdded)

    return (
        <article className="divDetail">
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
            <ItemCount stock={item.stockAvailable} initial={1} final={quantityAdded} />
            <Link to="/" style={{margin:"1rem"}} className="btn btn-primary" >Volver al Home</Link>
        </article>
    )
}

export default ItemDetail;
