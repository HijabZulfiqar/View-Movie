import React, { useState } from "react";

const SearchBar = () => {
  return (
    <div className="flex  bg-[#262837] rounded-lg w-1/2 p-2 ">
      <input
        type="text"
        className="flex-grow border-none outline-none bg-transparent text-lg px-2"
        placeholder="Search here..."
      />
      <button
        type="submit"
        className="border-none outline-none bg-transparent mr-3 cursor-pointer text-lg text-gray-700"
      >
        <img src="./assests/Search.png" alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
