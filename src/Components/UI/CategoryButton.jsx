import React, { useState } from "react";

const CategoryButton = ({ onSelectCategory }) => {
  const [activeButton, setActiveButton] = useState("top_rated");

  const handleButtonClick = (category) => {
    setActiveButton(category);
    onSelectCategory(category);
  };

  return (
    <div className="mx-auto grid grid-cols-2 gap-0 justify-center md:grid-cols-3 lg:grid-cols-4 gap-y-3">
     <button
        className={`${
          activeButton === "top_rated"
            ? "bg-gradient-to-r from-[#1d3557] to-[#90394f]"
            : "bg-[#262837]"
        } cursor-pointer text-white tracking-widest font-bold py-2 w-[145px] h-[55px] rounded-md`}
        onClick={() => handleButtonClick("top_rated")}
      >
        Top Rated
      </button>
      <button
        className={`${
          activeButton === "upcoming"
            ? "bg-gradient-to-r from-[#1d3557] to-[#90394f]"
            : "bg-[#262837]"
        } cursor-pointer text-white tracking-widest font-bold py-2 w-[145px] h-[55px] rounded-md`}
        onClick={() => handleButtonClick("upcoming")}
      >
        UpComing
      </button>
      <button
        className={`${
          activeButton === "now_playing"
            ? "bg-gradient-to-r from-[#1d3557] to-[#90394f]"
            : "bg-[#262837]"
        } cursor-pointer text-white tracking-widest font-bold py-2 w-[145px] h-[55px] rounded-md`}
        onClick={() => handleButtonClick("now_playing")}
      >
        Now Playing
      </button>
      <button
        className={`${
          activeButton === "popular"
            ? "bg-gradient-to-r from-[#1d3557] to-[#90394f]"
            : "bg-[#262837]"
        } cursor-pointer text-white tracking-widest font-bold py-2 w-[145px] h-[55px] rounded-md`}
        onClick={() => handleButtonClick("popular")}
      >
        Popular
      </button>
     
     
    </div>
  );
};

export default CategoryButton;
