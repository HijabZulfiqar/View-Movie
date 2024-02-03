import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to="/cardId">
      <div className="mt-2 w-52 min-h-96 p-0 bg-slate-50 flex flex-col rounded-lg">
        <img
          className=" rounded-t-lg min-h-72 w-full"
          src="./assests/pussinboots.png"
          alt=""
          srcset=""
        />

        <div className="flex flex-col px-2 h-16">
          <div className=" mt-2">
            <h3>Thor: Love And Thunder</h3>
          </div>
          <div className=" flex flex-row gap-3 mt-3">
            <div className="inline-flex ">
              <img className="mt-1" src="./assests/eye.png" alt="" srcset="" />
              <p>1.2k popularity</p>
            </div>
            <div className="inline-flex ">
              <img
                className="mt-1"
                src="./assests/watchlist_icon.png"
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
