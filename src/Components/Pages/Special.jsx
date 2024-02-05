import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import close from "../../assets/Close.png";
import votes from "../../assets/Votes.png";

const Special = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    // Fetch movie details using the id
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4d9b181699814fa8a588a90332a200ab`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const [isContentVisible, setIsContentVisible] = useState(true);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="h-screen z-10 relative">
      <button
        className="absolute z-50 top-12 right-20 cursor-pointer"
        onClick={toggleContent}
      >
        <img src={close} alt="Toggle Button" />
      </button>

      {isContentVisible && (
        <div className="h-screen z-10 relative">
          <div className="absolute inset-0 min-h-screen w-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={movieDetails.poster_path ? `${baseImageUrl}${movieDetails.poster_path}` : ""}
              alt=""
            />
          </div>

          <div
            className="z-50 w-[535px] h-screen relative flex"
            style={{ backdropFilter: "blur(8px)", marginLeft: "auto" }}
          >
            <div className="flex flex-col absolute top-12 left-[180px]">
              <div className=" flex flex-col justify-center items-center">
                <img className="w-[153px] mt-5 " src={movieDetails.poster_path ? `${baseImageUrl}${movieDetails.poster_path}` : ""} alt="" />
                <div className=" mt-6 mr-3">
                  <img className="w-[110px] " src={votes} alt="" />
                </div>
                <div className="absolute text-white top-80 flex flex-col justify-center items-center ">
                  <h1 className=" font-bold">StoryLine</h1>
                  <div className="w-[470px] lg:ml-10 mt-4">
                    <p>{movieDetails.overview}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white w-[391px] h-[0.8px] mt-12 absolute top-64 left-12 "></div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 min-h-screen w-full overflow-hidden">
        <img className="w-full h-full object-cover" src={movieDetails.poster_path ? `${baseImageUrl}${movieDetails.poster_path}` : ""} alt="" />
      </div>
    </div>
  );
};

export default Special;
