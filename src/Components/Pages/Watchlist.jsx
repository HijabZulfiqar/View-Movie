import React, { useState, useEffect } from "react";
import { databases } from "../../appwrite/appwriteConfig";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Watchlist = () => {
  const [watchList, setWatchList] = useState([]);
  const queryClient = useQueryClient();

  const fetchWatchList = async () => {
    const response = await databases.listDocuments(
      `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
      `${import.meta.env.VITE_APPWRITE_COLLECTION_ID}`
    );
    return response.documents;
  };

  useEffect(() => {
    fetchWatchList().then((documents) => {
      setWatchList(documents);
    });
  }, []);

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await databases.deleteDocument(
        `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
        `${import.meta.env.VITE_APPWRITE_COLLECTION_ID}`,
        id
      );
      return id;
    },
    onSuccess: (id) => {
      setWatchList((prev) => prev.filter((item) => item.$id !== id));
    },
  });

  const addMutation = useMutation({
    mutationFn: async (movie) => {
      const response = await databases.createDocument(
        `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
        `${import.meta.env.VITE_APPWRITE_COLLECTION_ID}`,
        movie
      );
      return response;
    },
    onSuccess: (newMovie) => {
      setWatchList((prev) => [...prev, newMovie]);
    },
  });

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  const addMovieToWatchlist = (movie) => {
    const movieExists = watchList.some((item) => item.title === movie.title);
    if (!movieExists) {
      addMutation.mutate(movie);
    }
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
                  <div className="font-Abyssinica cursor-pointer w-32 py-2 rounded-md bg-[#1b1d2c]">
                    <p>Remove</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {deleteMutation.isLoading && <p className="text-center text-white mt-5">Loading...</p>}
      <Link to="/">
        <button
          className="flex justify-center items-center text-center mt-5 mx-auto bg-[#262837] cursor-pointer text-white font-bold py-2 px-10 tracking-widest rounded-md"
        >
          Back to home page
        </button>
      </Link>
    </div>
  );
};

export default Watchlist;
