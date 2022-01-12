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
            <h3>{item.name}</h3>
            <h4>Precio: $ {item.price}</h4>
            <h5>Categoría: {item.category}</h5>
            <h5>Envio gratis en Caba y Gba</h5>            
            <h5>Cantidad disponible: {item.stock}</h5>
            {count === 0 ? <ItemCount stock={item.stock} initial={1} onAdd={addHandler} /> 
            : <Link className='btn btn-success' to="/cart">Ir al carrito</Link>}
            <Link to="/" style={{margin:"1rem"}} className="btn btn-primary" >Volver al Home</Link>
        </article>
    )
}

export default ItemDetail
