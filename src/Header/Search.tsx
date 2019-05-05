import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

const Search: React.FC = () => {
  return (
    <div className="search">
      <FontAwesomeIcon className="search__icon" icon={faSearch} color="#aaa" />
      <input placeholder="Search..." />
    </div>
  );
};

export default Search;
