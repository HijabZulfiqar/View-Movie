import React from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";

const CardSection = () => {
  const { data: movies } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=4d9b181699814fa8a588a90332a200ab`
      );
      const data = await response.json();
      console.log(data.results);
      return data.results;
    },
  });

  return (
    <section className="py-16 px-5 grid grid-cols-1 md:grid-cols-2 lg:px-0 lg:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-3 ">
      {movies?.map((movie) => (
        <Card
        id={movie.id}
          key={movie.id}
          title={movie.title}
          popularity={movie.popularity}
          
          poster_path={movie.poster_path}
        />
      ))}
    </section>
  );
};

export default CardSection;
