import React from "react";

const Search = (props) => {
  return (
    <>
      <p>{props.onSearch}</p>
      <form id="search-form" onSubmit={props.submit}>
        <input
          placeholder="Search Movies.."
          type="text"
          value={props.searchQuery}
          onChange={props.change}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Search;
