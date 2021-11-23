import React from "react";
import CartWidget from "../cart-widget/CartWidget";

const NavBs = () => {
    return (
      <header>
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand btn btn-outline-light" href="/#">Camisetas-Shop</a>
    <button className="navbar-toggler bg-light navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item" style={{margin: 3}}>
          <a className="nav-link active btn text-white" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item" style={{margin: 3}}>
          <a className="nav-link active btn text-white" aria-current="page" href="/#">Contacto</a>
        </li>
        <li className="nav-item" style={{margin: 3}}>
          <a className="nav-link active btn text-white" aria-current="page" href="/#">Info</a>
        </li>
        <li className="nav-item dropdown" style={{margin: 3}}>
          <a className="nav-link active btn dropdown-toggle text-white" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Camisetas
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="nav-link dropdown-item" href="/#">Nacionales</a></li>
            <li><a className="nav-link dropdown-item" href="/#">Internacionales</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<CartWidget/>

      </header>
        
    )
}
export default NavBs;
