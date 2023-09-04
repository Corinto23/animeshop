import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CartContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "manga",
    },
    {
      id: 3,
      link: "anime",
    },
    {
      id: 4,
      link: "merchandise",
    },
  ];
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems);
    }
  }, [setCartItems]);

  const toggleMenu = () => {
    setNav(!nav);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="bg-color60 fixed w-full top-0 z-10 flex justify-between items-center h-20 px-4">
      <div>
        <NavLink to="/home">
          <h1 className="font-montserrat text-5xl text-color10 hover:text-orange-600">
            ANIMX
          </h1>
        </NavLink>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 font-roboto hover:text-color10"
          >
            <NavLink
              to={link}
              smooth
              duration={500}
              style={({ isActive, isPending }) =>
                isActive || isPending
                  ? {
                      color: "#D16923",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center relative text-whitesmoke">
        <NavLink to="checkout">
          <FontAwesomeIcon
            icon={faCartShopping}
            size="xl"
            className="hover:bg-color10 rounded"
          />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 px-1.5 py-0.5 rounded-full">
              {getTotalQuantity()}
            </span>
          )}
        </NavLink>
        <NavLink to="user">
          <FontAwesomeIcon
            icon={faCircleUser}
            size="xl"
            className="hover:bg-color10 rounded"
          />
        </NavLink>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <NavLink
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
