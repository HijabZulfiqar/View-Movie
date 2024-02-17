import React, { useState } from 'react';
import SuggestionButton from '../UI/SuggestionButton';
import { categoryTypes } from '../Constants/CategoryTypes';

const Suggestions = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSelection = (category) => {
    const isSelected = selectedCategories.includes(category);
    const newSelectedCategories = isSelected
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);
  };

  return (
    <div className='w-full scroll-smooth justify-center items-center gap-2 md:gap-3 gap-y-2 p-8 lg:px-10 lg:mt-0 mt-6 mx-auto grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9'>
      {categoryTypes.map((category) => (
        <SuggestionButton
          key={category}
          text={category}
          selected={selectedCategories.includes(category)}
          onClick={() => handleSelection(category)}
        />
      ))}
    </div>
  );
};

export default Suggestions;
