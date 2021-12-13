import React from "react";
import CartWidget from "../cart-widget/CartWidget";
import { Link } from "react-router-dom";

const NavBs = () => {
    return (
      <header>
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand btn btn-outline-light" to={"/"}>Camisetas-Shop</Link>
    <button className="navbar-toggler bg-light navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        
        <li className="nav-item" style={{margin: 4}}>
          <Link to="/category/nacional" className="nav-link active btn btn-outline-light" aria-current="page" href="divFooter">Nacionales</Link>
        </li>
        <li className="nav-item" style={{margin: 4}}>
          <Link to="/category/internacional" className="nav-link active btn btn-outline-light" aria-current="page" href="divFooter">Internacionales</Link>
        </li>
        <li className="nav-item" style={{margin: 4}}>
          <Link to="/category/selecciones" className="nav-link active btn btn-outline-light" aria-current="page" href="divFooter">Selecciones</Link>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>
      </header>
    )
}
export default NavBs;
