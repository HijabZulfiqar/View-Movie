import React, { useEffect, useState } from "react";
import Card from "./Card";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

const CardSection = ({
  searchQuery,
  page,
  topRef,
  selectedOption,
  activeCategory,
  suggestedMovies,
}) => {
  const [dataToMap, setDataToMap] = useState([]);

  // Regular query for movies
  const { data: movies } = useQuery({
    queryKey: ["movies", page],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}`
      );
      const data = await response.json();
      return data.results;
    },
    placeholderData: keepPreviousData,
  });

  // Query for searched movies
  const { data: searchedMovie } = useQuery({
    queryKey: ["movies", searchQuery ],
    queryFn: async () => {
      const query = searchQuery ;
      console.log("Query:", query);
      if (!query) return [];
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${query}`
      );
      const data = await response.json();
     
      return data.results;
    },
    placeholderData: keepPreviousData,
    enabled: Boolean(searchQuery),
  });
  //query for suggested movies
  const { data: suggestedMovie } = useQuery({
    queryKey: ["movies", suggestedMovies],
    queryFn: async () => {
      const query = suggestedMovies?.length > 0 ? suggestedMovies.join(', ') : '';
      if (!query) return [];
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${query}`
      );
      const data = await response.json();
      return data.results;
    },
    placeholderData: keepPreviousData,
    enabled: Boolean(suggestedMovies?.length > 0),
  });

  // Query for trending movies, only enabled when selectedOption is truthy
  const { data: trendingMovie } = useQuery({
    queryKey: ["movies", selectedOption, page],
    queryFn: async () => {
      if (!selectedOption) return [];
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/${selectedOption}?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}`
      );
      const data = await response.json();

      return data.results;
    },
    placeholderData: keepPreviousData,
    enabled: Boolean(selectedOption),
  });

  // Query for category movies
  const { data: category } = useQuery({
    queryKey: ["movies", activeCategory, page],
    queryFn: async () => {
      if (!activeCategory) return [];
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${activeCategory}?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}`
      );
      const data = await response.json();

      return data.results;
    },
    placeholderData: keepPreviousData,
    enabled: Boolean(activeCategory),
  });

  // Set dataToMap based on the available data
  useEffect(() => {
    if (searchQuery && searchedMovie) {
      setDataToMap(searchedMovie);
    } else if (selectedOption && trendingMovie) {
      setDataToMap(trendingMovie);
    } else if (activeCategory && category) {
      setDataToMap(category);
    } else if (suggestedMovies?.length > 0 && suggestedMovie) {
      setDataToMap(suggestedMovie);
    } else {
      setDataToMap(movies);
    }
  }, [searchQuery, selectedOption, activeCategory, movies, searchedMovie, suggestedMovies, suggestedMovie, trendingMovie, category]);

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1.2 }}
    >
      <section
        ref={topRef}
        className="grid justify-center grid-cols-1 py-16 md:grid-cols-2 lg:px-0 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-3"
      >
        {dataToMap?.map((movie, index) => (
          <Card
            key={movie.id || index}
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
