import React from 'react';

const SuggestionButton = ({ text }) => {
  return (
    <button className="flex text-center items-center justify-center font-Abyssinica min-w-min py-[6px] rounded-md bg-[#262837] whitespace-nowrap">
      <span className="text-[#a6aad0]">{text}</span>
    </button>
  );
};

export default SuggestionButton;
