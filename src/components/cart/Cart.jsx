import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import CartDetail from './CartDetail';
import { db } from "../../services/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import "./cart.css";

const Cart = () => {

    const [processingOrder, setProcessingOrder] = useState(false);
   
    const { cart, clearCart, getTotal } = useContext(CartContext);

    const [contact, setContact] = useState({
      name: "",
      lastname: "",
      phone: "",
      age: "",
      email: ""
    })

    const inputChange = (e) => {
      setContact({
        ...contact,
        [e.target.name] : e.target.value
      })
    }
    
    const confirmOrder = (e) => {
      e.preventDefault();
      console.log(contact.name+contact.lastname)
      setProcessingOrder(true)

      const newOrder = {
        buyer: contact,
        items: cart, 
        total: getTotal(),
        date: dateOfPurchase
      }

      addDoc(collection(db, "orders"), newOrder).then(({ id }) =>{
        console.log(id)
      })

      setTimeout(() => {
        clearCart()
        setProcessingOrder(false)
      }, 500)
    }
  
  const dateOfPurchase = new Date();


    
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
              <div>
                 {cart.map(product => <CartDetail key={product.id} product={product}/>)}
              </div>
              <div className='divTotal'>
                  <h3 className='text-dark'>Total Compra: ${getTotal()}</h3>
              </div>
            </div>

            {!processingOrder ? (
                 <div>
                 <h3>Formulario de compra</h3>
                 <form onSubmit={confirmOrder} className='divForm'>
                     <input onChange={inputChange} name='name' className='myInput form-control' type="text" placeholder='nombre' /><br />
                     <input onChange={inputChange} name='lastname' className='myInput form-control' type="text" placeholder='apellido'/><br />
                     <input onChange={inputChange} name='phone' className='myInput form-control' type="text" placeholder='teléfono'/><br />
                     <input onChange={inputChange} name='age' className='myInput form-control' type="text" placeholder='edad' /><br />
                     <input onChange={inputChange} name='email' className='myInput form-control' type="email" placeholder='email'/><br />
                     <button style={{margin: "0.5rem"}} className='btn btn-primary'>Refresh</button><br />
                     <button
                       type='submit'
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
