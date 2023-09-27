import React, { useState, useEffect } from "react";

import { linkIcon, loader } from "../assets";
import { useLazyGetAnimeQuery } from "../services/anime";

const Demo = () => {
  const [query, setQuery] = useState({
    url: "",
    data: [],
  });
  const [getAnime, { error, isFetching }] = useLazyGetAnimeQuery();

  const handleSearch = async (e) => {
    e.preventDefault();

    const animeData = await getAnime({ searchUrl: query.url });
    if (animeData?.data) {
      //console.log(animeData.data.data);
      const newAnime = { ...query, data: animeData.data.data };
      setQuery(newAnime);
      //console.log("newAnime:", newAnime);
    }
    console.log(query.data);
  };

  return (
    <section className="mt-16 w-full flex flex-col items-center ">
      {/* Search */}
      <div className="flex flex-col w-1/2 gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSearch}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="text"
            placeholder="Enter anime name"
            value={query.url}
            onChange={(e) =>
              setQuery({
                ...query,
                url: e.target.value,
              })
            }
            required
            className="url_input peer" // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            <p>↵</p>
          </button>
        </form>
      </div>

      <div className="my-10 max-w-full flex justify-center items-center ">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Well, that wasn't supposed to happen...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          query.data && (
            <div className="flex flex-wrap justify-evenly px-4 py-1">
              {query.data.map((anime) => (
                <div key={anime._id} className="anime-card w-[250px]">
                  <img src={anime.image} alt="" />
                  <h2>{anime.title}</h2>
                  <p>Genres: {anime.genres.join(", ")}</p>
                  <p>Episodes: {anime.episodes}</p>
                  <p>Status: {anime.status}</p>
                  <div>
                    <p>Synopsis:</p>
                    <span>{anime.synopsis}</span>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
