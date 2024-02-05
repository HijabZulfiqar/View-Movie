import React, { useState } from "react";

import close from "../../assets/Close.png";
import frozen from "../../assets/Frozen.png";
import votes from "../../assets/Votes.png";
const Special = () => {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="h-screen z-10 relative">
      <button
        className="absolute z-50 top-12 right-20 cursor-pointer"
        onClick={toggleContent}
      >
        <img src={close} alt="Toggle Button" />
      </button>

      {isContentVisible && (
        <div className="h-screen z-10 relative ">
          <div className="absolute inset-0 min-h-screen w-full overflow-hidden">
            <img
              className="w-full h-full object-cover "
              src={frozen}
              alt=""
            />
          </div>

          <div
            className="z-50 w-[535px] h-screen relative flex "
            style={{ backdropFilter: "blur(8px)", marginLeft: "auto" }}
          >
            <div className="flex flex-col absolute top-12 left-[180px] ">
              <div className=" flex flex-col justify-center items-center">
                <img
                  className="w-[153px] mt-5 "
                  src={frozen}
                  alt=""
                />
                <div className=" mt-6 mr-3">
                  <img
                    className="w-[110px] "
                    src={votes}
                    alt=""
                  />
                </div>
                <div className="absolute text-white  top-80  flex flex-col justify-center items-center ">
                  <h1 className=" font-bold">StoryLine</h1>
                  <div className="w-[470px] lg:ml-10 mt-4">
                    <p>
                      Frozen tells the story of Princess Anna as she teams up
                      with an iceman, his reindeer, and a snowman to find her
                      estranged sister Elsa, whose icy powers have inadvertently
                      trapped their kingdom in eternal winter. Frozen underwent
                      several story treatments before being commissioned in 2011
                      as a screenplay by Lee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white w-[391px] h-[0.8px] mt-12 absolute top-64 left-12 "></div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 min-h-screen w-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={frozen}
          alt=""
        />
      </div>
    </div>
  );
};

export default Special;
