import React from "react";

const Pagination = () => {
  return (
    <div className="flex flex-row gap-x-6">
      <button class="  bg-[#262837] cursor-pointer text-white tracking-widest font-bold py-2 px-10 rounded-md">
        Prev
      </button>
      <button class=" bg-[#262837] cursor-pointer text-white font-bold py-2 px-10 tracking-widest rounded-md">
        Next
      </button>
    </div>
  );
};

export default Pagination;
