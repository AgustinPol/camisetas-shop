import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "../item-count/ItemCount";
import { useState, useContext } from 'react';
import "./detail.css";
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({item}) => {
    
    const [count, setCount] = useState(0);
    const {addItem} = useContext(CartContext)

    const addHandler = (contador)=>{
        addItem(item, contador);
        setCount(contador)
    }
    
    return (

        <article className="divDetail">
            <img className="imgDetail" src={item.picture} alt={item.name} />
            <h2>{item.name}</h2>
            <h6>Precio: $ {item.price}</h6>
            <h6>Categoría: {item.category}</h6>
            <h6>Envio gratis en Caba y Gba</h6>            
            <h6>Cantidad disponible: {item.stock}</h6>
            {count === 0 ? <ItemCount stock={item.stock} initial={1} onAdd={addHandler} /> 
            : <Link className='btn btn-success' to="/cart">Ir al carrito</Link>}
            <Link to="/" style={{margin:"1rem"}} className="btn btn-primary" >Volver al Home</Link>
        </article>
    )
}

export default ItemDetail
