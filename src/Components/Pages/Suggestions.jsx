import React from 'react';
import SuggestionButton from '../UI/SuggestionButton';
import { categoryTypes } from '../Constants/CategoryTypes' 

const Suggestions = () => {
  return (
    <div className='w-full justify-center items-center gap-2 md:gap-3 gap-y-2 p-8 lg:px-10 lg:mt-0 mt-6 mx-auto grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9'>
      {categoryTypes.map((category) => (
        <SuggestionButton key={category} text={category} />
      ))}
    </div>
  );
};

export default Suggestions;
