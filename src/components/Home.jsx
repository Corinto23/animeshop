import React from "react";
import Manga from "./Manga";
import Merchandise from "./Merchandise";
import Anime from "./Anime";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";

const Home = () => {
  return (
    <div name="home" className="">
      <Hero />
      <div className="container grid gap-4 p-4 ">
        <div className="mt-2 bg-color60 rounded">
          <div className="flex justify-between items-center px-4 mt-4 text-2xl font-roboto font-bold">
            <h2 className="">Manga</h2>
            <NavLink to="/manga">
              <button className="border-solid border-2 rounded text-color10 border-color10 p-1">
                View More
              </button>
            </NavLink>
          </div>
          <div>
            <Manga />
          </div>
        </div>
        <div className="mt-2 bg-color60 rounded">
          <div className="flex justify-between items-center px-4 mt-4 text-2xl font-roboto font-bold">
            <h2 className="">Anime</h2>
            <NavLink to="/anime">
              <button className="border-solid border-2 rounded text-color10 border-color10 p-1">
                View More
              </button>
            </NavLink>
          </div>
          <div>
            <Anime />
          </div>
        </div>
        <div className="mt-2 bg-color60 rounded">
          <div className="flex justify-between items-center px-4 mt-4 text-2xl font-roboto font-bold">
            <h2 className="">Merchandise</h2>
            <NavLink to="/merchandise">
              <button className="border-solid border-2 rounded text-color10 border-color10 p-1">
                View More
              </button>
            </NavLink>
          </div>
          <div>
            <Merchandise />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
