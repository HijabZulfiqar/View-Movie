import React, { useState, useRef } from 'react';
import Slider from '../UI/Slider'
import TrendingDropDown from '../UI/TrendingDropDown'
import CardSection from '../UI/CardSection';
 import Pagination from '../UI/Pagination';
const Trending = () => {
  const topRef = useRef(null);
 
 
  const [selectedOption, setSelectedOption] = useState("week");
  const [page, setPage] = useState(1); 

  

  const handlePageChange = (newPage) => {
    setPage(newPage);
   
  };

  const handleSelect = (option) => {
    setPage(1); 
    setSelectedOption(option);
    
   
   
  };
  return (
    <div className=' w-full p-8 lg:px-10 lg:mt-0 mt-6 mx-auto' >
        <div className='  ' >
              <Slider/>
        </div>
        
        <div className='flex flex-inline  mt-5 lg: justify-between '>
        <h1 className='font-acme tracking-wider mt-1 text-white text-2xl lg:text-4xl '>Trending</h1>
       {/* DropDown */}
       <TrendingDropDown onSelect={handleSelect} />
      </div>
    
      <CardSection topRef={topRef}  selectedOption={selectedOption} page={page} />
      <div className='flex flex-col items-center md:flex-row justify-center mx-auto'>
        <Pagination topRef={topRef} onPageChange={handlePageChange} />
      </div>
  </div>
  )
}

export default Trending
