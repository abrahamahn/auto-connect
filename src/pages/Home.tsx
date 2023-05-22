import React, { useState, useEffect } from 'react';
import Category from '../components/Category/Category';
import Carousel from '../components/Carousel/Carousel';
import Title from '../components/Title/Title';
import { CarData } from '../types/global';
import '../styles/Home.css';
import db from '../data/db.json';

const Home: React.FC = () => {
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({});
  const [carList, setCarList] = useState<CarData[]>([]);
  
  const handleFilterChange = (filterName: string, selectedItems: string[]) => {
    setFilters((prevFilters: any) => ({ ...prevFilters, [filterName]: selectedItems }));
  }

  const filteredCarList = carList.filter((car: any) => {
    return Object.keys(filters).every(filterName => {
      if (filterName === '차종 분류') {
        return filters[filterName].includes(car.name);
      }
    });
  });

  useEffect(() => {
    setCarList(db.carClasses);
  }, []);

  return (
    <div className="main">
      <Title title="Home" />
      <Category onFilterChange={handleFilterChange} />
      <Carousel carList={filteredCarList} />
    </div>
  );
}

export default Home;