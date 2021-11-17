import React from "react";

const NavBs = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-blue bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">Camisetas-Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Contacto</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Camisetas
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="/#">Nacionales</a></li>
            <li><a className="dropdown-item" href="/#">Internacionales</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default NavBs;
