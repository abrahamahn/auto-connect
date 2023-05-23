import React, { useState, useEffect } from 'react';
import Category from '../components/Category/Category';
import Carousel from '../components/Carousel/Carousel';
import Title from '../components/Title/Title';
import { CarData } from '../types/global';
import '../styles/Home.css';
import db from '../data/db.json';

const Home: React.FC = () => {
  const [carList, setCarList] = useState<CarData[]>([]);
  
  useEffect(() => {
    setCarList(db.carClasses);
  }, []);

  return (
    <div className="main">
      <Title title="Auto Connect" />
      <Category onFilterChange={handleFilterChange} />
      <Carousel carList={carList} />
    </div>
  );
}

export default Home;