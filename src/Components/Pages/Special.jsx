import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import close from "../../assets/Close.png";
import votes from "../../assets/Votes.png";
import { useQuery } from "@tanstack/react-query";
import { GoArrowLeft } from "react-icons/go";

const Special = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  const { data } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await response.json();
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      setMovieDetails(data);
    }
  }, [data]);

  const [isContentVisible, setIsContentVisible] = useState(true);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  return (
    <div className="relative z-10 h-screen overflow-hidden">
      <button
        className="absolute z-50 cursor-pointer top-12 right-10 md:right-20"
        onClick={toggleContent}
      >
        <img src={close} alt="Toggle Button" />
      </button>

      {isContentVisible && (
        <div className="relative z-10 h-screen ">
          <div
            className="z-50 w-[535px] h-screen relative flex"
            style={{ backdropFilter: "blur(8px)", marginLeft: "auto" }}
          >
            <div className="flex flex-col absolute left-28 top-12 md:left-[180px]">
              <div className="flex flex-col items-center justify-center ">
                <img
                  className=" w-[120px]  mt-12 md:ml-0   md:w-[153px] md:mt-5 "
                  src={
                    movieDetails.poster_path
                      ? `${baseImageUrl}${movieDetails.poster_path}`
                      : ""
                  }
                  alt=""
                />
                <div className="mt-6 mr-3 ">
                  <img className="md:w-[110px] w-[90px]  " src={votes} alt="" />
                </div>
                <div className="absolute mx-auto px-12  text-white top-[370px]  md:top-80 flex flex-col justify-center items-center ">
                  <h1 className="text-2xl tracking-widest  font-Abyssinica">
                    Storyline
                  </h1>
                  <div className=" w-[340px] ml-10 special font-Abyssinica   md:mr-0    md:w-[470px] lg:ml-10 mt-4">
                    <p>{movieDetails.overview}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white w-[290px]   md:w-[391px] h-[0.8px] mt-14 absolute top-72 left-12 "></div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 w-full overflow-hidden">
        <img
          className="object-cover min-w-full min-h-screen "
          src={
            movieDetails.backdrop_path
              ? `${baseImageUrl}${movieDetails.backdrop_path}`
              : ""
          }
          alt=""
        />
        <div className="absolute text-2xl text-white bottom-20 left-10 md:text-4xl font-Seymour">
          {movieDetails.title}
        </div>

        <Link to="/">
          <GoArrowLeft className="absolute bottom-[88%] lg:bottom-[85%]  left-6 text-white w-28  h-16 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Special;
