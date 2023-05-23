import React, { useState, useEffect } from 'react';
import { CarData } from '../../types/global';
import './Carousel.css';
import db from '../../data/db.json';

interface CarCarouselProps {
  carList: CarData[];
}

const Carousel: React.FC<CarCarouselProps> = ({ carList }) => { 
  const [carouselList, setCarouselList] = useState<CarData[]>(carList);
  
  useEffect(() => {
    setCarouselList(db.carClasses);
  }, []);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const abbreviateDistance = (distance: number) => {
    return `${distance / 1000}K mi`;
  }

  return (
    <div className="carousel-container">
      {carouselList.map((car, index) => (
        <div className="carousel" key={index}>
          <div className="image-container">
            <img className="image" src={car.image} alt={car.name} />
          </div>
          <div className="info-container">
            <div className="info">
              <div className="item-title-container">
                <h2 className="item-title">{car.name}</h2>
                <h2 className="item-brand">{car.brand}</h2>
              </div>
            </div>
            <div className="price">
              <span className="original">
                ${formatPrice(Math.ceil(car.price / 1000) * 1000 - 2)}
              </span>
            </div>
            <div className="details">
              <span className="year">{car.year} | </span>
              <span className="distance">{abbreviateDistance(car.distance)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;