import React from 'react';
import backdropPath from '../../assets/netflix-background.jpg';
import { Link } from 'react-router-dom';

const LoginForm = () => {


  
  return (
    <div className='relative w-full mx-auto h-screen '>
       <img className='absolute w-full h-full object-cover mix-blend-overlay' src={backdropPath} alt="Background" />
      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] text-white font-Abyssinica w-full mx-auto bg-slate-900  p-8'>
          <h2 className='text-4xl font-bold text-center py-4'>Register Here</h2>
          <div className='flex flex-col mb-4'>
            <label>Username</label>
            <input className='border text-black rounded relative bg-gray-100 p-2' type="text" />
          </div>
          <div className='flex flex-col '>
            <label>Password</label>
            <input className='border text-black  rounded relative bg-gray-100 p-2' type="password" />
          </div>
          <button className='w-full py-3 mt-8 bg-[#262837] relative text-white'>Sign In</button>
          <p className='flex items-center mt-2'><input className='mr-2 relative ' type="checkbox"  />Remember Me</p>
          <p className='text-center mt-8'>Not a member? <Link to="/signup"  ><button className='cursor-pointer relative border-b-2' >Sign up now</button></Link></p>
       
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
