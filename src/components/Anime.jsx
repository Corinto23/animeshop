import React, { useState, useEffect } from "react";
import Card from "./Card";
const Anime = () => {
  const [anime, setanime] = useState([]);

  useEffect(() => {
    fetch("/src/json/anime.json")
      .then((response) => response.json())
      .then((data) => setanime(data.anime))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      name="anime"
      className="flex flex-col m-4 gap-4 bg-whitesmoke font-roboto md:grid md:grid-cols-4 lg:grid-cols-5"
    >
      {anime.map((anime, index) => (
        <Card
          key={index}
          type="anime"
          id={anime.id}
          title={anime.title}
          genre={anime.genre}
          image={anime.image}
          episodes={anime.episodes}
          price={anime.price}
        />
      ))}
    </div>
  );
};

export default Anime;
