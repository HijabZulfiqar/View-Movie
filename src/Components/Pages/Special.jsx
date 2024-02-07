import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import close from "../../assets/Close.png";
import votes from "../../assets/Votes.png";
import { useQuery } from '@tanstack/react-query';

const Special = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  const { data } = useQuery({
        queryKey:['movieDetails', id],
        queryFn:async () => {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4d9b181699814fa8a588a90332a200ab`);
          const data = await response.json();
         
          return data;
        }
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
    <div className="h-screen z-10 relative overflow-hidden">
     
      <button
        className="absolute z-50 top-12 right-10 md:right-20 cursor-pointer"
        onClick={toggleContent}
      >
        <img src={close} alt="Toggle Button" />
      </button>

      {isContentVisible && (
        <div className="h-screen z-10 relative ">
          

          <div
            className="z-50 w-[535px] h-screen relative flex"
            style={{ backdropFilter: "blur(8px)", marginLeft: "auto" }}
          >
            <div className="flex flex-col absolute left-28 top-12 md:left-[180px]">
              <div className=" flex flex-col justify-center items-center">
                <img className=" w-[120px]  mt-12 md:ml-0   md:w-[153px] md:mt-5 " src={movieDetails.poster_path ? `${baseImageUrl}${movieDetails.poster_path}` : ""} alt="" />
                <div className=" mt-6 mr-3">
                  <img className="md:w-[110px] w-[90px]  " src={votes} alt="" />
                </div>
                <div className="absolute mx-auto px-12  text-white top-[370px]  md:top-80 flex flex-col justify-center items-center ">
               
                 <h1 className=" font-Abyssinica text-2xl tracking-widest">Storyline</h1>
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

      <div className="absolute inset-0 w-full   overflow-hidden">
        <img className=" min-h-screen min-w-full    object-cover" src={movieDetails.
backdrop_path ? `${baseImageUrl}${movieDetails.
  backdrop_path}` : ""} alt="" />
        <div className="absolute bottom-20 left-10 text-white text-4xl font-Seymour">{movieDetails.title}</div>
      </div>

    </div>
  );
};

export default Special;
