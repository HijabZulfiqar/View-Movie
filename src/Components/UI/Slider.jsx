import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Slider() {
  const { data: trending } = useQuery({
    queryKey: ['trending'],
    queryFn: async () => {
      const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=4d9b181699814fa8a588a90332a200ab`);
      const data = await response.json();
      console.log(data.results);
      return data;
    }
  });

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 700;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 700;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      slideRight() 
    }, 2000);

    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <>
      <div className=' flex items-center'>
        <MdChevronLeft className='text-white cursor-pointer ' onClick={slideLeft} size={40} />
        <div id='slider' className='flex w-full  overflow-x-auto scroll-smooth scrollbar-hide'>
          {trending && trending.results.map(movie => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className='inline-block object-cover object-left-top min-w-full lg:h-[321px]'
            />
          ))}
        </div>
        <MdChevronRight className=' cursor-pointer text-white' onClick={slideRight} size={40} />
      </div>
    </>
  );
}

export default Slider;
