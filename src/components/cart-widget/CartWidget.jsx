import React, {useContext} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext);
    return (
      
        <div className="cont-carrito">        
        <Link className="btn btn-outline-info text-white" to="/cart" type="button">
          <div className="container-lg">
            <div className="row">
              <div className="col-lg-4">
                <span className="counterCart badge bg-light text-dark ms-1 rounded-pill">{totalQuantity}</span>
              </div>
              <div className="col-lg-4">
                <img className="img-carrito" src={"../images/carrito1.png"} alt="imagen-carrito" />
              </div>
            </div>
          </div>
        </Link>
        </div>
      
        )
    }
    export default CartWidget;
    