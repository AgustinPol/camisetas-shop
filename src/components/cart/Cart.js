import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import Form from "../form/Form"
import CartDetail from './CartDetail';
import "./cart.css";


const Cart = () => {

    const { processingOrder, setProcessingOrder, orderGenerated, setOrderGenerated } = useContext(CartContext)
    const { cart, clearCart, getTotal} = useContext(CartContext);
   

    const finalHandle = () => {
      setProcessingOrder(false);
      setOrderGenerated("");
    }


      if(cart.length === 0 && processingOrder === false) {
        return (
          <div className='emptyCart'>
            <h1>Carrito</h1>
            <h2>No hay productos en su carrito!</h2>
            <NavLink className='btn btn-primary myButton' to="/">Volver a la página!</NavLink>
          </div>
        )
      }
    
      return (
        <>
            { (!processingOrder && cart.length > 0) && 
              cart.map(product => <CartDetail key={product.item.id} product={product}/>)

            }
          
            {(cart.length > 0 && !processingOrder) && 
            <div className='divTotal'><h3>Total: ${getTotal()}</h3></div>}

            {(!processingOrder && cart.length > 0) && 
            <button onClick={() => clearCart()} className="btn btn-danger btnSize">Vaciar Carrito</button>}

            {(!processingOrder && cart.length > 0) && 
            <button onClick={() => setProcessingOrder(true)} className="btn btn-success btnSize">Confirmar Compra</button>}

            {(!processingOrder && cart.length > 0) && 
            <NavLink to="/" className='btn btn-primary btnSize'>Volver al home</NavLink>}

            {(processingOrder && cart.length > 0) &&  
                <div>
                  <Form />
                </div>
              }
              {(orderGenerated !== "" && processingOrder === true) &&
              <div className='buyConfirmation'>
                <h3>Felicidades, la orden fue generada! Gracias por su compra!</h3>
                <h4>El identificador de su orden es: <strong>{orderGenerated}</strong></h4>
                <button onClick={finalHandle} className='btn btn-primary btnSize'>Volver Atrás!</button>
              </div> 
              }
          </>
      );
};

export default Cart;
