import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_MOVIES_API}&query=${searchTerm}`;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    searchTerm && props.update(SEARCH_API);
    props.setCurrTab("search");
    props.setCurrSearch(searchTerm);
    e.preventDefault();
  };

  return (
    <>
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          placeholder="Search Movies.."
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Search;
