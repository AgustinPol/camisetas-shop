import React, { useContext, useState } from 'react';
import "./cart.css";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import CartDetail from './CartDetail';
import { db } from "../../services/firebase/firebase";
import { addDoc, collection, writeBatch, doc, getDoc, getFirestore } from "firebase/firestore";

const Cart = () => {

    const [processingOrder, setProcessingOrder] = useState(false);
   
    const { cart, clearCart, getTotal } = useContext(CartContext);

    const confirmOrder = () => {
      setProcessingOrder(true)
      let name = document.getElementById("name").value;
      let lastname = document.getElementById("lastname").value;
      let phone = document.getElementById("phone").value;
      let age = document.getElementById("age").value;
      let email = document.getElementById("email").value;

      let contact = {
        name: name,
        lastname: lastname,
        phone: phone,
        age: age,
        email: email
      } 

      const newOrder = {
        buyer: contact,
        items: cart, 
        total: getTotal()
      }

      addDoc(collection(db, "orders"), newOrder).then(({ id }) =>{
        console.log(id)
      })

      setTimeout(() => {
        clearCart()
        setProcessingOrder(false)
      }, 1000)
    }
  
  const date = new Date();


    
    return (
        <>
        {cart.length === 0 ? (
          <div className='emptyCart'>
            <h2>Tu Carrito está vacío!</h2>
            <Link className='btn btn-primary myButton' to="/">Volver al Home</Link>
          </div>
         ) : (
           <>
           <div className='cartDiv'>
              <h2>Este es tu Carrito</h2>
                {cart.map((product) => (
                    <CartDetail key={product.id} product={product}/>
                ))}
              <div className='divTotal'>
                  <h3 className='text-dark'>Total Compra: ${getTotal()}</h3>
              </div>
              <Link className='btn btn-primary myButton' to="/">Volver al Home</Link>
            </div>
            {!processingOrder ? (
                 <div>
                 <h3>Formulario de compra</h3>
                 <form className='divForm'>
                     <input id='name' className='myInput form-control' type="text" placeholder='nombre' /><br />
                     <input id='lastname' className='myInput form-control' type="text" placeholder='apellido'/><br />
                     <input id='phone' className='myInput form-control' type="text" placeholder='teléfono'/><br />
                     <input id='age' className='myInput form-control' type="text" placeholder='edad' /><br />
                     <input id='email' className='myInput form-control' type="email" placeholder='email'/><br />
                     <button style={{margin: "0.5rem"}} className='btn btn-primary'>Refresh</button><br />
                     <button
                       onClick={confirmOrder} 
                       type='button'
                       style={{margin: "0.5rem"}} 
                       className='btn btn-success'>
                         Generar pédido
                     </button>
                 </form>
             </div>
            ) : (
              <h1>Estamos Generando su orden</h1> 
            )}
           </>
         )}
        </>
    );
};

export default Cart;
