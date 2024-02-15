import React, { useState } from "react";
import backdropPath from "../../assets/netflix-background.jpg";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../../appwrite/appwriteConfig";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative w-full mx-auto h-screen ">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={backdropPath}
        alt="Background"
      />
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] text-white font-Abyssinica w-full mx-auto bg-slate-900  p-8">
          <h2 className="text-4xl font-bold text-center py-4">Register Here</h2>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input
              className="border text-black rounded relative bg-gray-100 p-2"
              type="email"
              name="email"
              required
              id="email"
              autoComplete="email"
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex flex-col ">
            <label>Password</label>
            <input
              className="border text-black  rounded relative bg-gray-100 p-2"
              type="password"
              required
              id="password"
              name="password"
              autoComplete="current-password"
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <button
            onClick={loginUser}
            className="w-full py-3 mt-8 bg-[#262837] relative text-white"
          >
            Log In
          </button>
         
          <p className="text-center mt-8">
            Not a member?{" "}
            <Link to="/signup">
              <button className="cursor-pointer relative border-b-2">
                Sign up now
              </button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
