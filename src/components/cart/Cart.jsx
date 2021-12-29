import React, { useContext, useState } from 'react';
import "./cart.css";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import CartDetail from './CartDetail';
// import { db } from "../../services/firebase/firebase";
import { addDoc, collection, writeBatch, doc, getDoc, getFirestore } from "firebase/firestore";

const Cart = () => {

    const { cart, clearCart, getTotal, getUser } = useContext(CartContext);
    const [LoadingOrder, setLoadingOrder] = useState(false);
    const [form, getForm] = useState({name: "", lastname: "", phone: "", age: "", email: ""})

  const fillForm = (e) => {
    const { id, value } = e.target;
    getForm({
      ...form,
      [id]: value,
    })
  }
  
  const date = new Date();


  const finalizar = () => {
   getUser(form);
   setLoadingOrder(true);

   const db = getFirestore();

const newOrder = {

  buyer: {name: form.name, lastname: form.lastname, phone: form.phone, age: form.age, email: form.email},
  items: cart,
  date: date,
  total: getTotal(),
  }
  const batch = writeBatch(db);
  const outOfStock = [];

  // addDoc(collection(db, "orders"), newOrder).then(({ id }) => {
  //   console.log(id)
  // })

  newOrder.items.forEach((product) => {
    getDoc(doc(db, "items", product.id)).then((docSnap) => {
      if (docSnap.data().stock >= product.quantity) {
        batch.update(doc(db, "items", docSnap.id), {
          stock: docSnap.data().stock - product.quantity, 
        });
      } else {
        outOfStock.push({id: docSnap.id, ...docSnap.data() });
      }
    });
  });

  if(outOfStock.length === 0) {
    addDoc(collection(db, "orders"), newOrder)
    .then((doc) => {
     batch.commit().then(() => {
       console.log(`el número de orden es ${doc.id}`);
     });
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setTimeout(() => {
        clearCart();
      }, 2000);
    });
  }

  };
    
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
            {!LoadingOrder ? (
                 <div>
                 <h3>Formulario de compra</h3>
                 <h6>Llena el siguiente formulario para generar el link de pago</h6>
                 <form className='divForm'>
                     <input id='name' onChange={fillForm} className='myInput form-control' type="text" placeholder='nombre' /><br />
                     <input id='lastname' onChange={fillForm} className='myInput form-control' type="text" placeholder='apellido'/><br />
                     <input id='phone' onChange={fillForm} className='myInput form-control' type="text" placeholder='teléfono'/><br />
                     <input id='age' onChange={fillForm} className='myInput form-control' type="text" placeholder='edad' /><br />
                     <input id='email' onChange={fillForm} className='myInput form-control' type="email" placeholder='email'/><br />
                     <button style={{margin: "0.5rem"}} className='btn btn-primary'>Refresh</button><br />
                     <button 
                       type='button'
                       onClick={finalizar}
                       disabled={cart?.length === 0 || form.name === "" || form.lastname === "" || form.email === ""} 
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
