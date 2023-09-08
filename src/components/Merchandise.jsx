import React, { useState, useEffect } from "react";
import Card from "./Card";
const Merchandise = () => {
  const [merchandise, setMerchandise] = useState([]);

  useEffect(() => {
    fetch("/src/json/merchandise.json")
      .then((response) => response.json())
      .then((data) => setMerchandise(data.merchandise))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      name="merchandise"
      className="flex flex-col m-4 gap-4 font-roboto md:grid md:grid-cols-4 lg:grid-cols-5"
    >
      {merchandise.map((merchandise, index) => (
        <Card
          key={index}
          type="merchandise"
          id={merchandise.id}
          title={merchandise.title}
          image={merchandise.image}
          rating={merchandise.rating}
          product={merchandise.product}
          price={merchandise.price}
        />
      ))}
    </div>
  );
};

export default Merchandise;
