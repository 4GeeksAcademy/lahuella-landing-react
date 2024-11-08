import React, { useState } from 'react';
import navbarImg from '../../img/navbarimg.png'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <div className="navbar-logo">
        <img src={navbarImg} alt="Logo" className="logo" />
      </div>
        <h1 className="navbar-brand">HealthyBite</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">Ver Menu</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#Shop">Haz tu Pedido</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
