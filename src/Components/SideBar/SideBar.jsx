import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import logo from "../../assets/brand_logo.png";
import { NavLink, useLocation } from "react-router-dom"; 
import { account } from "../../appwrite/appwriteConfig";
import { SidebarData } from "../Constants/Navigation";

const SideBar = () => {
  const location = useLocation(); 

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [suggestionsClicked, setSuggestionsClicked] = useState(false);
  const [userdetail, setUserDetail] = useState(null);

  const handleSuggestionsClick = () => {
    if (!suggestionsClicked) {
      setSuggestionsClicked(true);
    }
  };

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

   
    const sessionTimeout = setTimeout(() => {
      SessionExpire();
    }, 3600000); 

   
    return () => clearTimeout(sessionTimeout);
  }, []);

  const SessionExpire = async function () {
    
      await account.deleteSession("current");
      
      navigate("/");
   
  };

  return (
    <div className=" ">
      <Disclosure>
        <Disclosure.Button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute lg:hidden top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-white hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"
        >
          <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
        </Disclosure.Button>
        {isSidebarOpen && (
          <div
            className={`pl-5 h-screen bg-[#232533] font-Abyssinica z-20 md:z-0 fixed lg:relative top-0 -left-96 lg:left-0 w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200`}
          >
            <div className="flex flex-col justify-start item-center">
              <div className="text-base text-center cursor-pointer font-bold  text-white pt-8 pb-4 w-full">
                <img src={logo} alt="logo" />
              </div>
              <div className="my-4 mt-5 pb-4">
                {SidebarData.map((item) => (
                  item.path === "/suggestions" && !userdetail ? (
                    <NavLink
                      key={item.key}
                      to={!suggestionsClicked ? "/signup" : item.path}
                      onClick={handleSuggestionsClick}
                      className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-r-md group cursor-pointer m-auto ${
                        location.pathname === item.path
                          ? "bg-gray-900 text-white"
                          : "text-[#9498BB]"
                      }`}
                    >
                      {item.icon}
                      <h3 className="text-base font-semibold">{item.label}</h3>
                    </NavLink>
                  ) : (
                    <NavLink
                      key={item.key}
                      to={item.path}
                      className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-r-md group cursor-pointer m-auto ${
                        location.pathname === item.path
                          ? "bg-gray-900 text-white"
                          : "text-[#9498BB]"
                      }`}
                    >
                      {item.icon}
                      <h3 className="text-base font-semibold">{item.label}</h3>
                    </NavLink>
                  )
                ))}
              </div>
            </div>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default SideBar;
