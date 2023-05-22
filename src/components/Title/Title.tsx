import React from 'react';
import './Title.css';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className="title">{title}</h1>;
};

export default Title;