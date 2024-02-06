import React from "react";
import Card from "./Card";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

const CardSection = ({ searchQuery, page, topRef, selectedOption }) => {
  // Regular query for movies
  const { data: movies } = useQuery({
    queryKey: ["movies", page],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=4d9b181699814fa8a588a90332a200ab&page=${page}`
      );
      const data = await response.json();
      return data.results;
    },
    placeholderData: keepPreviousData,
  });

  // Query for searched movies
  const { data: searchedMovie } = useQuery({
    queryKey: ["movies", searchQuery],
    queryFn: async () => {
      if (!searchQuery) return [];
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=4d9b181699814fa8a588a90332a200ab&query=${searchQuery}`
      );
      const data = await response.json();
      console.log(data.results);
      return data.results;
    },
    placeholderData: keepPreviousData,
    enabled: Boolean(searchQuery),
  });

  // Query for trending movies, only enabled when selectedOption is truthy
  const { data: trendingMovie } = useQuery({
    queryKey: ["movies", selectedOption,page],
    queryFn: async () => {
      if (!selectedOption) return [];
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/${selectedOption}?api_key=4d9b181699814fa8a588a90332a200ab&page=${page}`
      );
      const data = await response.json();
   
      return data.results;
    },
    placeholderData: keepPreviousData,
    enabled: Boolean(selectedOption),
  });

  
  const dataToMap = searchQuery ? searchedMovie : trendingMovie || movies || [];

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1.2 }}
    >
      <section
        ref={topRef}
        className="py-16  grid grid-cols-1 justify-center md:grid-cols-2 lg:px-0 lg:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-3 "
      >
        {dataToMap.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            popularity={movie.popularity}
            poster_path={movie.poster_path}
          />
        ))}
      </section>
    </motion.div>
  );
};

export default CardSection;
