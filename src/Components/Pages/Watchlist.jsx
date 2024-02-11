import React, { useState, useEffect } from "react";
import { databases } from "../../appwrite/appwriteConfig";


const Watchlist = () => {
  const [watchList, setWatchList] = useState([]);
console.log(import.meta.env.VITE_APPWRITE_DATABASE_ID)
  useEffect(() => {
    const promise = databases.listDocuments(
     
   
      // "65c752e2b5adfb82967f",
      // "65c759203efb0d67d1ab"
      // `65c752e2b5adfb82967f`,
      // `65c759203efb0d67d1ab`,

      `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
          `${import.meta.env.VITE_APPWRITE_COLLECTION_ID}`
     
    );
    promise.then(
      function (response) {
        console.log(response);
        setWatchList(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);
  const handleDelete = async (id) => {
     
    console.log(id);
    let promise = databases.deleteDocument(
      // "65c752e2b5adfb82967f",
      // "65c759203efb0d67d1ab",
      // `65c752e2b5adfb82967f`,
      // `65c759203efb0d67d1ab`,
      `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
      `${ import.meta.env.VITE_APPWRITE_COLLECTION_ID}`,
      id
    );
    promise.then(
      function (response) {
        console.log(response);
        const newWatchList = watchList.filter((item) => item.$id !== id);
        setWatchList(newWatchList);
      },
      function (error) {
        console.log(error);
      }
    );
  };
  return (
    <div className="bg-slate-900 h-screen w-screen overflow-auto">
      <h1 className="font-Abyssinica mt-8 justify-center text-center text-white text-2xl lg:text-4xl">
        Your Watch List
      </h1>
      <div className="mx-auto   mt-9 ">
        <div className="grid gap-y-2  grid-cols-1 md:px-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mx-auto">
          {watchList.map((item) => (
            <div
              key={item.$id}
              className="w-80 h-28 mx-auto bg-[#232533] rounded-lg"
            >
              <div className="flex flex-col font-Abyssinica text-white px-2 lg:h-28 h-24 rounded-b-lg">
                <div className="mt-2 text-center  text-lg">
                  <h3>{item.title}</h3>
                </div>
                <div
                  onClick={() => handleDelete(item.$id)}
                  className="flex justify-center items-center text-center mt-3"
                >
                  <div className="font-Abyssinica w-32 py-2 rounded-md bg-[#1b1d2c]">
                    <p>Remove</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
