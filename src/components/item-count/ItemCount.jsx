import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock, initial, final}) => {

const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        } else if (count === stock) {
            console.log("No tenemos más unidades de este producto");
        } 
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const onAdd = () => {
        if(count > 0){
            console.log(`Haz agregado ${count} producto/os al carrito`);
        } else {
            console.log("Aun no haz agregado productos al carrito");
        }
    }

    return (
        <div>
            <span className="btn btn-outline-secondary">{count}</span><br />
            <button style={{margin:4}} onClick={decrement} className="btn btn-outline-dark">-</button>
            <button style={{margin:4}} onClick={increment} className="btn btn-outline-dark">+</button><br />
            <button style={{marginTop:15}} onClick={onAdd} className="btn btn-success">Agregar al Carrito</button><br />
        </div>
    )
}

export default ItemCount;
