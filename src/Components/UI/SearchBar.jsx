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

  

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className="flex items-center gap-8 border py-2 px-8 outline-none border-none rounded-md bg-[#262837] max-w-lg lg:w-[40rem]">
      <input
        type="text"
        className="w-full border-none tracking-wider outline-none font-Abyssinica text-lg text-[#a6aad0] bg-transparent cursor-pointer select-none"
        placeholder="Search here..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <img className=" cursor-pointer" src={searchIcon} alt="Search" onClick={handleSearchClick} />
    </div>
  );
};

export default SearchBar;
