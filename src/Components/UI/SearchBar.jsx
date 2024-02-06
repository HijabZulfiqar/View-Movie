import React, { useState } from "react";
import searchIcon from "../../assets/Search.png";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="flex items-center gap-8 border py-2 px-8  outline-none border-none  rounded-md   bg-[#262837] max-w-lg lg:w-[40rem]">
      <input
        type="text"
        className="w-full border-none outline-none text-white text-lg text-gray-70  bg-transparent cursor-pointer   select-none"
        placeholder="Search here"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <img src={searchIcon} alt="Search" onClick={() => { handleSearchClick(); clearSearch(); }} />
    </div>
  );
};

export default SearchBar;
