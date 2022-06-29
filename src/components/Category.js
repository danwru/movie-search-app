import React, { useState, useEffect } from "react";
import Genre from "./Genre";

const Category = (props) => {
  const [navToggle, setNav] = useState("category-links");

  const handleToggle = () => {
    navToggle === "category-links-active"
      ? setNav("category-links")
      : setNav("category-links-active");
  };
  useEffect(() => {
    if (props.currGenre !== "") {
      setNav("category-links");
    }
  }, [props.currGenre]);

  const categories = [
    { id: 1, value: "now_playing", display: "Now Playing" },
    { id: 2, value: "top_rated", display: "Top Rated" },
    { id: 3, value: "popular", display: "Popular" },
    { id: 4, value: "upcoming", display: "Upcoming" },
    { id: 5, value: "saved", display: "Watchlist" },
  ];

  const handleSelectClick = (e) => {
    props.handleSelect(e);
    props.setCurrTab("select");
    handleToggle();
  };

  return (
    <>
      <a href="/#" className="mobile-toggle-btn" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={navToggle}>
        <ul id="select-category">
          {categories.map((category) => (
            <li key={category.id} className="category-button">
              <button value={category.value} onClick={handleSelectClick}>
                {category.display}
              </button>
            </li>
          ))}
          <li className="category-button">
            <Genre
              updateMovies={props.update}
              setCurrTab={props.setCurrTab}
              setCurrGenre={props.setCurrGenre}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Category;
