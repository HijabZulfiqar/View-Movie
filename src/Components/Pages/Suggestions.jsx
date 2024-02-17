import React, { useState } from 'react';
import SuggestionButton from '../UI/SuggestionButton';
import { categoryTypes } from '../Constants/CategoryTypes';
import { GoogleGenerativeAI } from "@google/generative-ai";
import CardSection from '../UI/CardSection';
import { toast } from 'react-toastify';
const Suggestions = () => {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [inputText, setInputText] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSelection = (category) => {
    const isSelected = selectedCategories.includes(category);
    const newSelectedCategories = isSelected
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);
  };

  async function fetchDataFromGeminiProAPI() {
    try {
      if (!inputText && selectedCategories.length === 0) {
        toast.info("Please enter text or select a category!");
        return;
      }
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
      const promptText = selectedCategories.join(', ') + (inputText ? ' ' + inputText : '');
      const moviePrompt = `Recommend one top-rated movie related to: ${promptText}`;
  
      const result = await model.generateContent(moviePrompt);
      const text = await result.response.text();
      setLoading(false);
  
      let movieName = text.split('\n')[0].trim(); 
      movieName = movieName.replace(/\*/g, '').trim(); // Remove asterisks
      movieName = movieName.replace(/\(\d{4}\)/, '').trim(); // Remove the year in parentheses
  
      setData([movieName]);
      setSelectedCategories([]); // Clear selected categories
    } catch (error) {
      setLoading(false);
      console.error("fetchDataFromGeminiAPI error: ", error);
    }
}


  return (
    <>
    <h5 className='  w-full p-8  mx-auto font-acme justify-center items-center text-center lg:text-start  md:justify-normal mt-5 md:mt-3 tracking-widest text-white text-base md:text-md  '>Select all categories that you want the movie to include.</h5>
      <div className='w-full scroll-smooth justify-center items-center gap-2 md:gap-3 gap-y-2 p-8 lg:px-10 lg:mt-0 mt-6 mx-auto grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9'>
        {categoryTypes.map((category) => (
          <SuggestionButton
            key={category}
            text={category}
            selected={selectedCategories.includes(category)}
            onClick={() => handleSelection(category)}
          />
        ))}
      </div>
      <div className='flex  flex-col items-center gap-4  mx-auto'>
        <textarea 
          className=' w-3/4 md:h-14 h-16  p-4 text-black bg-[#747474] rounded-md ' 
          placeholder="Write any other specifications here. Be as picky as you'd like...."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button 
          className="inline-flex items-center text-[#a6aad0] justify-center text-center font-Abyssinica gap-2 w-3/4  px-4 py-2 rounded-md bg-[#262837]"
          onClick={fetchDataFromGeminiProAPI}
          disabled={loading}
        >
          {loading ? "Loading..." : "Discover Suggestions"}
        </button>
       
      </div>
     <div className=' w-full p-8 lg:px-10 lg:mt-0 mt-6 mx-auto'>
      <h1 className=' font-acme justify-center items-center text-center lg:text-start  md:justify-normal mt-8 tracking-widest text-white text-3xl lg:text-5xl '>Suggestions</h1>
     <CardSection suggestedMovies={data} />
     </div>
    </>
  );
};

export default Suggestions;
