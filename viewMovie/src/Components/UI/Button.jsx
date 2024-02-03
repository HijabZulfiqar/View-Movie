import React from "react";

const Button = () => {
  return (
    <div>
      <button className="inline-flex items-center gap-2 w-32 px-4 py-2 rounded-md  bg-[#262837]">
        <img className="mt-1" src="./assests/watchlist.png" />
        <span> Watch list</span>
      </button>
    </div>
  );
};

export default Button;
