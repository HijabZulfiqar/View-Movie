import React, { useState } from "react";

const Pagination = ({ onPageChange }) => {
  const [page, setPage] = useState(1);

  function handlePage(count) {
    const newPage = Math.max(page + count, 1); 
    setPage(newPage);
    onPageChange(newPage);
     console.log(newPage)
  }

  return (
    <div className="flex flex-row gap-x-6">
      <button
        onClick={() => {
          handlePage(-1);
        }}
        className={`bg-[#262837] cursor-pointer text-white tracking-widest font-bold py-2 px-10 rounded-md ${page <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={page <= 1}
      >
        Prev
      </button>
      <button
        onClick={() => {
          handlePage(1);
        }}
        className="bg-[#262837] cursor-pointer text-white font-bold py-2 px-10 tracking-widest rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
