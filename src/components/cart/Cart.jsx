import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import { db } from "../../services/firebase/firebase";
import { addDoc, collection, writeBatch, getDoc, doc } from "firebase/firestore";
import CartDetail from './CartDetail';
import "./cart.css";


const Cart = () => {

    const { processingOrder, setProcessingOrder, orderGenerated, setOrderGenerated } = useContext(CartContext)
    const { cart, clearCart, getTotal} = useContext(CartContext);
    const [contact, setContact] = useState({
      name: "",
      lastname: "",
      phone: "",
      age: "",
      email: ""
    })

    const finalHandle = () => {
      setProcessingOrder(false)
      setOrderGenerated("")
    }

    const inputChange = (e) => {
      setContact({
        ...contact,
        [e.target.name] : e.target.value
      })
    }
    
    const confirmOrder = (e) => {
      e.preventDefault();

      const newOrder = {
        buyer: contact,
        items: cart, 
        total: getTotal(),
        date: dateOfPurchase
      }

      const batch = writeBatch(db)
      const outOfStock = []

    newOrder.items.forEach((prod) => {
     getDoc(doc(db, "items", prod.item.id)).then((documentSnapshot) =>{
      if(documentSnapshot.data().stock >= prod.quantity) {
      batch.update(doc(db, "items", documentSnapshot.id), {
        stock: documentSnapshot.data().stock - prod.quantity,
      })
    } else {
      outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data()})
    }
    })
    })

    if(outOfStock.length === 0) {
      addDoc(collection(db, "orders"), newOrder).then(({id}) => {
        batch.commit().then(() => {
          setOrderGenerated(id);
        })
      }).catch((error) => {
        console.log(`error ejecutando la orden: ${error}`);
      }).finally(() => {
        clearCart();
      })
    }

    }
  
  const dateOfPurchase = new Date();

if(cart.length === 0 && processingOrder === false) {
  return (
    <div className='emptyCart'>
      <h1>Carrito</h1>
      <h2>No hay productos en su carrito!</h2>
      <NavLink className='btn btn-primary myButton' to="/">Volver al Home</NavLink>
    </div>
  )
}
    
    return (
      <>
          { (!processingOrder && cart.length > 0) && 
            cart.map(product => <CartDetail key={product.item.id} product={product}/>)

          }
        
            {(cart.length > 0 && !processingOrder) && <div className='divTotal'><h3>Total: ${getTotal()}</h3></div>}
            {(!processingOrder && cart.length > 0) && <button onClick={() => clearCart()} className="btn btn-danger btnSize">Cancelar compra</button>}
            {(!processingOrder && cart.length > 0) && <button onClick={() => setProcessingOrder(true)} className="btn btn-success btnSize">Confirmar Compra</button>}
            {(processingOrder && cart.length > 0) &&  
              <div>
                 <h3>Formulario de compra</h3>
                  <form onSubmit={confirmOrder} className='divForm'>
                     <input onChange={inputChange} value={contact.name}required name='name' className='myInput form-control' type="text" placeholder='nombre' /><br />
                     <input onChange={inputChange} value={contact.lastname}required name='lastname' className='myInput form-control' type="text" placeholder='apellido'/><br />
                     <input onChange={inputChange} value={contact.phone}required name='phone' className='myInput form-control' type="text" placeholder='teléfono'/><br />
                     <input onChange={inputChange} value={contact.age}required name='age' className='myInput form-control' type="text" placeholder='edad' /><br />
                     <input onChange={inputChange} value={contact.email}required name='email' className='myInput form-control' type="email" placeholder='email'/><br />
                     <button
                       type='submit'
                       className='btn btnSize btn-success'>
                         Generar pédido
                     </button>
                  </form>
                  <div>
                     <button onClick={() => setProcessingOrder(false)} className='btn btn-primary btnSize'>Volver al carrito </button>
                  </div>
              </div>
            }
            {(orderGenerated !== "" && processingOrder === true) &&
            <div className='buyConfirmation'>
              <h3>Felicidades, la orden fue generada</h3>
              <h4>El identificador de su orden es: <strong>{orderGenerated}</strong></h4>
              <button onClick={finalHandle} className='btn btn-primary btnSize'>Volver Atras!</button>
            </div> 
            }
        </>
    );
};

export default Cart;
