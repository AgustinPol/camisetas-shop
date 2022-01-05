import React, {useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { db } from '../services/firebase/firebase';
import "./style.css"

const Checkout = () => {
    //Step 1 - GET CONTEXT
    const { cart, clearCart, getTotal } = useContext(CartContext);
    const products = cart.map((item) => {
        return {
            id: item.id,
            product: item.name,
            quantity: item.quantity,
            price: item.price
        };
    });

    // STEP 2 - GET ORDER DATA
    const defaultClient = {
        client: {name: "", lastname: "", phone: "", age: "", email: ""}
    }
    
    return (
        <div className='myCheckout'>
            <h1>Gracias por tu compra, a continuación los detalles de la misma</h1>
        </div>
    )
}

export default Checkout
