import React, {useContext} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext);
    return (
      
        <div className="cont-carrito">        
        <Link className="btn btn-outline-info text-white" to="/cart" type="button">
          <span>{totalQuantity}</span>
          <img className="img-carrito" src={"../images/carrito1.png"} alt="imagen-carrito" />
        </Link>
        </div>
      
        )
    }
    export default CartWidget;
    