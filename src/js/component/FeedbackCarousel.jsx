import React from 'react';
import Slider from 'react-slick';

const feedbackData = [
  {
    id: 1,
    name: 'Juan Pérez',
    feedback: '¡Cambió mi vida! Definitivamente lo recomendaría a todos.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Ana García',
    feedback: 'Excelente servicio y atención al cliente. Me encantó la comida.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 3,
    name: 'Carlos López',
    feedback: 'Muy buen producto, ahora me siento mucho mejor.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

const FeedbackCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
  };

  return (
    <div className="feedback-carousel">
      <Slider {...settings}>
        {feedbackData.map((feedback) => (
          <div key={feedback.id} className="carousel-slide">
            <div className="carousel-content">
              <img
                src={feedback.image}
                alt={feedback.name}
                className="carousel-image"
              />
              <div className="feedback-text">
                <p className="feedback">{feedback.feedback}</p>
                <p className="name">- {feedback.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackCarousel;
