import React from "react";
import icon from "../../assets/watchlist.png";
const Button = () => {
  return (
    <div>
      <button className="inline-flex items-center gap-2 w-32 px-4 py-2  rounded-md  bg-[#262837]">
        <img className="mt-1" src={icon} />
        <span> Watch list</span>
      </button>
    </div>
  );
};

export default Button;
