import React, { useState } from 'react';
import Button from '../UI/Button';
import SearchBar from '../UI/SearchBar';
import banner_img from '../../assets/banner_img.png';
import DropDown from '../UI/DropDown';
import CardSection from '../UI/CardSection';
import Pagination from '../UI/Pagination';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (search) => {
    console.log(`Search query: ${search}`);
    setSearchQuery(search);
  };

  return (
    <div className='w-full p-8 lg:p-10 lg:mt-0 mt-6 mx-auto'>
      <div className=''>
        <img className="rounded-lg min-w-full" src={banner_img} alt="banner img" />
      </div>
      <div className='flex flex-col gap-y-3 lg:flex-row lg:justify-between mt-5 gap-14 lg:gap-0'>
        <SearchBar onSearch={handleSearch} />
        <Button />
      </div>
      <div className='flex flex-inline  mt-5 lg: justify-between '>
        <h1 className=' font-Abyssinica text-white text-2xl lg:text-4xl '>Discover</h1>
        <DropDown />
      </div>
      <CardSection searchQuery={searchQuery} />
      <div className='flex flex-col items-center md:flex-row justify-center mx-auto'>
        <Pagination/>
      </div>
    </div>
  );
};

export default Home;
