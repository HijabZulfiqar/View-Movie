import React, { useState, useRef } from 'react';
import CategoryButton from '../UI/CategoryButton'
import CardSection from "../UI/CardSection";
import Pagination from "../UI/Pagination";
const Category = () => {
  const topRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("top_rated");
  const [page, setPage] = useState(1); 

  

  const handlePageChange = (newPage) => {
    setPage(newPage);
   
  };
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
     setPage(1);
     console.log(category)
  };
  return (
    <div className=' w-full p-8 lg:px-10 lg:mt-0 mt-6 mx-auto' >
        <div className=' mt-5'>
        <CategoryButton onSelectCategory={handleCategoryChange} />
        </div>
       <h1 className=' font-Abyssinica justify-center items-center text-center lg:text-start  md:justify-normal mt-5 tracking-widest text-white text-3xl lg:text-5xl '>Trending</h1>
         <div>
         <CardSection topRef={topRef}  page={page} activeCategory={activeCategory} />
         </div>
         <div className='flex flex-col items-center md:flex-row justify-center mx-auto'>
        <Pagination topRef={topRef} onPageChange={handlePageChange} />
      </div>
  </div>
  )
}

export default Category
