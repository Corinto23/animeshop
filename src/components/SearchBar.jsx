import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search or any other desired action with the search term
    props.onSearch(searchTerm);
    // Clear the search term
    setSearchTerm("");
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="w-screen opacity-90 px-4 py-2 border border-color10 rounded-l-md focus:outline-none focus:ring focus:border-color10"
      />
      <button
        type="submit"
        className="bg-color10 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md focus:outline-none"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default SearchBar;
