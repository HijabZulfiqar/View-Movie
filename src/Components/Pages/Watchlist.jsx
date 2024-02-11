import React, { useState, useEffect } from "react";
import { databases } from "../../appwrite/appwriteConfig";

const Watchlist = () => {
  const [watchList, setWatchList] = useState([]);
  useEffect(() => {
    const promise = databases.listDocuments(
      `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
      `${import.meta.env.VITE_APPWRITE_COLLECTION_ID}`
    );
    promise.then(
      function (response) {
       
        setWatchList(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);
  const handleDelete = async (id) => {
    let promise = databases.deleteDocument(
      `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
      `${import.meta.env.VITE_APPWRITE_COLLECTION_ID}`,
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
    <div className="w-screen h-screen overflow-auto bg-slate-900">
      <h1 className="justify-center mt-8 text-2xl text-center text-white font-Abyssinica lg:text-4xl">
        Your Watch List
      </h1>
      <div className="mx-auto mt-9 ">
        <div className="grid grid-cols-1 mx-auto gap-y-2 md:px-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {watchList.map((item) => (
            <div
              key={item.$id}
              className="w-80 h-28 mx-auto bg-[#232533] rounded-lg"
            >
              <div className="flex flex-col h-24 px-2 text-white rounded-b-lg font-Abyssinica lg:h-28">
                <div className="mt-2 text-lg text-center">
                  <h3>{item.title}</h3>
                </div>
                <div
                  onClick={() => handleDelete(item.$id)}
                  className="flex items-center justify-center mt-3 text-center"
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
