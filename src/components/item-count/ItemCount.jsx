import React from 'react';
import { useState } from 'react';
import "./styles.css";

const ItemCount = ({stock, initial}) => {

    // const stock = 13;
const [count, setCount] = useState(initial)
    // const [contador, setContador] = useState(1);

    const addItem = () => {
        if (count < stock) {
            setCount(count + 1);
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
        <div className="itemCount">
            <h4>Camiseta Boca Titular</h4>
            <span className="btn btn-info">{count}</span><br />
            <button style={{margin:4}} onClick={removeItem} className="btn-sm btn-primary">-</button>
            <button style={{margin:4}} onClick={addItem} className="btn-sm btn-primary">+</button>
            <button style={{marginTop:15}} onClick={onAdd} className="btn btn-outline-dark">Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;
