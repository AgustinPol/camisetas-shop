import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock, initial}) => {

const [count, setCount] = useState(initial)

    const addItem = () => {
        if (count < stock) {
            setCount(count + 1);
        } else if (count === stock) {
            alert("No tenemos más unidades de este producto");
        } 
    }

    const removeItem = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const onAdd = () => {
        if(count > 0){
            alert("Haz agregado tu/tus productos al carrito");
        } else {
            alert("Aun no haz agregado productos al carrito");
        }
    }

    return (
        <div>
            <span className="btn btn-outline-secondary">{count}</span><br />
            <button style={{margin:4}} onClick={removeItem} className="btn btn-outline-dark">-</button>
            <button style={{margin:4}} onClick={addItem} className="btn btn-outline-dark">+</button><br />
            <button style={{marginTop:15}} onClick={onAdd} className="btn btn-success">Agregar al Carrito</button><br />
        </div>
    )
}

export default ItemCount;
