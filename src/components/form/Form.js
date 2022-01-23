import React, {useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from "../../services/firebase/firebase";
import { addDoc, collection, writeBatch, getDoc, doc } from "firebase/firestore";
import "./style.css"

const Form = () => {

    const { setProcessingOrder, setOrderGenerated } = useContext(CartContext)
    const { cart, clearCart, getTotal} = useContext(CartContext);
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

      const newOrder = {
        buyer: contact,
        items: cart, 
        total: getTotal(),
        date: dateOfPurchase
      }

      const batch = writeBatch(db)
      const outOfStock = []

    newOrder.items.forEach((prod) => {

     getDoc(doc(db, "items", prod.item.id)).then((documentSnapshot) => {
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
    return (
        <div>
             <h3>Formulario de compra</h3>
                    <form onSubmit={confirmOrder} className='divForm'>
                      <input 
                      onChange={inputChange} 
                      value={contact.name}required 
                      name='name' 
                      className='myInput form-control' 
                      type="text" 
                      placeholder='nombre' /><br />

                      <input 
                      onChange={inputChange} 
                      value={contact.lastname}required 
                      name='lastname' 
                      className='myInput form-control' 
                      type="text" 
                      placeholder='apellido'/><br />

                      <input 
                      onChange={inputChange} 
                      value={contact.phone}required 
                      name='phone' 
                      className='myInput form-control' 
                      type="text" 
                      placeholder='teléfono'/><br />

                      <input 
                      onChange={inputChange} 
                      value={contact.age}required 
                      name='age' 
                      className='myInput form-control' 
                      type="text" 
                      placeholder='edad' /><br />

                      <input 
                      onChange={inputChange} 
                      value={contact.email}required 
                      name='email' 
                      className='myInput form-control' 
                      type="email"
                      placeholder='email'/><br />

                      <button
                        type='submit'
                        className='btn btnSize btn-success'>
                          Generar pédido
                      </button>
                    </form>
                    <div>
                      <button 
                        onClick={() => setProcessingOrder(false)} 
                        className='btn btn-primary btnSize'>
                        Volver al carrito 
                      </button>
                    </div>
        </div>
    )
}

export default Form
