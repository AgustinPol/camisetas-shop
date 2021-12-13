import React from "react";
import "./style.css";

const CartWidget = () => {
    return (
<div className="cont-carrito">        
<button className="btn btn-outline-info text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
<img className="img-carrito" src={"../images/carrito1.png"} alt="imagen-carrito" /> 0
</button>

<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">Tu Carrito</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    ...
  </div>
</div>
</div>
        )
    }
    export default CartWidget;
    