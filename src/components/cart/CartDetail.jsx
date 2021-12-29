import React, {useContext} from "react";
import { CartContext} from "../../context/CartContext"; 

const CartDetail = ({ product }) => {
    const { removeItem } = useContext(CartContext); 

    return (
      <> 
      <div className='itemProduct container-lg' key={product.item.id}>
                        <div className='row'>

                            <div className='col-lg-4'>
                               <img className='imgDetail' src={product.item.picture} alt={product.item.name} />
                            </div>

                            <div className='col-lg-4'>

                              <div>
                               <h6>- Producto: {product.item.name}</h6>
                              </div>

                              <div>
                               <h6>- Precio: ${product.item.price}</h6>
                              </div>

                              <div>
                               <h6>- Unidades: {product.quantity}</h6>
                              </div>
                            </div>

                            <div className='col-lg-4'>
                              <div>
                               <button style={{marginBottom: "0.5rem", marginTop: "0.5rem", marginRight: "9rem"}} className='btn btn-danger' onClick={ () => removeItem(product.item.id)}>X</button>
                              </div>

                              <div className='divSubtotal'>
                                <h5 className='text-white'>Subtotal: {product.item.price * product.quantity}</h5>
                              </div>
                            </div>
                      
                        </div>   
                    </div>
      </>
        
    )
}

export default CartDetail;