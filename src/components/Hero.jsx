import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center grid grid-cols-2 items-center brightness-75"
      style={{
        backgroundImage: 'url("https://wallpapercave.com/dwp1x/wp4547724.jpg")',
      }}
    >
      <div></div>
      <div className="h-96 border-l-4 border-color60  flex items-center">
        <p className="text-xl md:text-5xl font-montserrat p-3 ">
          Bring Your Favorite Anime and Manga to Life
        </p>
      </div>
      <div className="w-screen py-4 pr-8 pl-4">
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
