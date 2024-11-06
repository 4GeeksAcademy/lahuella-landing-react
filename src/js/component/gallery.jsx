import React from 'react';
import Slider from 'react-slick';

const galleryImages = [
  'https://www.morelandobgyn.com/hubfs/Imported_Blog_Media/GettyImages-854725402-1.jpg',
  'https://manageat.com/wp-content/uploads/2022/05/healthy-leaves-mix-salad-2022-03-03-12-52-14-utc.jpg',
  'https://cdn.cancercenter.com/-/media/ctca/images/others/blogs/2019/06-june/02-blog-healthy-food-l.jpg',
  'https://zeew.eu/wp-content/uploads/2024/04/fooddeliveryappinsouthafirca.jpg',
  'https://media.cnn.com/api/v1/images/stellar/prod/201222103421-healthyfactor-meals.jpg?q=x_0,y_0,h_956,w_1698,c_fill',
];

const Gallery = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
  };

  return (
    <div className="gallery">
      <Slider {...settings}>
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery image ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
