import React, { useState } from "react";
import Genre from "./Genre";

const CategorySelect = (props) => {
  const [navToggle, setNav] = useState("category-links");

  const handleToggle = () => {
    navToggle === "category-links-active"
      ? setNav("category-links")
      : setNav("category-links-active");
  };

  const categories = [
    { id: 1, value: "now_playing", display: "Now Playing" },
    { id: 2, value: "top_rated", display: "Top Rated" },
    { id: 3, value: "popular", display: "Popular" },
    { id: 4, value: "upcoming", display: "Upcoming" },
    { id: 5, value: "saved", display: "Watchlist" },
  ];

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
              <button value={category.value} onClick={props.select}>
                {category.display}
              </button>
            </li>
          ))}
          <li className="category-button">
            <Genre updateMovies={props.update} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategorySelect;
