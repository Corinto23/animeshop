import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeartCirclePlus,
  faMoneyBill1,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CartContext";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const Card = ({
  id,
  type,
  title,
  genre,
  image,
  price,
  episodes,
  volume,
  product,
  rating,
}) => {
  const { addToCart } = useContext(CartContext);

  const renderStarIcons = () => {
    const stars = [];
    const maxStars = 5; // Define the maximum number of stars
    const roundedRating = Math.round(rating); // Round the rating to the nearest whole number

    for (let i = 1; i <= maxStars; i++) {
      const icon = i <= roundedRating ? solidStar : regularStar;
      stars.push(
        <FontAwesomeIcon key={i} icon={icon} className="text-yellow-500" />
      );
    }

    return stars;
  };

  return (
    <div className="rounded shadow-lg bg-whitesmoke">
      <div className="relative group overflow-hidden">
        <div>
          <img
            className="w-full transform group-hover:scale-110 transition-all duration-300"
            src={image}
            alt={title}
          />
        </div>

        <div className="transform group-hover:scale-110 transition-all duration-300 px-4 absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-evenly opacity-0 group-hover:opacity-100">
          <div className="h-1/2"></div>
          <div className="h-1/2 flex flex-col justify-around w-full items-center">
            <div>
              <button className="text-white px-3 py-1 m-2 rounded bg-orange-500 hover:bg-orange-600 hover:scale-110">
                View More <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
            <div className="flex gap-x-2 w-full justify-end px-3">
              <button
                className="bg-red-500 text-white hover:scale-110 hover:bg-red-600 w-1/3 rounded"
                title="Add To Favorites"
              >
                <FontAwesomeIcon icon={faHeartCirclePlus} size="lg" />
              </button>

              <button
                className="bg-orange-500 text-white hover:scale-110 hover:bg-orange-600 w-1/3 rounded"
                title="Add to Cart"
                onClick={() =>
                  addToCart({ id, title, price, image, quantity: 1 })
                }
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
              <button
                className="bg-green-500 text-white hover:scale-110 hover:bg-green-600 w-2/3 rounded"
                title="Buy Now"
              >
                <FontAwesomeIcon icon={faMoneyBill1} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-1 py-1">
        <div className="font-bold text-xl text-color10 mb-2 text-center">
          {title}
        </div>
        {(type === "anime" || type === "manga") && (
          <>
            <p className="text-gray-700 text-base mb-2">Genre: {genre}</p>
            <p className="text-gray-700 text-base">
              {type === "anime" ? "Episodes" : "Volume"}:{" "}
              {type === "anime" ? episodes : volume}
            </p>
          </>
        )}
        {type === "merchandise" && (
          <>
            <p className="text-gray-700 text-base">
              Rating: {renderStarIcons()}
            </p>
            <p className="text-gray-700 text-base">Product: {product}</p>
          </>
        )}
        <p className="text-gray-700 text-base">Price: ₱ {price}</p>
      </div>
    </div>
  );
};

export default Card;
