import React, { useState, useEffect } from "react";
import icon from "../../assets/watchlist.png";
import { Link } from "react-router-dom";
import { account } from "../../appwrite/appwriteConfig";
const Button = () => {
  const [userdetail, setUserDetail] = useState(null);

  useEffect(() => {
    const promise = account.get();

    promise.then(
      function (response) {
       
        setUserDetail(response);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  }, []);

  return (
    <div>
      {userdetail ? (
        <Link to="/watchlist">
          <button className="inline-flex items-center font-Abyssinica gap-2 w-32 px-4 py-2 rounded-md bg-[#262837]">
            <img className="mt-1" src={icon} alt="watchlist icon" />
            <span className="text-[#a6aad0] mt-1">Watch list</span>
          </button>
        </Link>
      ) : (
        <Link to="/signup">
         <button className="inline-flex items-center font-Abyssinica gap-2 w-32 px-4 py-2 rounded-md bg-[#262837]">
            <img className="mt-1" src={icon} alt="watchlist icon" />
            <span className="text-[#a6aad0] mt-1">Watch list</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Button;
