import React, { useState, useRef } from 'react';
import './Category.css';
import Dropdown from '../Dropdown/Dropdown';

interface CategoryProps {
  onFilterChange: (filterName: string, selectedItems: string[]) => void;
}

const Category: React.FC<CategoryProps> = ({ onFilterChange }) => {
  const buttonNames = ["Type", "Location", "Price", "Newest", "Popular"];
  const [activeDropDown, setActiveDropDown] = useState('');
  const [dropDownPosition, setDropDownPosition] = useState({left: 'auto', right: 'auto'});

  const buttonRef = useRef<HTMLButtonElement | null>(null); // Use proper typing here
  const handleClick = (name: string) => {
  setActiveDropDown(prev => prev === name ? '' : name);
  const rect = buttonRef.current?.getBoundingClientRect();
  const halfScreen = window.innerWidth / 2;
  if (rect && rect.left < halfScreen) {
    setDropDownPosition({ left: rect.left.toString(), right: 'auto' });
  } else if (rect) {
    setDropDownPosition({ left: 'auto', right: (window.innerWidth - rect.right).toString() });
  }
};
  return (
    <div className="category-wrapper">
      <div className="category-container">
        {buttonNames.map((name, index) => (
          <button ref={buttonRef} key={index} className="category-button" onClick={() => handleClick(name)}>
            <span>
              {name}
            </span>
          </button>
        ))}
      </div>
      <Dropdown filterName={activeDropDown} onFilterChange={onFilterChange} closeDropDown={() => setActiveDropDown('')} position={dropDownPosition} />
    </div>
  );
}

export default Category;
