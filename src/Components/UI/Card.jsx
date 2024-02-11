import React, { useState } from "react";
import { Link } from "react-router-dom";
import eye from "../../assets/eye.png";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

import { databases } from "../../appwrite/appwriteConfig";
import watchlist from "../../assets/watchlist_icon.png";
const Card = ({ id, title, popularity, poster_path }) => {
  const [cardData, setCardData] = useState({
    title: title,
  });

  const handleWatchList = async (e) => {
    e.preventDefault();
    const promise = databases.createDocument(
      `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
      `${import.meta.env.VITE_APPWRITE_COLLECTION_ID}`,
      uuidv4(),
      {
        title: title,
      }
    );
    

    
  };

  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <section>
      <motion.div
        whileHover={{ scale: 1.06 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="mt-2 w-64 mx-auto lg:w-64 min-h-[390px] p-0 flex flex-col rounded-lg">
          <Link to={`/movies/${id}`}>
            <img
              className="object-cover w-full rounded-t-lg min-h-72"
              src={poster_path ? `${baseImageUrl}${poster_path}` : ""}
              alt={title}
            />
          </Link>

          <div className="flex flex-col font-Abyssinica text-white bg-[#101118] px-2 lg:h-28 h-24 rounded-b-lg">
            <div className="inline-flex mt-2">
              <h3>{title}</h3>
            </div>
            <div className="flex flex-row mt-3 gap-x-1 lg:gap-x-5">
              <div className="inline-flex">
                <img className="mt-1" src={eye} alt="" />
                <p>{popularity} popularity</p>
              </div>
              <div
                onClick={handleWatchList}
                className="inline-flex cursor-pointer"
              >
                <img className="mt-1" src={watchlist} alt="" />
                <p>Add</p>
              </div>
              {/* <AddButton  onClick={handleWatchList}   /> */}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Card;
