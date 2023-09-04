import React, { useState, useEffect } from "react";
import Card from "./Card";
const Manga = () => {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    fetch("/src/assets/json/mangas.json")
      .then((response) => response.json())
      .then((data) => setMangas(data.mangas))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      name="manga"
      className=" flex flex-col m-4 gap-4 font-roboto md:grid md:grid-cols-4 lg:grid-cols-5"
    >
      {mangas.map((manga, index) => (
        <Card
          key={index}
          type="manga"
          id={manga.id}
          title={manga.title}
          genre={manga.genre}
          image={manga.image}
          volume={manga.volume}
          price={manga.price}
        />
      ))}
    </div>
  );
};

export default Manga;
