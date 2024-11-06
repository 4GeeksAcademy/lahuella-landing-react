import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-2 fixed-bottom w-100">
      <div className="container d-flex justify-content-between align-items-center">
        <p>&copy; 2024 HealthyBite. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
    )
}
export default Footer;