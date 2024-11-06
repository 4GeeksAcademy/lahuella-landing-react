import React from 'react';
import Card from './card';  

const CardBite = () => {
  const cardsData = [
    {
      title: "Comida a Domicilio",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0f7E6bTcO03iFxuoMSsWam-6MoAH7Ew1ixg&s",
      description: "Recibe tus platos frescos y listos para comer."
    },
    {
      title: "Planes Personalizados",
      image: "https://freshfitnaples.com/wp-content/uploads/2020/05/Healthy-Eating-Workplace-1024x683.webp",
      description: "Menú basado en tus preferencias y necesidades nutricionales."
    },
    {
      title: "Ingredientes Frescos",
      image: "https://nypost.com/wp-content/uploads/sites/2/2023/05/healthy-meal.jpg?quality=75&strip=all",
      description: "Usamos solo ingredientes orgánicos y frescos en cada plato."
    },
    {
      title: "Entrega Rápida y Puntual",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiA9W-yV_QF2tG2xUaiA_cFuBf0ZrYeyO-cg&s",
      description: "Garantizamos entregas rápidas para que nunca te falte tiempo."
    }
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {cardsData.map((card, index) => (
          <div className="col-md-3" key={index}>
            <Card
              title={card.title}
              image={card.image}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBite;
