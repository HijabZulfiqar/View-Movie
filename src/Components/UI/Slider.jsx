import React, { useState, useEffect, useRef } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Slider() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  const { data: trending, isLoading } = useQuery({
    queryKey: ["trending", currentPage],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${currentPage}`
      );
      const data = await response.json();

      return data;
    },
    placeholderData: keepPreviousData,
    enabled: !isLoadingNextPage,
  });
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 700;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 700;
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      slideRight();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!isLoading && trending && trending.results.length > 0) {
      setIsLoadingNextPage(true);
      setTimeout(() => {
        setCurrentPage((prevPage) => prevPage + 1);
        setIsLoadingNextPage(false);
      }, 21000);
    }
  }, [isLoading, trending]);

  return (
    <>
      <div className="flex items-center min-w-full rounded-lg ">
        <MdChevronLeft
          className="text-white cursor-pointer "
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          ref={sliderRef}
          className="flex w-full overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {trending &&
            trending.results.map((movie) => (
              <img
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="inline-block object-cover object-left-top min-w-full   md:h-[230px] lg:h-[280px]"
              />
            ))}
        </div>
        <MdChevronRight
          className="text-white cursor-pointer "
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
}

export default Slider;
