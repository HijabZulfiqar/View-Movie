import React from "react";
import { Link } from "react-router-dom";
import cardImage from "../../assets/pussinboots.png"
import watchlist from "../../assets/watchlist_icon.png"
import eye from "../../assets/eye.png"
const Card = () => {
  return (
    <Link to="/cardId">
      <div className="mt-2 w-52 md:w-60 lg:w-64  min-h-[390px] p-0  flex flex-col rounded-lg">
        <img
          className=" rounded-t-lg min-h-72 w-full"
          src={cardImage}
          alt=""
          srcset=""
        />

        <div className="flex flex-col bg-slate-50 px-2 lg:h-20 h-24 rounded-b-lg">
          <div className=" mt-2">
            <h3>Thor: Love And Thunder</h3>
          </div>
          <div className=" flex flex-row  gap-x-1 lg:gap-x-5 mt-3">
            <div className="inline-flex ">
              <img className="mt-1" src={eye} alt="" srcset="" />
              <p>1.2k popularity</p>
            </div>
            <div className="inline-flex ">
              <img
                className="mt-1"
                src={watchlist}
                alt=""
                srcset=""
              />
              <p>Add</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
