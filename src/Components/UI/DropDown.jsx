import React, { useState } from "react";
import dropdown from "../../assets/dropdown.png";
import dd from "../../assets/dd.png";
import { useQuery } from "@tanstack/react-query";

const DropDown = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const data = await response.json();
        return data.genres;
      } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
      }
    },
  });

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="relative cursor-pointer">
        <div
          className="flex items-center gap-5 px-4 py-2 max-w-[14.9rem] lg:max-w-none"
          onClick={() => setMenuOpen((prevState) => !prevState)}
        >
          <img className="w-3 h-3" src={dropdown} alt="" />
          <p className="text-lg text-white select-none">
            {selectedCategory ? selectedCategory.name : "Movies"}
          </p>
          <img className="w-3 h-3" src={dd} alt="" />
        </div>
        {menuOpen && (
          <ul
            className="flex flex-col overflow-auto mt-2 gap-3 text-gray-800 border px-[2rem] py-2 drop-shadow-md mr-[10px] rounded-md border-gray-100 bg-white max-h-40 lg:max-h-[10rem] lg:overflow-auto absolute z-20"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            {isLoading ? (
              <li>Loading...</li>
            ) : isError ? (
              <li>Error loading categories</li>
            ) : (
              categories.map((category) => (
                <li
                  key={category.id}
                  className="transition-all cursor-pointer select-none hover:text-gray-600"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category.name}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default DropDown;
