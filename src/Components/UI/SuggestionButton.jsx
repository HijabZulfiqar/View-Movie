import React from 'react';

const SuggestionButton = ({ text, selected, onClick }) => {
  return (
    <button
      className={`flex text-center items-center justify-center font-Abyssinica min-w-min py-[6px]  rounded-md whitespace-nowrap hover:border  hover:border-[#1d3557]  ${
        selected ? 'bg-gradient-to-r from-[#1d3557] to-[#90394f]' : 'bg-[#262837]'
      }`}
      onClick={onClick}
    >
      <span className="text-[#a6aad0]">{text}</span>
    </button>
  );
};

export default SuggestionButton;
