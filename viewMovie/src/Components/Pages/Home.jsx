import React from 'react'
import Button from '../UI/Button'
import SearchBar from '../UI/SearchBar'
import Card from '../UI/Card'
import banner_img from '../../assets/banner_img.png'
import DropDown from '../UI/DropDown'
import CardSection from '../UI/CardSection'
// import CardDemo from './CardDemo'

const Home = () => {
 return(
<div className='w-full p-8 lg:p-10 lg:mt-0 mt-6'>
    <div className=''>
    <img
            className="rounded-lg min-w-full"
            src={banner_img}
            alt="banner img"
          />
    </div>
    <div className='flex flex-col gap-y-3 lg:flex-row lg:justify-between mt-5 gap-14 lg:gap-0'>
           <SearchBar/>
           <Button/>
          </div>
          <div className='flex flex-inline  mt-5 lg: justify-between '>
            <h1 className=' font-Abyssinica text-white text-2xl lg:text-4xl '>Discover</h1>
            <DropDown/>
          </div>
          <CardSection/>

</div>
 );
}

export default Home
