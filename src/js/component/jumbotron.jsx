import React from 'react';
import JumboImg from '../../img/JumboImg.jpg';
const Jumbotron = () => {
    return (
      <div className="jumbotron" style={{ backgroundImage: `url(${JumboImg})` }}>
        <div className="jumbotron-content">
          <h1>Comida Saludable en Tu Puerta</h1>
          <p>Disfruta de Menús Nutritivos Sin Sacrificar Sabor!</p>
        </div>
      </div>
    );
  }
  
  export default Jumbotron;
