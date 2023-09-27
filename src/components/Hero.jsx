import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Get Anime Info <br className="max-md:hidden" />
        <span className="orange_gradient ">Animiz</span>
      </h1>
      <h2 className="desc">
        "Discover your favorite anime with the Anime Search API! Explore a vast
        collection of anime titles, genres, rankings, and more. Whether you're a
        fan of action, adventure, or supernatural themes, our API provides you
        with the power to search and retrieve detailed information about your
        favorite anime series.
      </h2>
    </header>
  );
};

export default Hero;
