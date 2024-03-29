import React, { useState } from "react";
import backdropPath from "../../assets/netflix-background.jpg";
import { Link, useNavigate } from "react-router-dom";
import { account, databases } from "../../appwrite/appwriteConfig";
import { v4 as uuidv4 } from "uuid";

const SignupForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signup = async (e) => {
    e.preventDefault();
    try {
      const newUser = await account.create(uuidv4(), user.email, user.password, user.name);
      console.log(newUser);
      if (newUser) {
        try {
          await databases.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
            uuidv4(),
            {
              email: user.email,
            }
          );
          navigate("/login");
        } catch (dbError) {
          console.error("Error adding user to database:", dbError);
        }
      }
    } catch (error) {
      console.error(error); // Failure
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
            <label>Username</label>
            <input
              className="border text-black rounded relative bg-gray-100 p-2"
              type="text"
              name="name"
              required
              id="name"
              autoComplete="name"
              onChange={(e) => {
                setUser({
                  ...user,
                  name: e.target.value,
                });
              }}
            />
          </div>
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
          <button onClick={signup} className="w-full py-3 mt-8 bg-[#262837] relative text-white">
            Sign Up
          </button>

          <p className="text-center mt-8">
            Already a member?{" "}
            <Link to="/login">
              <button className="cursor-pointer relative border-b-2">
                Log in now
              </button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
