import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import CartDetail from './CartDetail';
import { db } from "../../services/firebase/firebase";
import { addDoc, collection, writeBatch, getDoc, doc } from "firebase/firestore";
import "./cart.css";

const Cart = () => {

    const [processingOrder, setProcessingOrder] = useState(false);
   
    const { cart, clearCart, getTotal } = useContext(CartContext);

    const [orderGenerated, setOrderGenerated] = useState("")

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

    const changeStateOrder = () => {
      setProcessingOrder(true)
    }
    
    const confirmOrder = (e) => {
      e.preventDefault();
      changeStateOrder(contact.name);
      // console.log(contact.name+contact.lastname)
      // setProcessingOrder(true)

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
          setOrderGenerated(id)
          console.log(`el id de su orden es ${id}`)
        })
      }).catch((error) => {
        console.log(`error ejecutando la orden: ${error}`)
      }).finally(() => {
        setProcessingOrder(false)
        clearCart()
      })
    }

    }
  
  const dateOfPurchase = new Date();

if(cart.length === 0) {
  return (
    <div className='emptyCart'>
      <h1>Carrito</h1>
      <h2>No hay productos en su carrito!</h2>
      <Link className='btn btn-primary myButton' to="/">Volver al Home</Link>
    </div>
  )
}
    
    return (
        <div className='cartDiv'>
          <h1>Carrito</h1>
          { !processingOrder && cart.length > 0 
            ?
            cart.map(product => <CartDetail key={product.item.id} product={product}/>)

            : "procesando orden"
          }
            {(cart.length > 0 && !processingOrder) && <div className='divTotal'><h3>Total: ${getTotal()}</h3></div>}
            {(!processingOrder && cart.length > 0) && <button onClick={() => clearCart()} className="btn btn-danger btnSize">Cancelar compra</button>}
            {(!processingOrder && cart.length > 0) && <button onClick={() => changeStateOrder()} className="btn btn-success btnSize">Confirmar Compra</button>}
            {(processingOrder && cart.length > 0) &&  
              <div>
                 <h3>Formulario de compra</h3>
                  <form onSubmit={confirmOrder} className='divForm'>
                     <input onChange={inputChange} name='name' className='myInput form-control' type="text" placeholder='nombre' /><br />
                     <input onChange={inputChange} name='lastname' className='myInput form-control' type="text" placeholder='apellido'/><br />
                     <input onChange={inputChange} name='phone' className='myInput form-control' type="text" placeholder='teléfono'/><br />
                     <input onChange={inputChange} name='age' className='myInput form-control' type="text" placeholder='edad' /><br />
                     <input onChange={inputChange} name='email' className='myInput form-control' type="email" placeholder='email'/><br />
                     <button className='btn btn-primary btnSize'>Cancelar Compra</button><br />
                     <button
                       type='submit'
                       className='btn btnSize btn-success'>
                         Generar pédido
                     </button>
                  </form>
              </div>
            }
            {(orderGenerated) &&
            <div>
              <h3>Felicidades, orden generada</h3>
              <h4>El identificador de su orden es: <strong>{orderGenerated}</strong></h4>
            </div> 
            }
        </div>
      
    );
};

export default Cart;
