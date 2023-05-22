import React, { useState } from 'react';
import './Dropdown.css';

interface DropDownProps {
  filterName: string;
  onFilterChange: (filterName: string, selectedItems: string[]) => void;
  closeDropDown: () => void;
  position: DropDownPosition;
}

interface DropDownPosition {
  left: string | number | 'auto';
  right: string | number | 'auto';
}

interface Subcategories {
  [key: string]: string[];
}

interface CloseIconProps {
  closeDropDown: () => void;
}

const CloseIcon: React.FC<CloseIconProps> = ({ closeDropDown }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="close-button"
    onClick={closeDropDown}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const Dropdown: React.FC<DropDownProps> = ({ filterName, onFilterChange, closeDropDown }) => {
  const subcategories: Subcategories = {
    "Type": ["Small", "Medium", "Large", "Luxury", "SUV"],
    "Location": ["Brroklyn", "Queens", "The Bronx", "Staten Island", "Nassau", "Westchester", "Dutchess"],
    "Price": ["Descending Order", "Ascending Order"]
  };

  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  
  if (!filterName || !subcategories[filterName]) return null;

  const handleSubcategoryClick = (item: string) => {
    const isSelected = selectedSubcategories.includes(item);
    setSelectedSubcategories(prevState => {
      if (isSelected) {
        return prevState.filter(subcategory => subcategory !== item);
      } else {
        return [...prevState, item];
      }
    });
  };


  return (
    <div className={`dropdown-wrapper dropdown-absolute`}>
      <div className="dropdown-container">
        <CloseIcon closeDropDown={closeDropDown} />
        {subcategories[filterName].map((item: string, index: number) => (
          <button key={index} className="dropdown-button" onClick={() => handleSubcategoryClick(item)}>
            <span>{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
