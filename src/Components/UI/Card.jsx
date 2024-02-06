import React from "react";
import { Link } from "react-router-dom";
import eye from "../../assets/eye.png";
import watchlist from "../../assets/watchlist_icon.png";
import { motion } from "framer-motion";


const Card = ({ id, title, popularity, poster_path }) => {
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
                className="rounded-t-lg min-h-72 w-full object-cover"
                src={poster_path ? `${baseImageUrl}${poster_path}` : ""}
                alt={title}
              />
            </Link>

            <div className="flex flex-col bg-slate-50 px-2 lg:h-28 h-24 rounded-b-lg">
              <div className="mt-2  inline-flex">
                <h3>{title}</h3>
              </div>
              <div className="flex flex-row gap-x-1 lg:gap-x-5 mt-3">
                <div className="inline-flex">
                  <img className="mt-1" src={eye} alt="" />
                  <p>{popularity} popularity</p>
                </div>
                <div className="inline-flex">
                  <img className="mt-1" src={watchlist} alt="" />
                  <p>Add</p>
                </div>
              </div>
            </div>
          </div>
       
      </motion.div>
    </section>
  );
};

export default Card;
