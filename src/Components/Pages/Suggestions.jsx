import React, { useState } from 'react';
import SuggestionButton from '../UI/SuggestionButton';
import { categoryTypes } from '../Constants/CategoryTypes';
import { GoogleGenerativeAI } from "@google/generative-ai";
import CardSection from '../UI/CardSection';

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
        alert("Please enter text or select a category!");
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
  
      // Extract just the movie name from the response
      let movieName = text.split('\n')[0].trim(); // Assuming the first line contains the movie name
  
      // Remove any asterisks and the year from the movie name
      movieName = movieName.replace(/\*/g, '').trim(); // Remove asterisks
      movieName = movieName.replace(/\(\d{4}\)/, '').trim(); // Remove the year in parentheses
  
      setData([movieName]);
      console.log("Updated Data State:", [movieName]);
    } catch (error) {
      setLoading(false);
      console.error("fetchDataFromGeminiAPI error: ", error);
    }
  }

  return (
    <>
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
          className=' w-3/4 h-14  p-4 text-black bg-[#747474] rounded-md ' 
          placeholder='Type your suggestions here...'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button 
          className="inline-flex items-center justify-center text-center font-Abyssinica gap-2 w-3/4  px-4 py-2 rounded-md bg-[#262837]"
          onClick={fetchDataFromGeminiProAPI}
          disabled={loading}
        >
          {loading ? "Loading..." : "Curate My List"}
        </button>
        <CardSection suggestedMovies={data} />
      </div>
    </>
  );
};

export default Suggestions;
