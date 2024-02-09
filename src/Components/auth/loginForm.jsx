import React, { useState, useEffect } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  // const navigate = useNavigate();

  // function handleClick() {
  //   navigate("/signup");
  //    console.log('The link was clicked.')
  // }
  const { data: movies } = useQuery({
    queryKey: ["movies", 40],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=4d9b181699814fa8a588a90332a200ab&page=40`
      );
      const data = await response.json();
      return data.results;
    },
    placeholderData: keepPreviousData,
  });

  const [currentBackdropIndex, setCurrentBackdropIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackdropIndex((prevIndex) => (prevIndex + 1) % (movies ? movies.length : 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [movies]);

  const backdropPath = movies ? `https://image.tmdb.org/t/p/original${movies[currentBackdropIndex].backdrop_path}` : null;

  return (
    <div className='relative w-full mx-auto h-screen '>
      {backdropPath && <img className='absolute w-full h-full object-cover mix-blend-overlay' src={backdropPath} alt="Background" />}
      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] text-white font-Abyssinica w-full mx-auto bg-slate-900  p-8'>
          <h2 className='text-4xl font-bold text-center py-4'>Register Here </h2>
          <div className='flex flex-col mb-4'>
            <label>Username</label>
            <input className='border text-black rounded relative bg-gray-100 p-2' type="text" />
          </div>
          <div className='flex flex-col '>
            <label>Password</label>
            <input className='border text-black  rounded relative bg-gray-100 p-2' type="password" />
          </div>
          <button className='w-full py-3 mt-8 bg-[#262837] relative text-white'>Sign In</button>
          <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
          <p className='text-center mt-8'>Not a member? <Link to="/signup"  ><span className=' border-b-2' >Sign up now</span></Link></p>
          {/* <p className='text-center mt-8'>Not a member? <span  onClick={handleClick}  className=' border-b-2' >Sign up now</span></p>  */}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
