import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const AnimeDetails = ({ anime }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div
      key={anime._id}
      className=" flex flex-col w-[350px] h-fit summary_box "
    >
      <div>
        <img
          src={anime.image}
          alt=""
          className="max-w-[100%] max-h-[40%] mx-auto w-auto "
        />
      </div>
      <div className="px-4 pt-4 flex flex-col gap-y-[2px]">
        <h2 className="font-satoshi font-bold text-gray-600 text-[20px]">
          {anime.title}
        </h2>
        <p className="font-satoshi font-medium  text-[20px]">
          Genres:{" "}
          <span className="font-medium  text-[18px]">
            {anime.genres.join(", ")}
          </span>
        </p>
        <p className="font-satoshi font-medium text-[20px]">
          Episodes:
          <span className="font-medium  text-[18px]">{anime.episodes}</span>
        </p>
        <p className="font-satoshi font-medium text-[20px]">
          Status: &nbsp;
          <span className="font-medium  text-[18px]">{anime.status}</span>
        </p>
      </div>
      <div className="flex justify-between items-center gap-2 px-4 ">
        <p className="font-satoshi font-medium  text-[20px]">Synopsis:</p>
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="btn text-gray-600"
        >
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div className="mt-1">
        {showAnswer && (
          <div className="overflow-y-scroll h-[150px] px-4 pb-4 pt-1">
            <span className="desc">{anime.synopsis}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimeDetails;
